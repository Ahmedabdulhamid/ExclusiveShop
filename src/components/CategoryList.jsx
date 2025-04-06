import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { getProducts, getAllProductsCategories, getBestSelling, exploreProducts } from '../Redux/products'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export const CategoryList = () => {
  const navigate=useNavigate()
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const { loading, products, productCategories, bestSelling, productsExplore } = useSelector((s) => s.productsToolkit)
  const dispatch = useDispatch()
  const handleListItemClick = (e, index) => {
 
    setSelectedIndex(index);
    navigate(`/products/category/${e}`)
  };
  useEffect(() => {
    dispatch(getAllProductsCategories())

  }, [])
  console.log(productCategories);


  return (
    <Box
    sx={{
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
      overflow: "auto", // يضيف التمرير عند الحاجة
      maxHeight: "400px", // يحدد الحد الأقصى للارتفاع
    }}
  >
    <List component="nav" aria-label="main mailbox folders">
      {productCategories.map((e, index) => (
        <ListItemButton
          key={index}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(`${e.slug}`, index)}
        >
          <ListItemText primary={e.name} />
        </ListItemButton>
      ))}
    </List>
    <Divider />
  </Box>
  
  );
};
