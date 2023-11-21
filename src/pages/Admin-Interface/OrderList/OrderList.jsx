import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OrderBox from "../../../components/orderbox/OrderBox";
import DoneIcon from "@mui/icons-material/Done";
import { useState, useEffect } from "react";
import { variables } from "../../Variables";
import axios from "axios";

function OrderList(props) {
  const [value, setValue] = useState("1");
  const [OrderUnC, setOrderUnC] = useState([]);
  const [OrderC, setOrderC] = useState([]);
  const [OrderH, setOrderH] = useState([]);

  //refresh function
  const refresh = () => {
    //Save incomplete
    axios.get(variables.API_URL + "order").then((res) => {
      setOrderUnC(
        res.data.filter((offer) => offer.status == variables.order_incomplete)
      );
      setOrderC(
        res.data.filter((offer) => offer.status == variables.order_completed)
      );
      setOrderH(
        res.data.filter(
          (offer) =>
            offer.status == variables.order_delivered ||
            offer.status == variables.order_cancelled
        )
      );
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pagesContent ms-lg-5 me-md-3 ms-md-0">
      <h4>Order Managment</h4>
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
              <Tab label="incomplete" value="1" className="btn btn-secondary" />
              <Tab label="complete" value="2" className="btn btn-secondary" />
              <Tab label="History" value="3" className="btn btn-secondary" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="row">
              {/* incomplete */}
              {OrderUnC.length > 0 ? (
                OrderUnC.map((order) => (
                  <OrderBox
                    refresh={refresh}
                    setOrderId={props.setOrderId}
                    type="1"
                    data={order}
                    action={order.status} /*disableMoreIcon={true}*/
                  />
                ))
              ) : (
                <p>Empty</p>
              )}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="row">
              {/* incomplete */}
              {OrderC.length > 0 ? (
                OrderC.map((order) => (
                  <OrderBox
                    refresh={refresh}
                    setOrderId={props.setOrderId}
                    type="2"
                    data={order}
                    action={order.status} /*disableMoreIcon={true}*/
                  />
                ))
              ) : (
                <p>Empty</p>
              )}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="row">
              {/* incomplete */}
              {OrderH.length > 0 ? (
                OrderH.map((order) => (
                  <OrderBox
                    refresh={refresh}
                    setOrderId={props.setOrderId}
                    type="3"
                    data={order}
                    action={order.status}
                    disableMoreIcon={true}
                  />
                ))
              ) : (
                <p>Empty</p>
              )}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default OrderList;
