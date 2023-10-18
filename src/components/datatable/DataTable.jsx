import { Grid4x4Sharp } from "@mui/icons-material";
import "./datatable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import {  Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { variables } from "../../pages/Variables";
import { ToastContainer,toast } from "react-toastify";




function DataTable(props) {
  

  const handleDelete = (id) => {
    axios.delete(variables.API_URL+"/"+props.controller+"/"+props.delete+"/"+id)  
    .then((result)=>{
      props.refresh();
      toast.success("Section Deleted Successfully");
    }).catch((error)=>{
      toast.error(error)
    })
  };

    return ( 
        <div className="datatable overflow-visible justify-self-center mb-5" style={{width:"fit-content",height:"75vh",marginLeft:"5%"}}>
                <DataGrid
                className="dataGrid"
                    rows={props.row}
                    columns={props.columns}
                    /*columns={[...props.columns,actionColumn]}*///where actionColumn is the same of that on the normal managment pages
                    initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5 },
                        
                    },
                    }}
                    
                    slots={{toolbar:GridToolbar}}
                    slotProps={{
                        toolbar:{
                            showQuickFilter:true,
                            quickFilterProps:{debounceMs:500},
                        },
                    }}
                    //pageSizeOptions={[5, 10,20,30]}
                    checkboxSelection
                    //disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    disableRowSelectionOnClick
                    disableVirtualization
                />
        </div>
     );
}

export default DataTable;