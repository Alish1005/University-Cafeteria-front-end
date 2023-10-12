import './itemManagments.css'
import DataTable from '../../../components/datatable/DataTable';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';

const row = [
  {id: 1,name: "Delicious Delights",price: 15.99,income: 319.80,quantity: 30,points: 4.5,publishDate: "2023-08-25",orders: 45 },
  {id: 2,name: "Savory Bites",price: 12.49,income: 224.82,quantity: 20,points: 4.2,publishDate: "2023-08-24",orders: 37 },
  {id: 3,name: "Taste Haven",price: 18.75,income: 337.50,quantity: 25,points: 4.8,publishDate: "2023-08-23",orders: 50 },
  {id: 4,name: "Flavorful Eats",price: 9.99,income: 179.82,quantity: 15,points: 4.0,publishDate: "2023-08-22",orders: 30 },
  {id: 5,name: "Cuisine Corner",price: 14.25,income: 256.50,quantity: 18,points: 4.6,publishDate: "2023-08-21",orders: 42},
  {id: 6,name: "Gourmet Grill",price: 20.50,income: 369.00,quantity: 22,points: 4.9,publishDate: "2023-08-20",orders: 55},
  {id: 7,name: "Spice Palace",price: 11.95,income: 215.10,quantity: 16,points: 4.3,publishDate: "2023-08-19",orders: 39},
  {id: 8,name: "Flourish Flavors",price: 16.75,income: 301.50,quantity: 28,points: 4.7,publishDate: "2023-08-18",orders: 48},
  {id: 9,name: "Tasty Treats",price: 13.50,income: 243.00,quantity: 19,points: 4.4,publishDate: "2023-08-17",orders: 41},
  {id: 11,name: "Flavorsome Fusion",price: 22.99,income: 413.82,quantity: 24,points: 4.8,publishDate: "2023-08-16",orders: 57},  {id: 8,name: "Flourish Flavors",price: 16.75,income: 301.50,quantity: 28,points: 4.7,publishDate: "2023-08-18",orders: 48},
  {id: 12,name: "Tasty Treats",price: 13.50,income: 243.00,quantity: 19,points: 4.4,publishDate: "2023-08-17",orders: 41},
  {id: 13,name: "Flavorsome Fusion",price: 22.99,income: 413.82,quantity: 24,points: 4.8,publishDate: "2023-08-16",orders: 57}
];
const columns = [
  { field: "id", headerName: "ID", width: 40 },
 {
   field: "img",
   headerName: "Avatar",
   width: 70,
   renderCell: (params) => {
     return <img src={params.row.img || "/noavatar.png"} alt="" />;
   },
 },
 {
   field: "name",
   type: "string",
   headerName: "Item name",
   width: 170,
 },
 {
   field: "section",
   type: "string",
   headerName: "Section",
   width: 90,
 },
 {
   field: "price",
   type: "float",
   headerName: "price",
 },
 {
   field: "income",
   type: "float",
   headerName: "Income",
   width: 100,
 },
 {
   field: "quantity",
   type: "integer",
   headerName: "Quantity",
   width: 70,
 },
 {
  field: "points",
  headerName: "Points",
  width: 50,
  type: "integer",
},
{
  field: "rating",
  headerName: "rating",
  width: 50,
  type: "integer",
},
 {
   field: "publishDate",
   headerName: "Publish Date",
   width: 100,
   type: "string",
 },
];
 

function ItemManagments(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
      return (
        <div className="pagesContent mb-2 ms-0 ">
          <h3>Item Managment</h3>
          <div className="actions my-3">
            <Link to="/itemManagment/AddSection" className='btn btn-secondary m-1'>Add Section</Link>
            <Link to="/itemManagment/AddItem" className='btn btn-secondary m-1'>Add item</Link>
          </div>
          <div className="mx-5">
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
                  <Tab label="Item on menu" value="1" className='btn btn-secondary' />
                  <Tab label="Sections" value="2"  className='btn btn-secondary' />
                  <Tab label="Hidden" value="3"  className='btn btn-secondary' />
                  
                </TabList>
              </Box>
              <TabPanel value="1"><DataTable row={row} columns={columns} btn="hide"/></TabPanel>
              <TabPanel value="2"><DataTable row={row} columns={columns} btn="hide"/></TabPanel>
              <TabPanel value="3"><DataTable row={row} columns={columns} btn="add"/></TabPanel>
            </TabContext>
          </Box>
          </div>
        </div> 
      );
    
}

export default ItemManagments