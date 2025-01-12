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
import { variables } from "../../Variables";
import axios from "axios";
import { format } from 'date-fns';
import { useToast } from '@chakra-ui/react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';

function ItemManagments(props) {
  const toast = useToast()

  //Set the Value of the Tab we are on
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
//Columns Data
const columns = [
 { field: "id", headerName: "ID", width: 70 },
 {field: "photo",headerName: "Avatar",sortable: false,width: 55,disableExport: true,renderCell: (params) => {return <img src={params.row.photo || "/noavatar.png"} alt="" />;},},
 {field: "name",type: "string",headerName: "Item name",width: 140},
 /*{field: "section",type: "string",headerName: "section",width: 150},*/
 {field: "section",type: "string",headerName: "section",width: 100,
 
 valueGetter: (params) => {
  const s=FindSection(params.row.section_id).name;
  return s;
},
 valueFormatter:  (params) => {
  if (params.value == null) {
    return '';
  }
  return `${params.value.toLocaleString()}`;
},
renderCell: (params) => {
  const s=FindSection(params.row.section_id).name;
  return s;
},
},
{field: "description",type: "string",headerName: "component",disableExport: true,width: 100,sortable: false},
{field: "calories",type: "number",headerName: "calories",width: 70},
 {field: "price",type: "float",headerName: "price",width: 70},
 {field: "quantity",type: "number",headerName: "Quantity",width: 70},
 {field: "orders_number",type: "number",headerName: "orders #",width: 70},
 {field: "publishDate",headerName: "Publish Date",renderCell: (params) => (<div>{format(new Date(params.value), 'yyyy-MM-dd')}</div>),width: 95,type: "Date",},
 {field: "action",headerName: "Action",width: 150,sortable: false,disableExport: true,renderCell: (params) => {
  return (
    <div className="action">
        <Link to="/itemManagment/EditItem" title='Edit' className="delete bg-transparent text-primary btn-sm"  onClick={()=>props.setEditItemId(params.row.id)}  /*onClick={()=>EditSectionOnClick(params.row.id,params.row.name)}*/>
           <EditIcon/>
        </Link>
        <button className="delete bg-transparent text-danger border border-0 btn-sm"  title='Delete' onClick={()=>{DeleteItem(params.row.id)}}>
          <DeleteIcon/>
        </button>
        {params.row.status==variables.hideValue ?
          <button className="delete bg-transparent text-primary border border-0 btn-sm"  title='Show' onClick={()=>HideItem(params.row.id,params.row.status)}>
          <AddIcon/>
        </button>:
         <button className="delete bg-transparent text-warning border border-0 btn-sm" title='Hide' onClick={()=>HideItem(params.row.id,params.row.status)}>
          <VisibilityOffIcon/>
        </button>
         }  
    </div>
  );
},
}
];
//Section Columns
const Sectioncolumns = [
 { field: "id", headerName: "ID", width: 40 },
 {field: "name",type: "string",headerName: "Item name",width: 170,},
 {field: "items_number",type: "int",headerName: "number of items",width: 130,},
 {field: "isHidden",headerName: "is Hidden?",width: 170,type: "boolean",},
 {field: "publishDate",headerName: "Publish Date",renderCell: (params) => (<div>{format(new Date(params.value), 'yyyy-MM-dd')}</div>),width: 100,type: "Date",},
 {field: "action",headerName: "Action",width: 200,disableExport: true,renderCell: (params) => {
    return (
      <div className="action">
          <button data-bs-toggle="modal" data-bs-target="#AddSectionModal" title='Edit' className="delete bg-transparent text-primary border border-0 btn-sm" onClick={()=>EditSectionOnClick(params.row.id,params.row.name)}>
          <EditIcon/>
          </button>
          <button className="delete bg-transparent text-danger border border-0 btn-sm" title='Delete' onClick={()=>DeleteSection(params.row.id)}>
          <DeleteIcon/>
          </button>
          {params.row.isHidden ?
            <button className="delete bg-transparent text-primary border border-0 btn-sm" title='Show' onClick={()=>HideSection(params.row.id,params.row.isHidden)}>
            <AddIcon/>
          </button>:
           <button className="delete bg-transparent text-warning border border-0 btn-sm" title='Hide' onClick={()=>HideSection(params.row.id,params.row.isHidden)}>
            <VisibilityOffIcon/>
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
  const [itemsM,setItemsM]=useState([])
  const [itemsH,setItemsH]=useState([])


//refresh function
const refresh=()=>{
    //Save items
    axios.get(variables.API_URL+"Item")
    .then((res) => {
      setItemsM(res.data.filter((item)=>item.status==variables.onMenuValue));
      setItemsH(res.data.filter((item)=>item.status==variables.hideValue));   
      })
  //Save Sections
  axios.get(variables.API_URL+"Item/Sections")
  .then((res) => {
    setSections(res.data);
    })
  }
useEffect(()=> {
      refresh();
  },[])

//Item Actions
//Delete Item
const DeleteItem = (id) => {
  axios.delete(`${variables.API_URL}Item/${id}`)  
  .then((result)=>{
    refresh();
    toast({
      title: 'Item Deleted Successfully !',
      /*description: "Fill all the information",*/
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>{
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  })
};
const HideItem = (id,status) => {
  if(status==variables.onMenuValue){
    status=variables.hideValue;
  }else{
    status=variables.onMenuValue;
  }
  axios.put(`${variables.API_URL}Item/UpdateStatus/${id}/${status}`)  
  .then((result)=>{
    refresh();
    toast({
      title: `Item is being ${status} Successfully`,
      position:'top-right',
      status: 'success',
      duration: 1500,
      isClosable: false,
    })
  }).catch((error)=>{
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  })
};

//Section Actions
//OnClick Add Section
const SectionOnClick=()=>{
  if(sectionName=="" || sectionName.length<=3){
    toast({
      title: "Section name must be greater than 3 characters",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
    return
  }
  if(sectionId==0){
    const data={"id":0,"name":sectionName,"items":[]};
    axios.post(variables.API_URL+"Item/AddSection",data)
    .then((result)=>{
      refresh();
      toast({
        title: "Section Added Successfully",
        position:'top-right',
        status: 'success',
        duration: 3000,
        isClosable: false,
      })
      setSectionName("");
    }).catch((error)=>{
      toast({
        title: "Something went wrong!",
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
      setSectionName("");
    })
}else{
  axios.put(variables.API_URL+"Item/UpdateSection/"+sectionId+"/"+sectionName)
  .then((result)=>{
    refresh();
    toast({
      title: "Section Updated Successfully",
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
    setSectionName("");
    setSectionId(0);
  }).catch((error)=>{
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    });
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
      toast({
        title: 'Section Deleted Successfully !',
        position:'top-right',
        status: 'success',
        duration: 3000,
        isClosable: false,
      })
    }).catch((error)=>{
      toast({
        title: "Something went wrong!",
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    })
  };

  const HideSection = (id,status) => {
    axios.put(`${variables.API_URL}Item/UpdateSectionStatus/${id}/${!status}`)  
    .then((result)=>{
      refresh();
      toast({
        title: 'Section Status Changed Successfully',
        position:'top-right',
        status: 'success',
        duration: 1500,
        isClosable: false,
      })
    }).catch((error)=>{
      toast({
        title: "Something went wrong!",
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    })
  };
  const FindSection=(id)=>{
    var s=sections.filter((section)=>section.id==id);
    if(s.length>0){
    return(s[0])
    }
    return({id:0,name:""})
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      return (
        <div className="pagesContent ms-0 ">
          <h5>Item Managment</h5>
          <div className="actions my-3">
            <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddSectionModal" className='btn btn-secondary m-1'>Add Section</button>
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
                  <Tab label="Item on menu" value="1" className='btn btn-secondary' />
                  <Tab label="Hidden" value="2"  className='btn btn-secondary' />
                  <Tab label="Sections" value="3"  className='btn btn-secondary' />
                  
                </TabList>
              </Box>
              <TabPanel value="1"><DataTable row={itemsM} columns={columns} /></TabPanel>
              <TabPanel value="2"><DataTable row={itemsH} columns={columns} /></TabPanel>
              <TabPanel value="3"><DataTable row={sections} columns={Sectioncolumns} /></TabPanel>
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
        </div> 
      );
    
}

export default ItemManagments