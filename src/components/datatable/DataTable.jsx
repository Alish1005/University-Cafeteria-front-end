import { Grid4x4Sharp } from "@mui/icons-material";
import "./datatable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import {  Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';

const handleDelete = (id) => {
  //delete the item
  // mutation.mutate(id)
};



function DataTable(props) {
  

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/`} className="view btn btn-info">
              <EditIcon/>
          </Link>
          {props.btn=="add" ? 
          <button title="readd" className="delete btn btn-outline-primary btn-sm" onClick={() => handleDelete(params.row.id)}>
            + Add
          </button>
          :props.btn=="hide"||props.btn=="ban"?
          <button className="delete btn btn-danger btn-sm" onClick={() => handleDelete(params.row.id)}>
          {props.btn}
            </button>:
            <button className="delete btn btn-info btn-sm" onClick={() => handleDelete(params.row.id)}>
            {props.btn}
            </button>}
        </div>
      );
    },
  };


    return ( 
        <div className="datatable overflow-visible justify-self-center mb-5" style={{width:"fit-content",height:"80vh",marginLeft:"5%"}}>
                <DataGrid
                className="dataGrid"
                    rows={props.row}
                    columns={[...props.columns,actionColumn]}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 1, pageSize: 8 },
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