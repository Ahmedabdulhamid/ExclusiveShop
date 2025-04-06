import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { searchProducts,getProductDetails } from '../Redux/products';
import { useDispatch, useSelector } from 'react-redux';
import _, { functions } from "lodash";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Header = ({ cart, userAuth, wishList, setWishList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const open = Boolean(anchorEl);
  const { loading, searchResult } = useSelector((s) => s.productsToolkit);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleToggle = () => setExpanded(!expanded);
  const handleNavLinkClick = () => setExpanded(false);

  const logout = () => {
    localStorage.removeItem('Auth');
    navigate('/login');
    handleClose();
    userAuth = null;
  };

  const account = () => {
    navigate('/myAccount');
    handleClose();
  };

  const handleSearch = _.debounce(() => {
    if (searchKey.trim() !== "") {
      dispatch(searchProducts(searchKey));
    }
  }, 500);

  function goDetails(e) {
    if (!localStorage.Auth) {
                toast.error("You need to login first!"); // عرض Toast إذا لم يكن المستخدم مسجل دخول
               navigate('/')
            }
            else{
              navigate(`/details/${e}`);
              dispatch(getProductDetails(e))
              setSearchKey('')
            }
   
  }

  return (
    <div className="mb-5 " style={{ zIndex: 100000 }}>
      <Navbar expand="lg"  expanded={expanded} style={{ background: "#FFFFFF" }} className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "700", fontSize: "24px" }}>
            Exclusive
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-lg-center w-100">
              <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick}>About</Nav.Link>
              {!localStorage.Auth ? (
                <Nav.Link as={Link} to="/register" onClick={handleNavLinkClick}>Sign Up</Nav.Link>
              ) : null}
              <Nav.Link className="ms-3" as={Link} to="/wishlist" onClick={handleNavLinkClick}>
                <div className="position-relative">
                  <FavoriteBorderIcon />
                  {wishList.length > 0 && (
                    <span className="position-absolute top-0 translate-middle"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#DB4444",
                        color: "#FAFAFA",
                        fontSize: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        left: "25px"
                      }}>
                      {wishList.length}
                    </span>
                  )}
                </div>
              </Nav.Link>

              <Nav.Link className="ms-3" as={Link} to="/cart" onClick={handleNavLinkClick}>
                <div className="position-relative">
                  <ShoppingCartOutlinedIcon />
                  {cart.length > 0 && (
                    <span className="position-absolute top-0 translate-middle"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#DB4444",
                        color: "#FAFAFA",
                        fontSize: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        left: "25px"
                      }}>
                      {cart.length}
                    </span>
                  )}
                </div>
              </Nav.Link>

              {!localStorage.Auth ? ('') : (
                <>
                  <Nav.Link id="fade-button" onClick={handleClick}>
                    <PersonOutlineIcon />
                  </Nav.Link>
                  <Menu id="fade-menu" anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
                    <MenuItem onClick={account}>My account</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </Nav>
          </Navbar.Collapse>

          <Box component="form" className='mx-1'
            sx={{ display: "flex", alignItems: "center", maxWidth: { xs: "140px", sm: "200px", md: "250px" }, ml: "auto" }}
            noValidate autoComplete="off"
            onKeyUp={() => {
              if (searchKey.trim() !== "") {
                handleSearch();
              }
            }}>
            <TextField value={searchKey} onChange={(e) => setSearchKey(e.target.value)}
              id="search-input" label="Search" variant="filled" fullWidth size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiInputBase-root": {
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                },
              }}
            />
          </Box>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        </Container>
      </Navbar>

      {searchKey.trim() === "" ? null : (
      <div className="position-relative w-100 d-flex" style={{ zIndex: "30000" }}>
      <div className="position-absolute top-100 end-0 w-100 d-flex justify-content-end me-3">
        <div
          className="z-3 rounded-3 border border-light shadow-lg"
          style={{
            width: "350px",
            maxHeight: "400px",
            overflowY: "auto",
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(10px)",
            padding: "10px",
          }}
        >
          <div className="container">
            {searchResult.length > 0 ? (
              <div style={{ cursor: "pointer", listStyle: "none" }}>
                {searchResult.map((e) => (
                  <div
                    key={e.id}
                    className="d-flex align-items-center p-2 rounded-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      transition: "0.3s",
                      marginBottom: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => goDetails(e.id)}
                    onMouseEnter={(event) =>
                      (event.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")
                    }
                    onMouseLeave={(event) =>
                      (event.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
                    }
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar alt={e.title} src={e.thumbnail} sx={{ width: 46, height: 46 }} />
                    </Stack>
                    <span className="text-light ms-3">{e.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-light text-center">No results found</p>
            )}
          </div>
        </div>
      </div>
    </div>
    
      )}
    </div>
  );
};
