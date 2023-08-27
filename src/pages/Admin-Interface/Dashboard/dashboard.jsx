import './dashboard.css';
import TopBox from '../../../components/topbox/TopBox';
import BarCharts from '../../../components/barChart/BarCharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LineCharts from '../../../components/linechart/LineCharts';

function Dashboard() {
    const data = [{name: 'man2oshi',uv: 4000,pv: 240,amt: 2400,},{name: 'salad',uv: 3000,pv: 139,amt: 2210,},{name: 'Burger',uv: 2000,pv: 980,amt: 2290,},{name: 'choclate',uv: 2780,pv: 390,amt: 2000,},{name: 'Tea',uv: 1890,pv: 480,amt: 2181,},{name: 'coffee',uv: 2390,pv: 380,amt: 2500,},{name: 'water',uv: 3490,pv: 430,amt: 2100,},{name: 'soap',uv: 3490,pv: 430,amt: 2100,},{name: 'orange',uv: 3490,pv: 430,amt: 2100,}];
    const Monthlydata = [{name: 'April',uv: 4000,pv: 240,amt: 2400,},{name: 'May',uv: 3000,pv: 139,amt: 2210,},{name: 'June',uv: 2000,pv: 980,amt: 2290,},{name: 'July',uv: 2780,pv: 390,amt: 2000,},{name: 'August',uv: 4890,pv: 480,amt: 2181,},{name: 'September',uv: 2390,pv: 380,amt: 2500,},{name: 'October',uv: 3490,pv: 430,amt: 2100,},];
    const rushHours = [{name: '8.am',uv: 10,pv: 240,amt: 2400,},{name: '9.am',uv: 30,pv: 139,amt: 2210,},{name: '10.am',uv: 20,pv: 980,amt: 2290,},{name: '11.am',uv: 45,pv: 390,amt: 2000,},{name: '12.pm',uv: 55,pv: 480,amt: 2181,},{name: '1.pm',uv: 62,pv: 380,amt: 2500,},{name: '2.pm',uv: 45,pv: 430,amt: 2100,},{name: '3.pm',uv: 34,pv: 430,amt: 2100,},{name: '4.pm',uv: 29,pv: 430,amt: 2100,},{name: '5.pm',uv: 15,pv: 430,amt: 2100,},];
    return ( 
          <div className="dashboard row overflow-y-visible">
              <h3 className="text-center">Dashboard</h3><br/>
              <div className="TopBoxes d-flex justify-content-center row m-3">
                  <TopBox title="Top item" name="Burger" number={324}/>
                  <TopBox title="Top Offer" name="Morning" number={241}/>
                  {/*<TopBox top="Customer" name="Samer" number={31}/>*/}
                  <div className="bg-info text-primary border shadow-sm rounded-4 col-lg-2 col-md-4 col-sm-4  m-3 p-2">
                      <h4>Top Customer</h4>
                      <div className="d-flex justify-content-between m-3">
                          <h5>Samer</h5>
                          <h5>31</h5>
                      </div>
                  </div>
                  {/*<TopBox top="Staff" name="Ahmad" number={251}/>*/}
                  <div className="bg-info text-primary border shadow-sm rounded-4 col-lg-2 col-md-4 col-sm-4  m-3 p-2">
                      <h4>Top Staff</h4>
                      <div className="d-flex justify-content-between m-3">
                          <h5>Ahmad</h5>
                          <h5>251</h5>
                      </div>
                  </div>
                  <TopBox title="Today's incomes"  number="431$"/>
              </div>
              <div className="">
              
              </div>
              <div className="chart row col-12" style={{height:"350px"}}>
                <div className="Chart col-lg-5 col-md-12 ms-lg-5 mx-xs-0" style={{height:"350px"}}>
                  <LineCharts data={Monthlydata} xkey="name"  datakey="pv" datakey2="uv" datakey3="amt"/>
                </div>
                    <div className="col-lg-6 col-md-12 mx-lg-2 mx-xs-0" >
                    <BarCharts data={data} xkey="name" datakey="pv"/>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-lg-2 mx-xs-0" >
                    <LineCharts data={rushHours} xkey="name"  datakey="uv"/>
                    </div>
              </div>
          </div>
     );
}

export default Dashboard;