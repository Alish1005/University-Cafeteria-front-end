
import * as React from 'react';
import DataTable from "../datatable/DataTable.jsx"
import "./datatable2.css"

function DataTable2(props) {
    return ( 
      <div className="">
<table className="table table-primary table-striped table-hover">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th># of Orders</th>
      <th>Phone Number</th>
      <th>Actions</th>
    </tr>
    {
      props.data.map(customer=>(
          <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.orders}</td>
            <td>{customer.phoneNumber}</td>
            <td>{props.actions}</td>
          </tr>
      ))
}
  </table>
  </div>
     );
}

export default DataTable2;