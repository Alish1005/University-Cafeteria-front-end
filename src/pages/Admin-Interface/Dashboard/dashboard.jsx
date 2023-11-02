import './dashboard.css';
import TopBox from '../../../components/topbox/TopBox';
import BarCharts from '../../../components/barChart/BarCharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LineCharts from '../../../components/linechart/LineCharts';

function Dashboard() {
    const data = [{name: 'man2oshi',orders: 4000,rating: 2.4,amt: 2400,},{name: 'salad',orders: 3000,rating: 3.8,amt: 2210,},{name: 'Burger',orders: 2000,rating: 4.8,amt: 2290,},{name: 'choclate',orders: 2780,rating: 3.9,amt: 2000,},{name: 'Tea',orders: 1890,rating: 4.8,amt: 2181,},{name: 'coffee',orders: 2390,rating: 3.8,amt: 2500,},{name: 'water',orders: 3490,rating: 4.5,amt: 2100,},{name: 'soap',orders: 3490,rating: 4.3,amt: 2100,},{name: 'orange',orders: 3490,rating: 4.3,amt: 2100,},];
    const Monthlydata = [{name: 'April',orders: 4000,rating: 240,income: 2400,},{name: 'May',orders: 3000,rating: 139,income: 2210,},{name: 'June',orders: 2000,rating: 980,income: 2290,},{name: 'July',orders: 2780,rating: 390,income: 2000,},{name: 'August',orders: 4890,rating: 480,income: 2181,},{name: 'September',orders: 2390,rating: 380,income: 2500,},{name: 'October',orders: 3490,rating: 430,income: 2100,},];
    const rushHours = [{name: '8.am',orders: 10,rating: 240,amt: 2400,},{name: '9.am',orders: 15,rating: 139,amt: 2210,},{name: '10.am',orders: 20,rating: 980,amt: 2290,},{name: '11.am',orders: 45,rating: 390,amt: 2000,},{name: '12.pm',orders: 55,rating: 480,amt: 2181,},{name: '1.pm',orders: 62,rating: 380,amt: 2500,},{name: '2.pm',orders: 45,rating: 430,amt: 2100,},{name: '3.pm',orders: 34,rating: 430,amt: 2100,},{name: '4.pm',orders: 29,rating: 430,amt: 2100,},{name: '5.pm',orders: 15,rating: 430,amt: 2100,},];
    const staff = [{name: 'Ali ',orders: 400,rating: 4.3,amt: 2400,},{name: 'kassem',orders: 300,rating: 3.2,amt: 2210,},{name: 'Ahmad',orders: 200,rating: 3.6,amt: 2290,},{name: 'Ali',orders: 980,rating: 4.5,amt: 2000,},{name: 'imad',orders: 189,rating: 2.9,amt: 2181,},{name: 'sally',orders: 239,rating: 4.6,amt: 2500,},{name: 'Abbas',orders: 349,rating: 3.4,amt: 2100,},{name: 'Hussien',orders: 323,rating: 2.6,amt: 2100,},{name: 'Hassan',orders: 349,rating: 4.9,amt: 2100,}];
    return ( 
          <div className="">
              <h3 className="text-center">Dashboard</h3><br/>
              <div className="TopBoxes d-flex justify-content-center row m-3">
                  <TopBox title="Top item" name="Burger" number={324}/>
                  <TopBox title="Top Offer" name="Morning" number={241}/>
                  {/*<TopBox top="Customer" name="Samer" number={31}/>*/}
                  <div className="bg-info text-primary border shadow-sm col-lg-2 col-md-4 col-sm-4  m-3 p-2">
                      <h5>Top Customer</h5>
                      <div className="d-flex justify-content-between m-3">
                          <h5>Samer</h5>
                          <h5>31</h5>
                      </div>
                  </div>
                  {/*<TopBox top="Staff" name="Ahmad" number={251}/>*/}
                  <div className="bg-info text-primary border shadow-sm col-lg-2 col-md-4 col-sm-4  m-3 p-2">
                      <h5>Top Staff</h5>
                      <div className="d-flex justify-content-between m-3">
                          <h5>Ahmad</h5>
                          <h5>251</h5>
                      </div>
                  </div>
                  <TopBox title="Today's incomes"  number="431$"/>
              </div>
              <div className="">
              
              </div>
              <div className="chart row col-12" style={{height:"400px"}}>
                <div className="Chart col-lg-5 col-md-12 ms-lg-5 mx-xs-0" style={{height:"350px"}}>
                    <h5>Monthly Staticstics</h5>
                  <LineCharts data={Monthlydata} xkey="name"  datakey="rating" datakey2="orders" datakey3="income"/>
                </div>
                    <div className="col-lg-6 col-md-12 mx-lg-2 mx-xs-0" style={{height:"350px"}}>
                        <h5>Monthly Staticstics</h5>
                        <BarCharts data={data} xkey="name" datakey="orders" datakey2="rating"/>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-lg-2 mx-xs-0 mt-5" style={{height:"350px"}}>
                        <h5>Staff activities</h5>
                        <BarCharts data={staff} xkey="name" datakey="orders" datakey2="rating"/>
                    </div>
                    <div className="col-lg-5 col-md-12 mx-lg-2 mx-xs-0 mt-5" >
                        <h5>Rush Hours</h5>
                    <LineCharts data={rushHours} xkey="name"  datakey="orders"/>
                    </div>
              </div>
          </div>
     );
}

export default Dashboard;