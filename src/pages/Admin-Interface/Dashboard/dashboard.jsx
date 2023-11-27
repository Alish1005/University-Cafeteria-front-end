import './dashboard.css';
import TopBox from '../../../components/topbox/TopBox';
import BarCharts from '../../../components/barChart/BarCharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LineCharts from '../../../components/linechart/LineCharts';
import CountUp from 'react-countup';
import { useEffect, useState} from 'react';
import { variables } from '../../Variables';
import GetAppIcon from '@mui/icons-material/GetApp';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrintIcon from '@mui/icons-material/Print';
import { CSVLink } from 'react-csv';
import format from 'date-fns/format';

const formatter = (value) => <CountUp end={value} separator="," className='text-primary' />;
function Dashboard() {
  const staff = [{name: 'Ali ',orders: 400,rating: 4.3,amt: 2400,},{name: 'kassem',orders: 300,rating: 3.2,amt: 2210,},{name: 'Ahmad',orders: 200,rating: 3.6,amt: 2290,},{name: 'Ali',orders: 980,rating: 4.5,amt: 2000,},{name: 'imad',orders: 189,rating: 2.9,amt: 2181,},{name: 'sally',orders: 239,rating: 4.6,amt: 2500,},{name: 'Abbas',orders: 349,rating: 3.4,amt: 2100,},{name: 'Hussien',orders: 323,rating: 2.6,amt: 2100,},{name: 'Hassan',orders: 349,rating: 4.9,amt: 2100,}];
    
    const [TodaysIncome,setTodaysIncome]=useState(0);
    const [date,setDate]=useState("");
    const [TopItem,setTopItem]=useState({});
    const [topoffer,settopoffer]=useState({});
    const [MonthActivity,setMonthActivity]=useState([])
    const [ItemActivity,setItemActivity]=useState([])
    const [RushHour,setRushHour]=useState([])
    const refresh=()=>{
        axios.get(variables.API_URL+"Dashboard/TodaysIncome").then((res) => {
            setTodaysIncome(res.data)
        })
        axios.get(variables.API_URL+"Dashboard/topitem").then((res) => {
            setTopItem(res.data)
        })
        axios.get(variables.API_URL+"Dashboard/topoffer").then((res) => {
            settopoffer(res.data)
        })
        axios.get(variables.API_URL+"Dashboard/MonthActivity").then((res) => {
            setMonthActivity(res.data)
        })
        axios.get(variables.API_URL+"Dashboard/ItemActivity").then((res) => {
            setItemActivity(res.data)
        })
        axios.get(variables.API_URL+"Dashboard/RushHour").then((res) => {
            setRushHour(res.data)
        })
    }
    useEffect(()=> {
        refresh();
        setDate(format(new Date(), 'dd/MM/yyyy'))
        },[])

//CSV Files
        //Monthly Statictics
        const MonthlyHeaders=[{label:"Month",key:"month"},{label:"Total Order",key:"total_orders"},{label:"This year orders number",key:"this_year_orders"},{label:"This year income",key:"this_year_income"}]
        const MonthlyCSVFile={
            filename:`Monthly Statistics - ${date}.csv`,
            headers:MonthlyHeaders,
            data:MonthActivity
        }
        //Staff
        const StaffHeaders=[{label:"Name",key:"name"},{label:"Number Of Orders",key:"orders"},{label:"Rating",key:"rating"}]
        const SatffCSVFile={
            filename:`Staff Statistics - ${date}.csv`,
            headers:StaffHeaders,
            data:staff
        }
        //Rush Hours
        const RushHoursHeaders=[{label:"Time",key:"time"},{label:"Total Number Of Orders",key:"total_orders"},{label:"This year number of orders",key:"this_year_orders"}]
        const RushHoursCSVFile={
            filename:`RushHours - ${date}.csv`,
            headers:RushHoursHeaders,
            data:RushHour
        }
        //Items Staticstics
        const ItemsHeaders=[{label:"Item",key:"name"},{label:"This year number of orders",key:"this_year_orders"}]
        const ItemsCSVFile={
            filename:`Items Statistics - ${date}.csv`,
            headers:ItemsHeaders,
            data:ItemActivity
        }

    return ( 
          <div className="sheetPrint">
              <h3 className="text-center">Dashboard</h3><br/>
              <div className='center-div'>
              <div class="dropdown" style={{width:"fit-content"}}>
                <button className='btn btn-primary CSVbtn'  type="button" data-bs-toggle="dropdown" aria-expanded="false"><GetAppIcon></GetAppIcon> CSV <ExpandMoreIcon/> </button>
                <ul class="dropdown-menu">
                    <li><CSVLink {...MonthlyCSVFile} class="dropdown-item" href="#">Monthly Statictics CSV file</CSVLink></li>
                    <li><CSVLink {...SatffCSVFile} class="dropdown-item" href="#">Staff CSV file</CSVLink></li>
                    <li><CSVLink {...RushHoursCSVFile} class="dropdown-item" href="#">Rush Hours CSV file</CSVLink></li>
                    <li><CSVLink {...ItemsCSVFile} class="dropdown-item" href="#">Items Staticstics CSV file</CSVLink></li>
                </ul>
              <button onClick={()=>{window.print()}} className='btn btn-primary PDFbtn ms-3'><PrintIcon/> Print</button>
                </div>
                </div>
              <div className="TopBoxes d-flex justify-content-center row m-3">
                  <TopBox isNormal={true} title="Top item" name={TopItem.name} number={TopItem.orders_number}/>
                  <TopBox isNormal={true} title="Top Offer"name={topoffer.name} number={topoffer.orders_number}/>
                  <TopBox isNormal={false} title="Top Customer"name="Samer" number={31}/>
                  <TopBox isNormal={false} title="Top Staff"name="Ahmad" number={143}/>
                  <TopBox isNormal={true} title="Today's incomes"  number={TodaysIncome} add={`$`}/>
              </div>
              <div className="">
              
              </div>
              <div className="chart row col-12" style={{height:"400px"}}>
                <div className="Chart col-lg-11 col-md-12 ms-lg-5 mx-xs-0" style={{height:"350px"}}>
                    <h5>Monthly Staticstics</h5>
                  <LineCharts data={MonthActivity} xkey="month"  datakey="total_orders" datakey2="this_year_orders" datakey3="this_year_income"/>
                </div>
                <div className="Chart col-lg-6 col-md-12 mx-lg-0 mx-xs-0 mt-5" style={{height:"390px"}}>
                        <h5>Staff activities</h5>
                        <BarCharts data={staff} xkey="name" datakey="orders" datakey2="rating"/>
                    </div>
                    <div className="Chart col-lg-6 col-md-12 mx-lg-0 mx-xs-0 mt-5" >
                        <h5>Rush Hours</h5>
                    <LineCharts data={RushHour} xkey="time"  datakey="total_orders" datakey2="this_year_orders"/>
                    </div>
                    <div className="Chart col-lg-12 col-md-12 mx-lg-2 mx-xs-0" style={{height:"450px"}}>
                        <h5>Items Staticstics</h5>
                        <BarCharts data={ItemActivity} xkey="name" datakey="this_year_orders"/>
                    </div>
              </div>
          </div>
     );
}

export default Dashboard;