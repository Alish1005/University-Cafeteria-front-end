import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DeleteIcon from '@mui/icons-material/Delete';


const restaurantSections = {
  "Appetizers": [
    { name: "Mozzarella Sticks", price: 7.99 },
    { name: "Spinach Artichoke Dip", price: 8.99 },
    { name: "Bruschetta", price: 6.49 },
    { name: "Chicken Wings", price: 9.99 },
    { name: "Potato Skins", price: 7.49 },
    { name: "Shrimp Cocktail", price: 10.99 },
    { name: "Stuffed Mushrooms", price: 8.99 },
    { name: "Onion Rings", price: 6.99 },
    { name: "Caprese Salad", price: 8.49 },
    { name: "Fried Calamari", price: 9.49 }
  ],
  "Main Courses": [
    { name: "Grilled Steak", price: 18.99 },
    { name: "Spaghetti Carbonara", price: 14.49 },
    { name: "Chicken Alfredo", price: 15.99 },
    { name: "Salmon Fillet", price: 17.49 },
    { name: "Vegetable Stir-Fry", price: 13.99 },
    { name: "Burger with Fries", price: 12.99 },
    { name: "Lobster Tail", price: 22.99 },
    { name: "Eggplant Parmesan", price: 14.99 },
    { name: "BBQ Ribs", price: 16.99 },
    { name: "Shrimp Scampi", price: 18.49 }
  ],
  "Desserts": [
    { name: "Chocolate Cake", price: 6.99 },
    { name: "Tiramisu", price: 7.49 },
    { name: "Cheesecake", price: 6.99 },
    { name: "Apple Pie", price: 5.99 },
    { name: "Ice Cream Sundae", price: 4.99 },
    { name: "Fruit Tart", price: 6.49 },
    { name: "Brownie Sundae", price: 7.49 },
    { name: "Panna Cotta", price: 5.99 },
    { name: "Creme Brulee", price: 7.99 },
    { name: "Key Lime Pie", price: 6.49 }
  ],
  "Beverages": [
    { name: "Soda (Can)", price: 1.99 },
    { name: "Iced Tea", price: 2.49 },
    { name: "Lemonade", price: 2.49 },
    { name: "Coffee", price: 1.99 },
    { name: "Mineral Water", price: 2.99 },
    { name: "Fruit Juice", price: 2.99 },
    { name: "Milkshake", price: 3.99 },
    { name: "Cappuccino", price: 3.49 },
    { name: "Smoothie", price: 4.49 },
    { name: "Hot Chocolate", price: 2.99 }
  ],
  "Salads": [
    { name: "Caesar Salad", price: 8.99 },
    { name: "Greek Salad", price: 9.49 },
    { name: "Cobb Salad", price: 9.99 },
    { name: "Caprese Salad", price: 8.49 },
    { name: "Spinach Salad", price: 8.99 },
    { name: "Chef's Salad", price: 9.99 },
    { name: "Asian Salad", price: 8.49 },
    { name: "Nicoise Salad", price: 10.49 },
    { name: "Waldorf Salad", price: 9.49 },
    { name: "Mediterranean Salad", price: 9.99 }
  ],
  "Specials of the Day": [
    { name: "Chef's Special Pasta", price: 16.99 },
    { name: "Seafood Platter", price: 19.99 },
    { name: "Vegetarian Curry", price: 14.99 },
    { name: "Grilled Chicken Sandwich", price: 12.99 },
    { name: "Soup of the Day", price: 5.99 },
    { name: "BBQ Pulled Pork", price: 13.99 },
    { name: "Stuffed Bell Peppers", price: 14.49 },
    { name: "Beef Tacos", price: 11.99 },
    { name: "Pesto Pasta", price: 15.49 },
    { name: "Blackened Salmon", price: 18.99 }
  ],
  "Sides": [
    { name: "French Fries", price: 3.49 },
    { name: "Garlic Bread", price: 2.99 },
    { name: "Mashed Potatoes", price: 3.99 },
    { name: "Steamed Vegetables", price: 4.49 },
    { name: "Onion Rings", price: 3.99 },
    { name: "Coleslaw", price: 2.49 },
    { name: "Rice Pilaf", price: 3.49 },
    { name: "Side Salad", price: 3.99 },
    { name: "Macaroni and Cheese", price: 4.49 },
    { name: "Baked Beans", price: 2.99 }
  ],
  "Kids Menu": [
    { name: "Chicken Tenders", price: 6.99 },
    { name: "Mini Cheeseburger", price: 5.99 },
    { name: "Grilled Cheese Sandwich", price: 4.99 },
    { name: "Spaghetti with Marinara", price: 5.49 },
    { name: "Peanut Butter & Jelly", price: 4.49 },
    { name: "Kid's Pizza", price: 6.49 },
    { name: "Mini Hot Dogs", price: 5.99 },
    { name: "Fish Sticks", price: 6.49 },
    { name: "Macaroni and Cheese", price: 5.49 },
    { name: "Chicken Quesadilla", price: 6.99 }
  ],
  "Vegetarian Options": [
    { name: "Vegetable Stir-Fry", price: 13.99 },
    { name: "Mushroom Risotto", price: 14.49 },
    { name: "Vegetarian Pizza", price: 11.99 },
    { name: "Spinach and Feta Wrap", price: 10.99 },
    { name: "Vegetable Curry", price: 12.99 },
    { name: "Eggplant Parmesan", price: 13.49 },
    { name: "Tofu Scramble", price: 10.99 },
    { name: "Veggie Burger", price: 9.99 },
    { name: "Quinoa Salad", price: 10.49 },
    { name: "Stuffed Bell Peppers (Vegetarian)", price: 14.49 }
  ],
  "Gluten-Free": [
    { name: "Gluten-Free Pizza", price: 12.99 },
    { name: "Grilled Chicken Breast", price: 15.99 },
    { name: "Quinoa Bowl", price: 13.99 },
    { name: "Salmon with Steamed Veggies", price: 18.99 },
    { name: "Gluten-Free Pasta with Pesto", price: 14.99 },
    { name: "Vegetable Stir-Fry (Gluten-Free)", price: 14.49 },
    { name: "Fruit Salad", price: 6.99 },
    { name: "Chocolate Flourless Cake", price: 7.99 },
    { name: "Gluten-Free Pancakes", price: 8.99 },
    { name: "Grilled Shrimp Skewers", price: 16.99 }
  ]
};

