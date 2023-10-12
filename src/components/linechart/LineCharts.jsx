import { Padding } from '@mui/icons-material';
import {
    LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Brush,AreaChart,Area,ResponsiveContainer,} from 'recharts';
function LineCharts(props) {
    return ( 
            <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={props.data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.xkey} />
            <YAxis />
            <Tooltip />
            {props.datakey!=null && <Line type="monotone" dataKey={props.datakey} stroke="#8884d8" fill="#8884d8" />}
            {props.datakey2!=null && <Line type="monotone" dataKey={props.datakey2} stroke="#0DCAF0" fill="#0DCAF0" />}
            {props.datakey3!=null && <Line type="monotone" dataKey={props.datakey3} stroke="#F2D944" fill="#F2D944" />}
          </LineChart>
        </ResponsiveContainer>
     );
}

export default LineCharts;