import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./staffmenu.css"
import { variables } from '../../Variables';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import { useToast } from '@chakra-ui/react'
import { format } from 'date-fns';
import SendIcon from "@mui/icons-material/Send";


function StaffMenu(props) {
  const toast = useToast()

    const [value, setValue] = useState("1");
    const [orderlist, setOrderlist] = useState([]);
    const [total, setTotal] = useState(0);
    const [sections,setSections]=useState([])
    const [items,setItems]=useState([])
    const [discount,setDiscount]=useState(0)
    const [discounts,setDiscounts]=useState(0)
    const [Idnote, setIdNote] = useState(-1);
    const [note, setNote] = useState("");
    const [date,setDate]=useState("0");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    //Add Order
const MakeOrder = () => {
  const order_item=[];
  orderlist.map((item)=>(order_item.push({"order_id":0,"order":"string","item_id":item.id,"item":{},"quantity":item.Iquantity,"note":item.note})));
  const order={
    "id":0,
    "status":variables.order_uncompete,
    "order_time":"2023-10-27T12:14:42.322Z",
    "discount":discount,
    "del_Room":"0000",
    "order_item":order_item,
    "order_offer":[],
  }
  axios.post(`${variables.API_URL}order`)  
  .then((result)=>{
    refresh();
    toast({
      title: 'Order Added Successfully !',
      /*description: "Fill all the information",*/
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>{
    toast({
      title: error,
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  })
};



    //ADD Item to the Order List
    const addItem = (s) => {
      const found=orderlist.filter((item)=>item.id==s.id);
      if(found.length==0){
      const data={...s,Iquantity:1,note:""}
      setOrderlist(prevArray => [...prevArray, data]);
    }else{
        //const i=orderlist.filter((item)=>item.id==s.id)[0];
        const ind=orderlist.map((i)=>i.id).indexOf(s.id);
        console.log(ind)
        const i=orderlist[ind]
        console.log(i)
        const noti=orderlist.filter((item,index)=>index<ind);
        const noti2=orderlist.filter((item,index)=>index>ind);
        const q=i.Iquantity+1;
        i.Iquantity=q;
        setOrderlist([...noti,i,...noti2])
      }
      setTotal(total+s.price);
      refresh()
    };
    //Delete Item
    const deleteItem=(e)=>{
      const l=orderlist.filter((item)=>item.id!=e.id);
      setOrderlist(l);
      setTotal(total-(e.price*e.Iquantity));
      refresh();
      }
    //Add Notes
    const SetNotePop=(id)=>{
      const l=orderlist.filter((item)=>item.id==id);
      setIdNote(id)
      setNote(l[0].note);
    }
    const SaveNoteItem=(id)=>{
        const ind=orderlist.map((i)=>i.id).indexOf(id);
        const i=orderlist[ind]
        const noti=orderlist.filter((item,index)=>index<ind);
        const noti2=orderlist.filter((item,index)=>index>ind);
        i.note=note;
        setOrderlist([...noti,i,...noti2])
        setNote("")
        setIdNote(-1)
         }

//refresh function
const refresh=()=>{
  //Save Sections
axios.get(variables.API_URL+"Item/Sections")
.then((res) => {
  setSections(res.data.filter((section)=>section.isHidden==false));
  
  })
  //Save items
  axios.get(variables.API_URL+"Item")
  .then((res) => {
    setItems(res.data.filter((item)=>item.status==variables.onMenuValue));
    })
}
  useEffect(()=> {
    refresh();
    setDate(format(new Date(), 'dd/MM/yyyy'))
    if(sections.length==0){
      setValue("1")
    }else{
    setValue(`${sections[0].id}`)
    }
    },[])




    return ( 
        <div className="pagesContent">
          <h3>Menu</h3>
          <div className="row">
          <div className="StaffMenu col-lg-7 col-xs-10 col-md-6">
            {/*----------------Menu---------------- */}
            <Box variant="scrollable" sx={{ width: '100%', typography: 'body1' }}>
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
                  {sections.map((section)=>(
                    <Tab label={section.name} value={`${section.id}`}/>
                  ))}
                </TabList>
              </Box>
              {/*Content of each section*/}
              {sections.map((section)=>(
                    <TabPanel value={`${section.id}`}>
                {
                items.filter((item)=>item.section_id==section.id).map(s => {
                  if(s.quantity>0){
                    return (<button onClick={()=>addItem(s)} className='col-3 m-2 text-black btn btn-secondary'>
                      <p>{s.name}</p>
                      <p>{s.price}$</p>
                    </button>)
                  }else{
                    return (<button className='col-3 m-2 text-black btn btn-secondary' disabled>
                    <p>{s.name}</p>
                    <p>{s.price}$</p>
                  </button>)
                  }

                  })
                }
                    </TabPanel>
              ))}
            </TabContext>
          </Box>
          </div>
          <button className='btn-makeOrder btn btn-primary' /*onClick={MakeOrder()}*/><SendIcon/> Make Order</button>
          {/*-----------------Order List----------------*/}
            <div className="col-lg-4 col-md-6 col-sm-11 ms-sm-3 col-xs-11 p-2 text-black bg-secondary rounded">

                <div className="OrderListStaff d-flex justify-content-between">
                <p>{date}</p>
                <h4>Order List</h4>
                <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-gray`}>
                        <li><a class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target="#OrderBoxDiscount" href="#">Disount</a></li>
                        {total>0 && <li><a class="dropdown-item rounded-bottom" onClick={()=>window.print("OrderListStaff")} href="#"><PrintIcon/> print</a></li>}
                    </ul>
                </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Customer: {props.CName}</p>
                  <p>{props.CPhone}</p>
                  <p>Employye: Ali</p>
                </div>
              <hr />
              <table className='table'>
                <thead>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th className='OrderListStaffNote'>note</th>
                  <th className='OrderListStaffActions'>action</th>
                </thead>
              {
                orderlist.map(s => (
                    <tr>
                      <td>{s.name}</td>
                      <td>{s.price}$</td>
                      <td>{s.Iquantity}</td>
                      <td>{(s.Iquantity*s.price).toFixed(2)}$</td>
                      <td className='OrderListStaffNote'>{s.note}</td>
                      <td className='OrderListStaffActions'>
                      <Link title='Write note' onClick={()=>SetNotePop(s.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddItemNoteModal" className='text-info bg-transparent'><EditNoteIcon/></Link>
                      <Link title='Delete' onClick={()=>deleteItem(s)} className='text-danger bg-transparent'><DeleteIcon/></Link>
                      </td>
                      
                    </tr>
                ))
                }
              </table>
              <hr />
              <div className="d-flex  justify-content-between mx-5">
                <p>Discount:{discount}%</p>
                <p>Actual Price: {total.toFixed(2)}$</p>
              </div>
              <h4>Total Price : {(total*(1-(discount/100))).toFixed(2)}$</h4>
            </div>
          </div>
          {/*Note window */}
          <div class="modal fade" id="AddItemNoteModal" tabindex="-1" aria-labelledby="AddItemNoteModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="AddItemNoteModalLabel">Write Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=>{setTimeout(() => {}, 350)}} aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="">
        <div className="cForm">
          <TextField id="filled-basic" value={note} onChange={(e)=>setNote(e.target.value)}  className="my-2" label="Note" variant="outlined" /><br />
        </div>
        <div className="cForm">
        </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>{setTimeout(() => {}, 350)}} data-bs-dismiss="modal">Close</button>
          <button type="button" data-bs-dismiss="modal" onClick={()=>{SaveNoteItem(Idnote)}}  class="btn btn-primary">save</button>
      </div>
    </div>
  </div>
</div>
{/*Discount Window */}
<div class="modal fade" id="OrderBoxDiscount" data-bs-backdrop="static" tabindex="-1" aria-labelledby="OrderBoxDiscountLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-primary fs-5" id="OrderBoxDiscountLabel">Discount</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input className='col-5 p-1' value={discounts} onChange={(e)=>setDiscounts(e.target.value)} type="number" min={0} max={100} placeholder='Discount' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  class="btn btn-primary" onClick={()=>{
          if(discounts>100 || discounts<0){
            toast({
              title: "Discount cant be > 100 or < 0",
              position:'top-right',
              status: 'error',
              duration: 3000,
              isClosable: false,
            })
            return;
          }
          setDiscount(discounts)}} data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
  </div>
  </div>
     );
}

export default StaffMenu;