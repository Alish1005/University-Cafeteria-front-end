import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./ChooseOfferItems.css"
import { variables } from '../../Variables';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import { useToast } from '@chakra-ui/react'
import { format } from 'date-fns';


function ChooseOfferItems(props) {
  const toast = useToast()
  const {OfferItems,setOfferItems, setOfferTotal, OfferTotal}=props
    const [value, setValue] = useState("1");
    const [orderlist, setOrderlist] = useState([]);
    const [total, setTotal] = useState(0);
    const [sections,setSections]=useState([])
    const [items,setItems]=useState([])
    const [date,setDate]=useState("0");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    //ADD Item to the Order List
    const addItem = (s) => {
      const found=orderlist.filter((item)=>item.id==s.id);
      if(found.length==0){
      const data={...s,Iquantity:1}
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

//refresh function
const refresh=()=>{
  //Save Sections
axios.get(variables.API_URL+"Item/Sections")
.then((res) => {
  setSections(res.data.filter((section)=>section.isHidden==false));
  }).catch((error)=>{
      toast({
        title: "Something went wrong!",
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    })
  //Save items
  axios.get(variables.API_URL+"Item")
  .then((res) => {
    setItems(res.data.filter((item)=>item.status==variables.onMenuValue));
    })
}
  useEffect(()=> {
    refresh();
    /*if(OfferItems!=[]){
    setOrderlist(OfferItems);}*/
    setDate(format(new Date(), 'dd/MM/yyyy'))
    if(sections.length==0){
      setValue("1")
    }else{
    setValue(`${sections[0].id}`)
    }
    },[])
    return ( 
        <div className="pagesContent">
          <h3>Choose Offer Items</h3>
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
          <Link to="/OfferList/AddOffer" className='btn-makeOrder btn btn-primary text-secondary' onClick={()=>{setOfferItems(orderlist);setOfferTotal(total)}}>Submit items</Link>
            <div className="col-lg-4 col-md-6 col-sm-11 ms-sm-3 col-xs-11 p-2 text-black bg-secondary rounded">
                <div className="OrderListStaff d-flex justify-content-between">
                <p>{date}</p>
                <h4>Offer Items List</h4>
                <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-gray`}>
                        {total>0 && <li><a class="dropdown-item rounded-bottom" onClick={()=>window.print("OrderListStaff")} href="#"><PrintIcon/> print</a></li>}
                    </ul>
                </div>
                </div>
              <hr />
              <table className='table'>
                <thead>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th className='OrderListStaffActions'>action</th>
                </thead>
              {
                orderlist.map(s => (
                    <tr>
                      <td>{s.name}</td>
                      <td>{s.price}$</td>
                      <td>{s.Iquantity}</td>
                      <td>{(s.Iquantity*s.price).toFixed(2)}$</td>
                      <td className='OrderListStaffActions'>
                      <Link title='Delete' onClick={()=>deleteItem(s)} className='text-danger bg-transparent'><DeleteIcon/></Link>
                      </td>
                      
                    </tr>
                ))
                }
              </table>
              <hr />
              <h4>Total Price : {total.toFixed(2)}$</h4>
            </div>
          </div>
  </div>
     );
}

export default ChooseOfferItems;