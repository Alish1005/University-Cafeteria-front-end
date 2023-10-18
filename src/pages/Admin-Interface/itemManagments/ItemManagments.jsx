import './itemManagments.css'
import DataTable from '../../../components/datatable/DataTable';
import * as React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer,toast } from "react-toastify";
import { variables } from "../../Variables";
import axios from "axios";
import { format } from 'date-fns';

function ItemManagments(props) {

  //Set the Value of the Tab we are on
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//fake data
const row = [{id: 1,name: "Delicious Delights",price: 15.99,income: 319.80,quantity: 30,points: 4.5,publishDate: "2023-08-25",orders: 45 },{id: 2,name: "Savory Bites",price: 12.49,income: 224.82,quantity: 20,points: 4.2,publishDate: "2023-08-24",orders: 37 },{id: 3,name: "Taste Haven",price: 18.75,income: 337.50,quantity: 25,points: 4.8,publishDate: "2023-08-23",orders: 50 },{id: 4,name: "Flavorful Eats",price: 9.99,income: 179.82,quantity: 15,points: 4.0,publishDate: "2023-08-22",orders: 30 },{id: 5,name: "Cuisine Corner",price: 14.25,income: 256.50,quantity: 18,points: 4.6,publishDate: "2023-08-21",orders: 42},{id: 6,name: "Gourmet Grill",price: 20.50,income: 369.00,quantity: 22,points: 4.9,publishDate: "2023-08-20",orders: 55},{id: 7,name: "Spice Palace",price: 11.95,income: 215.10,quantity: 16,points: 4.3,publishDate: "2023-08-19",orders: 39},{id: 8,name: "Flourish Flavors",price: 16.75,income: 301.50,quantity: 28,points: 4.7,publishDate: "2023-08-18",orders: 48},{id: 9,name: "Tasty Treats",price: 13.50,income: 243.00,quantity: 19,points: 4.4,publishDate: "2023-08-17",orders: 41},{id: 11,name: "Flavorsome Fusion",price: 22.99,income: 413.82,quantity: 24,points: 4.8,publishDate: "2023-08-16",orders: 57},  {id: 8,name: "Flourish Flavors",price: 16.75,income: 301.50,quantity: 28,points: 4.7,publishDate: "2023-08-18",orders: 48},{id: 12,name: "Tasty Treats",price: 13.50,income: 243.00,quantity: 19,points: 4.4,publishDate: "2023-08-17",orders: 41},{id: 13,name: "Flavorsome Fusion",price: 22.99,income: 413.82,quantity: 24,points: 4.8,publishDate: "2023-08-16",orders: 57}];

//Columns Data
const columns = [
 { field: "id", headerName: "ID", width: 40 },
 {field: "img",headerName: "Avatar",width: 70,renderCell: (params) => {return <img src={params.row.img || "/noavatar.png"} alt="" />;},},
 {field: "name",type: "string",headerName: "Item name",width: 170},
 {field: "section",type: "string",headerName: "Section",width: 90},
 {field: "price",type: "float",headerName: "price",},
 {field: "income",type: "float",headerName: "Income",width: 100},
 {field: "quantity",type: "integer",headerName: "Quantity",width: 70},
 {field: "points",headerName: "Points",width: 50,type: "integer"},
 {field: "rating",headerName: "rating",width: 50,type: "integer"},
 {field: "publishDate",headerName: "Publish Date",width: 100,type: "string"},
];
const Sectioncolumns = [
 { field: "id", headerName: "ID", width: 40 },
 {field: "name",type: "string",headerName: "Item name",width: 170,},
 {field: "items_number",type: "int",headerName: "number of items",width: 130,},
 {field: "isHidden",headerName: "is Hidden?",width: 170,type: "boolean",},
 {field: "publishDate",headerName: "Publish Date",renderCell: (params) => (<div>{format(new Date(params.value), 'yyyy-MM-dd')}</div>),width: 170,type: "Date",},
 {field: "action",headerName: "Action",width: 200,renderCell: (params) => {
    return (
      <div className="action">
          <button data-bs-toggle="modal" data-bs-target="#AddSectionModal" className="delete btn btn-info btn-sm" onClick={()=>EditSectionOnClick(params.row.id,params.row.name)}>
             Edit
          </button>
          <button className="delete btn btn-danger btn-sm" onClick={()=>DeleteSection(params.row.id)}>
            Delete
          </button>
          {params.row.isHidden ?
            <button className="delete btn btn-primary btn-sm" onClick={()=>HideSection(params.row.id,params.row.isHidden)}>
            Add
          </button>:
           <button className="delete btn btn-warning btn-sm" onClick={()=>HideSection(params.row.id,params.row.isHidden)}>
            Hide
          </button>
           }
          
      </div>
    );
  },
}
];

//UseState Var
  const [value, setValue] = useState('1');//For the 
  const [sectionId,setSectionId]=useState(0)
  const [sectionName,setSectionName]=useState("")
  const [sections,setSections]=useState([])


//refresh function
const refresh=()=>{
  axios.get(variables.API_URL+"Item/Sections")
  .then((res) => {
    setSections(res.data);
    console.log("response from reports api is ", res)
    })
    }
    useEffect(()=> {
      refresh();
      },[])
//Section Action

//OnClick Add Section
const SectionOnClick=()=>{
  if(sectionId==0){
    const data={"id":0,"name":sectionName};
    axios.post(variables.API_URL+"Item/AddSection",data)
    .then((result)=>{
      if(sectionName=="" || sectionName.length<=3){
        throw new Error("Enter section name");
      }
      refresh();
      toast.success("Section Added Successfully");
      setSectionName("");
    }).catch((error)=>{
      toast.error(error)
      setSectionName("");
    })
}else{
  axios.put(variables.API_URL+"Item/UpdateSection/"+sectionId+"/"+sectionName)
  .then((result)=>{
    if(sectionName=="" || sectionName.length<=3){
      throw new Error("Enter section name");
    }
    refresh();
    toast.success("Section Added Successfully");
    setSectionName("");
    setSectionId(0);
  }).catch((error)=>{
    toast.error(error)
    setSectionName("");
    setSectionId(0);
  })
}
}
//On Change Add Section
const AddSectionOnChange=(e)=>{
  setSectionName(e.target.value);
}
//On Click Edit Section
const EditSectionOnClick=(id,name)=>{
  setSectionId(id);
  setSectionName(name);
}


//Delete Section
  const DeleteSection = (id) => {
    axios.delete(`${variables.API_URL}Item/DeleteSection/${id}`)  
    .then((result)=>{
      refresh();
      toast.success("Section Deleted Successfully"+id);
    }).catch((error)=>{
      toast.error(error)
    })
  };
  const HideSection = (id,status) => {
    axios.put(`${variables.API_URL}Item/UpdateSectionStatus/${id}/${!status}`)  
    .then((result)=>{
      refresh();
      toast.success("Section Deleted Successfully "+status);
    }).catch((error)=>{
      toast.error(error)
    })
  };
      return (
        <div className="pagesContent mb-2 ms-0 ">
          <h5>Item Managment</h5>
          <div className="actions my-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddSectionModal" className='btn btn-secondary m-1'>Add Section</button>
            <Link to="/itemManagment/AddItem" className='btn btn-secondary m-1'>Add item</Link>
          </div>
          <div className="mx-lg-5 mx-sm-1 mx-xs-1">
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
                  <Tab label="Sections" value="2"  className='btn btn-secondary' />
                  <Tab label="Item on menu" value="1" className='btn btn-secondary' />
                  <Tab label="Hidden" value="3"  className='btn btn-secondary' />
                  
                </TabList>
              </Box>
              <TabPanel value="1"><DataTable row={row} columns={columns} btn="hide"/></TabPanel>
              <TabPanel value="2"><DataTable controller="item" changeStatus="UpdateSectionStatus" delete="DeleteSection" refresh={()=>refresh()} row={sections} columns={Sectioncolumns} btn="Delete"/></TabPanel>
              <TabPanel value="3"><DataTable row={row} columns={columns} btn="add"/></TabPanel>
            </TabContext>
          </Box>
          



          <div class="modal fade" id="AddSectionModal" tabindex="-1" aria-labelledby="AddSectionModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {sectionId==0 ? 
                <h1 class="modal-title fs-5" id="AddSectionModalLabel">ADD Section</h1>
                :
                <h1 class="modal-title fs-5" id="AddSectionModalLabel">Edit Section</h1>
        }
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=>{setTimeout(() => {setSectionName("");setSectionId(0)}, 350)}} aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="">
        <div className="cForm">
          <TextField id="filled-basic" value={sectionName} onChange={(e)=>AddSectionOnChange(e)}  className="my-2" label="Name" variant="outlined" /><br />
        </div>
        <div className="cForm">
          
        </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>{setTimeout(() => {setSectionName("");setSectionId(0)}, 350)}} data-bs-dismiss="modal">Close</button>
        {sectionId==0 ? 
          <button type="button" onClick={()=>SectionOnClick()} data-bs-dismiss="modal"  class="btn btn-primary">Add</button>
        :
          <button type="button" onClick={()=>SectionOnClick()} data-bs-dismiss="modal"  class="btn btn-primary">Update</button>
        }
      </div>
    </div>
  </div>
</div>
          </div>
          <ToastContainer/>
        </div> 
      );
    
}

export default ItemManagments