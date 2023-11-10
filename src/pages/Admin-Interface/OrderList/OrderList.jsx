
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OrderBox from '../../../components/orderbox/OrderBox';
import DoneIcon from '@mui/icons-material/Done';
import { useState,useEffect } from 'react';
import { variables } from '../../Variables';
import axios from 'axios';
const orders = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    time: "15:30",
    total: 75.50,
    items: [
      {
        name: "Widget A",
        quantity: 3,
        price: 10.00,
        total: 30.00,
        note: "Customer prefers blue color"
      },
      {
        name: "Gadget B",
        quantity: 2,
        price: 25.50,
        total: 51.00,
        note: "Expedited shipping requested"
      },
      {
        name: "Accessory C",
        quantity: 1,
        price: 5.75,
        total: 5.75,
        note: "No specific notes"
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "987-654-3210",
    time: "12:15",
    total: 105.25,
    items: [
      {
        name: "Gadget X",
        quantity: 1,
        price: 90.00,
        total: 90.00,
        note: "Expedited shipping requested"
      },
      {
        name: "Accessory Y",
        quantity: 3,
        price: 5.50,
        total: 16.50,
        note: "Gift wrap required"
      }
    ]
  },
  {
    id: 3,
    name: "Michael Johnson",
    phone: "555-123-4567",
    time: "09:45",
    total: 50.75,
    items: [
      {
        name: "Widget B",
        quantity: 2,
        price: 15.00,
        total: 30.00,
        note: "Urgent delivery needed"
      },
      {
        name: "Accessory Z",
        quantity: 1,
        price: 20.75,
        total: 20.75,
        note: "Special request: custom engraving"
      }
    ]
  },
  // Continue adding more orders...
];

function OrderList() {
  const [value, setValue] =useState('1');
  const [OrderUnC, setOrderUnC] =useState([]);
  const [OrderC, setOrderC] =useState([]);
  const [OrderH, setOrderH] =useState([]);

//refresh function
const refresh=()=>{
  //Save un-complete
      axios.get(variables.API_URL+"order")
      .then((res) => {
        setOrderUnC(res.data.filter((offer)=>offer.status==variables.order_uncompete));
      })

      axios.get(variables.API_URL+"order")
      .then((res) => {
        setOrderC(res.data.filter((offer)=>offer.status==variables.order_completed));
      })

      axios.get(variables.API_URL+"order")
      .then((res) => {
        setOrderH(res.data.filter((offer)=>offer.status==variables.order_delivered || variables.order_cancelled));
      })
}

  useEffect(()=> {
    refresh();
    },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return ( 
        <div className="pagesContent ms-lg-5 me-md-3 ms-md-0">
          <h4>Order Managment</h4>
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
                  <Tab label="un-complete" value="1" className='btn btn-secondary' />
                  <Tab label="complete" value="2"  className='btn btn-secondary' />
                  <Tab label="History" value="3"  className='btn btn-secondary' />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className='row'>
                { /* Un-complete */}
                {OrderUnC.length>0 ?OrderUnC.map((order)=>(<OrderBox  type='1' data={order} action={'Complete'} /*disableMoreIcon={true}*//>)) 
                : <p>Empty</p>}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="row">
                  <OrderBox  type='2' data={orders[1]} action={'Delivered'}/><OrderBox  type='2' data={orders[2]} action={'Delivered'}/><OrderBox  type='2' data={orders[1]} action={'Delivered'}/><OrderBox  type='2' data={orders[0]} action={'Delivered'}/>
                  </div>
                </TabPanel>
              <TabPanel value="3">
                <div className="row">
                  <OrderBox  type='3' data={orders[2]} action={'Reorder'}/><OrderBox  type='3' data={orders[1]} action={'Reorder'}/><OrderBox  type='3' data={orders[0]} action={'Reorder'}/><OrderBox  type='3' data={orders[2]} action={'Reorder'}/><OrderBox  type='3' data={orders[1]} action={'Reorder'}/><OrderBox  type='3' data={orders[1]} action={'Reorder'}/><OrderBox  type='3' data={orders[0]} action={'Reorder'}/><OrderBox  type='3' data={orders[2]} action={'Reorder'}/>
                </div>
                </TabPanel>
            </TabContext>
          </Box>
        </div>
     );
}

export default OrderList;