import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Label } from 'recharts';
function BarCharts(props) {
    return ( 
            <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 30,
                          bottom: 100,
                        }}
                        barSize={20}
                      >
                        <XAxis dataKey={props.xkey} angle={-45} textAnchor="end" tick={{ fontSize: 14 }} scale="point" padding={{ left: 20, right: 20 }}><Label value={props.xkey} className='fw-bold' offset={-25} position="insideBottom" /></XAxis>
                        <YAxis yAxisId="left" padding={{ left: 20, right: 20 }}/>
                        {props.datakey2!=null &&
                        <YAxis yAxisId="right" orientation="right"><Label value={`${props.datakey2} axis`} offset={30} angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }}/></YAxis>}
                        <Tooltip />
                        {/* <Legend /> */}
                        <CartesianGrid strokeDasharray="3 3" />
                        {props.datakey!=null && <Bar dataKey={props.datakey} yAxisId="left" fill="#8884d8" background={{ fill: '#eee' }} />}
                        {props.datakey2!=null && <Bar dataKey={props.datakey2} yAxisId="right" fill="#0DCAF0" background={{ fill: '#eee' }} />}
                        {props.datakey3!=null && <Bar dataKey={props.datakey3} fill="#F2D944" background={{ fill: '#eee' }} />}
                      </BarChart>
            </ResponsiveContainer>
     );
}

export default BarCharts;