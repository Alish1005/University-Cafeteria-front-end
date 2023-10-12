
import DataTable from '../../../components/datatable/DataTable';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';

const row= [
    {
      id: 1,
      name: "John Smith",
      salary: 60000,
      orders: 120,
      rate: 4.5,
      hireDate: "2022-03-15",
      phoneNumber: "123-456-7890"
    },
    {
      id: 2,
      name: "Jane Doe",
      salary: 55000,
      orders: 95,
      rate: 4.2,
      hireDate: "2021-08-22",
      phoneNumber: "234-567-8901"
    },
    {
      id: 3,
      name: "Michael Johnson",
      salary: 70000,
      orders: 150,
      rate: 4.8,
      hireDate: "2023-01-10",
      phoneNumber: "345-678-9012"
    },
    {
      id: 4,
      name: "Emily Williams",
      salary: 62000,
      orders: 110,
      rate: 4.4,
      hireDate: "2022-06-28",
      phoneNumber: "456-789-0123"
    },
    {
      id: 5,
      name: "David Brown",
      salary: 58000,
      orders: 80,
      rate: 4.1,
      hireDate: "2021-12-01",
      phoneNumber: "567-890-1234"
    },
    {
      id: 6,
      name: "Linda Davis",
      salary: 65000,
      orders: 135,
      rate: 4.7,
      hireDate: "2022-02-18",
      phoneNumber: "678-901-2345"
    },
    {
      id: 7,
      name: "Andrew Wilson",
      salary: 72000,
      orders: 170,
      rate: 4.9,
      hireDate: "2023-04-05",
      phoneNumber: "789-012-3456"
    },
    {
      id: 8,
      name: "Sophia Anderson",
      salary: 58000,
      orders: 100,
      rate: 4.3,
      hireDate: "2021-09-10",
      phoneNumber: "890-123-4567"
    },
    {
      id: 9,
      name: "William Martinez",
      salary: 63000,
      orders: 125,
      rate: 4.6,
      hireDate: "2022-07-20",
      phoneNumber: "901-234-5678"
    },
    {
      id: 10,
      name: "Olivia Thomas",
      salary: 55000,
      orders: 90,
      rate: 4.2,
      hireDate: "2021-11-14",
      phoneNumber: "012-345-6789"
    },
    {
      id: 11,
      name: "James Jackson",
      salary: 68000,
      orders: 140,
      rate: 4.7,
      hireDate: "2022-05-02",
      phoneNumber: "123-456-7890"
    },
    {
      id: 12,
      name: "Ava White",
      salary: 59000,
      orders: 105,
      rate: 4.4,
      hireDate: "2021-10-08",
      phoneNumber: "234-567-8901"
    },
    {
      id: 13,
      name: "Daniel Harris",
      salary: 71000,
      orders: 160,
      rate: 4.8,
      hireDate: "2023-02-25",
      phoneNumber: "345-678-9012"
    },
    {
      id: 14,
      name: "Isabella Lopez",
      salary: 60000,
      orders: 115,
      rate: 4.5,
      hireDate: "2022-01-12",
      phoneNumber: "456-789-0123"
    },
    {
      id: 15,
      name: "Ethan Adams",
      salary: 67000,
      orders: 130,
      rate: 4.6,
      hireDate: "2022-09-30",
      phoneNumber: "567-890-1234"
    }
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
     field: "salary",
     type: "float",
     headerName: "Salary",
   },
   {
     field: "orders",
     type: "integer",
     headerName: "# of orders",
     width: 100,
   },
  {
    field: "rate",
    headerName: "rate",
    width: 50,
    type: "integer",
  },
   {
     field: "hireDate",
     headerName: "Hire Date",
     width: 100,
     type: "string",
   },
  ];

function StaffList() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <div className="pagesContent mb-2 ">
          <h3>Staff Managment</h3>
          <div className="actions my-3">
            <Link to="/StaffList/AddStaff" className='btn btn-secondary'>Add Staff</Link>
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
                  <Tab label="Now" value="1" className='btn btn-secondary' />
                  <Tab label="Banned" value="2"  className='btn btn-secondary' />
                </TabList>
              </Box>
              <TabPanel value="1"><DataTable row={row} columns={columns} btn="ban" /></TabPanel>
              <TabPanel value="2"><DataTable row={row} columns={columns} btn="add" /></TabPanel>
            </TabContext>
          </Box>
          </div>
        </div>
     );
}

export default StaffList;