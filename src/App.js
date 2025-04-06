import React, { useEffect, useState } from 'react';
import { Shop } from './components/Shop';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Header } from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Signup } from './components/Signup';
import About from './components/About';
import NotFound from './components/NotFound';
import { ProductsByCat } from './components/ProductsByCat';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Account from './components/Account';
import Details from './components/Details';
import Checkout from './components/Checkout';
import { Whishlist } from './components/Whishlist';
import { useSelector } from 'react-redux';
import HeaderTop from './components/HeaderTop';
const App = () => {

  const { loading, searchResult } = useSelector((s) => s.productsToolkit);
  const [users, setUsers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('users')) {
      setUsers(JSON.parse(localStorage.getItem('users')));
    }
    if (localStorage.getItem('Auth')) {
      setUserAuth(JSON.parse(localStorage.getItem('Auth')));
    }
    if (localStorage.getItem('Auth')) {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
      setWishList(JSON.parse(localStorage.getItem("wishlist")) || []);
    }
  }, []);
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  function ProtectedRoute(props) {
    return localStorage.Auth ? <Navigate to='/' as={Link} /> : <>{props.children}</>;
  }

  function ConfirmAuth(props) {
    return localStorage.Auth ? <>{props.children}</> : <Navigate to='/' as={Link} />;
  }

  const handleQuantityChange = (id, value) => {
    setCart(prevCart =>
      value === 0 ? prevCart.filter(item => item.id !== id) :
        prevCart.map(item => item.id === id ? { ...item, quantity: value } : item)
    );
  };

  function addCart(obj) {
    if (!localStorage.getItem("Auth")) {
      toast.error("يجب تسجيل الدخول لإضافة المنتجات ❌");
      return;
    }

    let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    let check = newCart.some(e => e.id === obj.id);

    if (!check) {
      newCart.push({ ...obj, quantity: 1 });
      toast.success("تمت إضافة المنتج إلى السلة ✅");
    } else {
      newCart = newCart.map(e => e.id === obj.id ? { ...e, quantity: e.quantity + 1 } : e);
      toast.info("تم تحديث الكمية 🔄");
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function addWishList(obj) {
    if (!localStorage.getItem("Auth")) {
      toast.error("يجب تسجيل الدخول لإضافة المفضلات ❌");
      return;
    }

    let newWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let check = newWishlist.some(e => e.id === obj.id);

    if (!check) {
      let updatedWishlist = [...newWishlist, obj]; // إنشاء نسخة جديدة
      setWishList(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.success("تمت إضافة المنتج إلى المفضلات ✅");
    } else {
      toast.warning("هذا المنتج موجود بالفعل 🔄");
    }
  }

  function removeWishlist(id) {
    let newWishList = wishList.filter(e => e.id !== id);
    setWishList(newWishList);
    localStorage.setItem('wishlist', JSON.stringify(newWishList));
  }

  return (
    <> 
    <HeaderTop/>
      <Header wishList={wishList} userAuth={userAuth} cart={cart} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover />

      <Routes>
        <Route path='/' element={<Home cart={cart} addCart={addCart} addWishList={addWishList} />} />
        <Route path='/shop' element={<Shop cart={cart} addCart={addCart} addWishList={addWishList} />} />
        <Route path={localStorage.Auth?'/details/:id':'/'} element={
          <Details addWishList={addWishList} />
       } />
        <Route path='/register' element={<ProtectedRoute><Signup users={users} /></ProtectedRoute>} />
        <Route path='/login' element={<ProtectedRoute><Login users={users} userAuth={userAuth} /></ProtectedRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />

        <Route path='/contact' element={<ConfirmAuth><Contact cart={cart} setCart={setCart} handleQuantityChange={handleQuantityChange} /></ConfirmAuth>} />

        <Route path='/products/category/:key' element={<ProductsByCat addWishList={addWishList} cart={cart} addCart={addCart} />} />
        <Route path='/cart' element={<ConfirmAuth><Cart cart={cart} setCart={setCart} handleQuantityChange={handleQuantityChange} /></ConfirmAuth>} />
        <Route path='/wishlist' element={<ConfirmAuth><Whishlist wishList={wishList} addCart={addCart} addWishList={addWishList} removeWishlist={removeWishlist} /></ConfirmAuth>} />
        <Route path='/checkout' element={<ConfirmAuth><Checkout cart={cart} /></ConfirmAuth>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myAccount' element={<ConfirmAuth><Account userAuth={userAuth} setUserAuth={setUserAuth} users={users} setUsers={setUsers} /></ConfirmAuth>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
