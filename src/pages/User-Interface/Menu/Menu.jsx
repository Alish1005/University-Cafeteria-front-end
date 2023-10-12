import "./Menu.css";
import offer1 from "../../../assets/offer1.jpg";
import offer2 from "../../../assets/offer2.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuItemBox from "../../../components/menuItemBox/MenuItemBox";
import MenuItemBox2 from "../../../components/menuItemBox2/MenuItemBox2";

function Menu() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mb-3">
        <div className="MenuPage">
            <div className="heading text-primary bg-secondary">
              <h3>&mdash; Menu &mdash;</h3>
            </div>
            <div className="container">
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {/*Label nav bar*/}
                <TabList  variant="scrollable" onChange={handleChange} aria-label="lab API tabs example" 
                  TabIndicatorProps={{sx: {backgroundColor: '#1E3669'}}}
                  sx={{
                    "& button":{color:'#1976D2'},
                    "& button.Mui-selected":{color:'#1E3669',fontWeight:"bold"}
                  }}
                >
                  <Tab label={<span><FastfoodIcon/> Fast Food</span>} value="1" className='btn btn-secondary' />
                  <Tab label="Cold Drinks" value="2"  className='btn btn-secondary' />
                  <Tab label="Hot Drinks" value="3"  className='btn btn-secondary' />
                  <Tab label="Dessert" value="4"  className='btn btn-secondary' />
                  <Tab label="Sandwiches" value="5"  className='btn btn-secondary' />
                  
                </TabList>
              </Box>
              <TabPanel value="1"><div className="row"><MenuItemBox img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" id="1"/><MenuItemBox 
              img="data:image/jpeg;base64,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"
               name="Grilled Chicken Salad" component="Chicken, Lettuce, Tomatoes, Cucumbers, Ranch Dressing" price="9.99" isNew={true} id="2"/><MenuItemBox img="https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg" name="Margherita Pizza" component="Dough, Tomato Sauce, Fresh Mozzarella, Basil" price="12.99" outstock={true} id="3"/><MenuItemBox img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" isNew={true} outstock={true} id="4"/></div></TabPanel>
              <TabPanel value="2"><div className="row"><MenuItemBox2 img="https://www.allrecipes.com/thmb/8NJNOMOOLp0nB2eNVitXk-nr9Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14172-caesar-salad-supreme-armag-102369087-4547d359aee84f5a84c80b292f0d1449.jpg" name="Caesar Salad" component="Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing" price="7.99" id="5"/><MenuItemBox2 img="https://images.aws.nestle.recipes/original/c3be76d373916f1a8a39db37787f17a0_creamy_fruit_salad.jpg" name="Fruit Salad" component="Assorted Fresh Fruits" price="4.49" isNew={true} id="6"/><MenuItemBox2 img="https://images-gmi-pmc.edge-generalmills.com/2937ced7-648f-4ddb-a7e4-ccdaafb7b9bf.jpg" name="Veggie Wrap" component="Tortilla, Hummus, Mixed Vegetables" price="6.49" outstock={true} id="7"/><MenuItemBox2 img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" isNew={true} outstock={true} id="8"/><MenuItemBox2 img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" id="9"/><MenuItemBox2 img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" id="10"/><MenuItemBox2 img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg" name="Burger" component="Beef, Pickles, Cheese, Fries, Potato, Tomato" price="5" id="11"/></div></TabPanel>
              <TabPanel value="3">
                <div className="row">
                <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                  <div className="food-items col-3 m-3 p-0">
                    <img src={offer2}></img>
                    <div className="details">
                      <div className="details-sub">
                        <h5 className="name">Burger</h5>
                        <h5 id="price">8$</h5>
                      </div>
                      <p>
                        Crispy chicken burger with breaded mozzarella and our special
                        sauce
                      </p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </div>

              </TabPanel>
              <TabPanel value="4"></TabPanel>
              <TabPanel value="5"></TabPanel>
            </TabContext>
          </Box>
          </div>
        </div>
    </div>
  );

  //   function addCart() {
  //     const name = document.querySelectorAll(".name");
  //     const price = document.querySelectorAll("#price");
  //     const button = document.querySelectorAll("button");
  //     const cart = [];
  //     const addToCart = () => {
  //       for (var i = 0; i < 1; i++) {
  //         cart.push(name[i].innerText);
  //         cart.push(parseInt(price[i].innerText));
  //       }
  //       console.log(cart);
  //     };
  //   }
}

export default Menu;
