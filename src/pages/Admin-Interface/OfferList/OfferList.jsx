import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OfferBox from '../../../components/offerbox/OfferBox';

const offersList = [
    {
      id: 1,
      totalPrice: 50.00,
      priceAfterOffer: 40.00,
      items: [
        {
          name: "Combo Meal A",
          price: 15.00,
          quantity: 2,
          totalPrice: 30.00
        },
        {
          name: "Soft Drink",
          price: 2.50,
          quantity: 2,
          totalPrice: 5.00
        }
      ]
    },
    {
      id: 2,
      totalPrice: 28.00,
      priceAfterOffer: 22.00,
      items: [
        {
          name: "Burger",
          price: 8.00,
          quantity: 2,
          totalPrice: 16.00
        },
        {
          name: "Fries",
          price: 4.00,
          quantity: 1,
          totalPrice: 4.00
        },
        {
          name: "Soda",
          price: 2.00,
          quantity: 2,
          totalPrice: 4.00
        }
      ]
    },
    {
      id: 3,
      totalPrice: 15.00,
      priceAfterOffer: 12.00,
      items: [
        {
          name: "Pizza Slice",
          price: 5.00,
          quantity: 3,
          totalPrice: 15.00
        }
      ]
    },
    {
      id: 4,
      totalPrice: 40.00,
      priceAfterOffer: 30.00,
      items: [
        {
          name: "Steak",
          price: 25.00,
          quantity: 1,
          totalPrice: 25.00
        },
        {
          name: "Salad",
          price: 10.00,
          quantity: 1,
          totalPrice: 10.00
        },
        {
          name: "Dessert",
          price: 5.00,
          quantity: 1,
          totalPrice: 5.00
        }        ,{
          name: "Chips",
          price: 3.00,
          quantity: 1,
          totalPrice: 3.00
        },
      ]
    },
    {
      id: 5,
      totalPrice: 18.00,
      priceAfterOffer: 15.00,
      items: [
        {
          name: "Pasta",
          price: 12.00,
          quantity: 1,
          totalPrice: 12.00
        },
        {
          name: "Garlic Bread",
          price: 4.00,
          quantity: 1,
          totalPrice: 4.00
        },
        {
          name: "Iced Tea",
          price: 2.00,
          quantity: 1,
          totalPrice: 2.00
        }
      ]
    },
    {
      id: 6,
      totalPrice: 22.00,
      priceAfterOffer: 18.00,
      items: [
        {
          name: "Sandwich",
          price: 8.00,
          quantity: 1,
          totalPrice: 8.00
        },
        {
          name: "Chips",
          price: 3.00,
          quantity: 1,
          totalPrice: 3.00
        },
        {
          name: "Coffee",
          price: 3.00,
          quantity: 2,
          totalPrice: 6.00
        },
        {
          name: "Cookie",
          price: 2.00,
          quantity: 1,
          totalPrice: 2.00
        }
      ]
    },
    {
      id: 7,
      totalPrice: 12.00,
      priceAfterOffer: 9.00,
      items: [
        {
          name: "Soup",
          price: 4.00,
          quantity: 1,
          totalPrice: 4.00
        },
        {
          name: "Salad",
          price: 5.00,
          quantity: 1,
          totalPrice: 5.00
        },
        {
          name: "Bread Roll",
          price: 3.00,
          quantity: 2,
          totalPrice: 6.00
        }
      ]
    },
    // Continue adding more offers...
  ];

function OfferList() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <div className="pagesContent ms-lg-5">
            <div className="">
                <h4>Offer List</h4>
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
                    <OfferBox type='1' data={offersList[1]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[2]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[0]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[3]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[4]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[0]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[3]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[4]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[0]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[3]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[4]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[0]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[3]} action={'Hide'} actionStyle='btn-danger'/>
                    <OfferBox type='1' data={offersList[4]} action={'Hide'} actionStyle='btn-danger'/>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="row">
                  <OfferBox type='2' data={offersList[2]} action={'Add'} actionStyle='btn-outline-primary'/>
                  <OfferBox type='2' data={offersList[0]} action={'Add'} actionStyle='btn-outline-primary'/>
                  <OfferBox type='2' data={offersList[4]} action={'Add'} actionStyle='btn-outline-primary'/>
                  <OfferBox type='2' data={offersList[5]} action={'Add'} actionStyle='btn-outline-primary'/>
                  <OfferBox type='2' data={offersList[5]} action={'Add'} actionStyle='btn-outline-primary'/>
                  <OfferBox type='2' data={offersList[6]} action={'Add'} actionStyle='btn-outline-primary'/>
                </div>
                </TabPanel>
              <TabPanel value="3">
                <div className="row">
                <OfferBox type='3' data={offersList[1]} action={'Add'} actionStyle='btn-outline-primary'/>
                <OfferBox type='3' data={offersList[6]} action={'Add'} actionStyle='btn-outline-primary'/>
                <OfferBox type='3' data={offersList[4]} action={'Add'} actionStyle='btn-outline-primary'/>
                <OfferBox type='3' data={offersList[3]} action={'Add'} actionStyle='btn-outline-primary'/>
                <OfferBox type='3' data={offersList[2]} action={'Add'} actionStyle='btn-outline-primary'/>
                </div>
                </TabPanel>
            </TabContext>
          </Box>
            </div>
        </div>
     );
}

export default OfferList;