const u=Object.keys(restaurantSections);

function StaffMenu() {
    const [value, setValue] = React.useState('1');
    const [orderlist, setOrderlist] = React.useState([]);
    const [item, setItem] = React.useState("");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const addItem = (s) => {
      setOrderlist(prevArray => [...prevArray, s]);
    };
    return ( 
        <div className="pagesContent">
          <h3>Menu</h3>
          <div className="row">
          <div className="col-lg-7 col-sm-12">
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

                  <Tab label="Appetizers" value="1"  className='btn btn-secondary' />
                  <Tab label="Sides" value="2" className='btn btn-secondary' />
                  <Tab label="Desserts" value="3"  className='btn btn-secondary' />
                </TabList>
              </Box>
              <TabPanel value="1">
                {
                restaurantSections.Appetizers.map(s => (
                    <button onClick={()=>addItem(s)}  className='col-3 m-2 text-black btn btn-secondary'>
                      <p>{s.name}</p>
                      <p>{s.price}$</p>
                    </button>
                ))
                }
              </TabPanel>
              <TabPanel value="2">
                <div className="row">
                {
                restaurantSections.Sides.map(s => (
                    <a onClick={()=>addItem(s)} className='col-3 m-2 text-black btn btn-secondary'>
                      <p>{s.name}</p>
                      <p>{s.price}$</p>
                    </a>
                ))
                }
                </div>
                </TabPanel>
              <TabPanel value="3">
                <div className="row">
                {
                restaurantSections.Desserts.map(s => (
                    <a  onClick={()=>addItem(s)} className='col-3 m-2 text-black btn btn-secondary'>
                      <p>{s.name}</p>
                      <p>{s.price}$</p>
                    </a>
                ))
                }
                </div>
                </TabPanel>
            </TabContext>
          </Box>
          </div>
            <div className="col-lg-4 col-md-12 col-sm-12 p-2 text-black bg-secondary rounded">
              <h3>Order List</h3>
              <hr />
              <table className='table'>
                <tr>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>action</th>
                </tr>
              {
                orderlist.map(s => (
                    <tr>
                      <td>{s.name}</td>
                      <td>{s.price}$</td>
                      <td>1</td>
                      <td><button className='btn btn-danger'><DeleteIcon/></button></td>
                    </tr>
                ))
                }
              </table>
              <hr />
              <h4>Total Price : 12$</h4>
            </div>
          </div>
          
        </div>
     );
}

export default StaffMenu;