import "./Menu.css";
import offer1 from "../../../assets/offer1.jpg";
import offer2 from "../../../assets/offer2.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuItemBox from "../../../components/menuItemBox/MenuItemBox";
import MenuItemBox2 from "../../../components/menuItemBox2/MenuItemBox2";
import { useState ,useEffect } from "react";
import axios from "axios";
import { variables } from "../../Variables";

function Menu() {
  const [value, setValue] = React.useState("1");

  const [sections, setSections] = useState([]);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    //refresh function
    const refresh = () => {
      //Save items
      axios.get(variables.API_URL + "Item").then((res) => {
        setItems(
          res.data.filter((item) => item.status == variables.onMenuValue)
        );
      });
      //Save Sections
      axios.get(variables.API_URL + "Item/Sections").then((res) => {
        setSections(res.data);
      });
    };

    useEffect(() => {
      refresh();
    }, []);



  return (
    <div className="mb-3">
      <div className="MenuPage">
        <div className="heading text-primary bg-secondary">
          <h3>&mdash; Menu &mdash;</h3>
        </div>
        <div className="container">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                {/*Label nav bar*/}
                <TabList
                  variant="scrollable"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  TabIndicatorProps={{ sx: { backgroundColor: "#1E3669" } }}
                  sx={{
                    "& button": { color: "#1976D2" },
                    "& button.Mui-selected": {
                      color: "#1E3669",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {sections.map((section) => (
                    <div key={section.id}>
                      <Tab
                        label={section.Name}
                        value={section.id}
                        className="btn btn-secondary"
                      />
                      <TabPanel value={section.id}>
                        <div className="row">
                          {items
                            .filter((item) => item.section.id === section.id)
                            .map((item) => (
                              // Render your item components here
                              <div key={item.id}>{item.name}</div>
                            ))}
                        </div>
                      </TabPanel>
                    </div>
                  ))}

                  <Tab
                    label="Fast Food"
                    value="1"
                    className="btn btn-secondary"
                  />
                  <Tab
                    label="Cold Drinks"
                    value="2"
                    className="btn btn-secondary"
                  />
                  <Tab
                    label="Hot Drinks"
                    value="3"
                    className="btn btn-secondary"
                  />
                  <Tab
                    label="Dessert"
                    value="4"
                    className="btn btn-secondary"
                  />
                  <Tab
                    label="Sandwiches"
                    value="5"
                    className="btn btn-secondary"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row">
                  <MenuItemBox
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    id="1"
                  />
                  <MenuItemBox
                    img="https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg"
                    name="Margherita Pizza"
                    component="Dough, Tomato Sauce, Fresh Mozzarella, Basil"
                    price="12.99"
                    outstock={true}
                    id="3"
                  />
                  <MenuItemBox
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    isNew={true}
                    outstock={true}
                    id="4"
                  />
                </div>
              </TabPanel>

              <TabPanel value="2">
                <div className="row">
                  <MenuItemBox2
                    img="https://www.allrecipes.com/thmb/8NJNOMOOLp0nB2eNVitXk-nr9Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14172-caesar-salad-supreme-armag-102369087-4547d359aee84f5a84c80b292f0d1449.jpg"
                    name="Caesar Salad"
                    component="Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing"
                    price="7.99"
                    id="5"
                  />
                  <MenuItemBox2
                    img="https://images.aws.nestle.recipes/original/c3be76d373916f1a8a39db37787f17a0_creamy_fruit_salad.jpg"
                    name="Fruit Salad"
                    component="Assorted Fresh Fruits"
                    price="4.49"
                    isNew={true}
                    id="6"
                  />
                  <MenuItemBox2
                    img="https://images-gmi-pmc.edge-generalmills.com/2937ced7-648f-4ddb-a7e4-ccdaafb7b9bf.jpg"
                    name="Veggie Wrap"
                    component="Tortilla, Hummus, Mixed Vegetables"
                    price="6.49"
                    outstock={true}
                    id="7"
                  />
                  <MenuItemBox2
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    isNew={true}
                    outstock={true}
                    id="8"
                  />
                  <MenuItemBox2
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    id="9"
                  />
                  <MenuItemBox2
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    id="10"
                  />
                  <MenuItemBox2
                    img="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
                    name="Burger"
                    component="Beef, Pickles, Cheese, Fries, Potato, Tomato"
                    price="5"
                    id="11"
                  />
                </div>
              </TabPanel>
              <TabPanel value="3"></TabPanel>
              <TabPanel value="4"></TabPanel>
              <TabPanel value="5"></TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Menu;
