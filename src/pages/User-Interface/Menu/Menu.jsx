import "./Menu.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MenuItemBox2 from "../../../components/menuItemBox2/MenuItemBox2";
import { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "../../Variables";

function Menu(props) {
  const [value, setValue] = useState("1");
  const [sections, setSections] = useState([]);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //refresh function
  const refresh = () => {
    //Save items
    axios.get(variables.API_URL + "Item").then((res) => {
      const itemsList = res.data.filter(
        (item) => item.status == variables.onMenuValue
      );
      setItems(itemsList);
      console.log(items);
    });
    //Save Sections
    axios.get(variables.API_URL + "Item/Sections").then((res) => {
      const s = res.data.filter((sec) => sec.isHidden == false);
      setSections(s);
      console.log(sections);
    });
  };

  useEffect(() => {
    refresh();
    if (sections.length == 0) {
      setValue("1");
    } else {
      setValue(`${sections[0].id}`);
    }
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
                    <Tab
                      label={section.name}
                      value={`${section.id}`}
                      className="btn btn-secondary"
                    />
                  ))}
                </TabList>
              </Box>
              {sections.map((section) => (
                <TabPanel value={`${section.id}`}>
                  <div className="row">
                    {items
                      .filter((item) => item.section_id === section.id)
                      .map((item) => (
                        <MenuItemBox2
                          setCart={props.setCart}
                          cart={props.cart}
                          item={item}
                        />
                      ))}
                  </div>
                </TabPanel>
              ))}
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Menu;
