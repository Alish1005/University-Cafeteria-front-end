import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OfferBox from '../../../components/offerbox/OfferBox';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { variables } from '../../Variables';
import axios from 'axios';
  
function OfferList(props) {
  const {setOffer}=props
    const [value, setValue] = useState('1');
    const [OfferListM, setOfferListM] = useState([]);
    const [OfferListH, setOfferListH] = useState([]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

//refresh function
const refresh=()=>{
  //Save Offers on-menu
  axios.get(variables.API_URL+"Offer")
  .then((res) => {
    setOfferListM(res.data.filter((offer)=>offer.status==variables.onMenuValue));
    console.log(res.data);
    })
      //Save Offers on-menu
  axios.get(variables.API_URL+"Offer")
  .then((res) => {
    setOfferListH(res.data.filter((offer)=>offer.status==variables.hideValue));
    })
}

  useEffect(()=> {
    refresh();
    },[])

    return ( 
        <div className="pagesContent ms-lg-5">
            <div className="">
                <h4>Offer List</h4>
                <div className="actions my-3">
            <Link to="/OfferList/AddEditOffer" onClick={()=>{refresh();setOffer({"id":0,"name":"","img":"","description":"","price":0})}} className='btn btn-secondary m-1'>Add Offer</Link>
          </div>
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
                  <Tab label="On Menu" value="1"  className='btn btn-secondary' />
                  <Tab label="Recommendations" value="2" className='btn btn-secondary' />
                  <Tab label="Hidden" value="3"  className='btn btn-secondary' />

                </TabList>
              </Box>
              <TabPanel value="1">
                <div className='row'>
                { /* On-Menu */}
                {OfferListM.length>0 ?OfferListM.map((offer)=>(
                  <OfferBox setOffer={setOffer} type='1' refresh={refresh} data={offer} action={'Hide'} actionStyle='btn-danger'/>
                  )) : <p>Empty</p>}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="row">
                {/* Recommendations */}

                </div>
                </TabPanel>
              <TabPanel value="3">
                <div className="row">
                  { /* Hidden */}
                  {OfferListH.length>0 ? OfferListH.map((offer)=>(
                  <OfferBox setOffer={setOffer} type='1' refresh={refresh} data={offer} action={'Add'} actionStyle='btn-primary'/>
                  )) : <p>Empty</p>}
                </div>
                </TabPanel>
            </TabContext>
          </Box>
            </div>
        </div>
     );
}

export default OfferList;