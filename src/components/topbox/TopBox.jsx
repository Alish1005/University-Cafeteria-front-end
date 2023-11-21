import "./topbox.css"
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import React from "react";
function TopBox(props) {
    const formatter = (value) => <div className="d-flex text-primary fw-bold"><CountUp end={value} separator="," className='' /><p>{props.add}</p></div>;
    return ( 
        <div className={`${props.isNormal ? "TopBox bg-secondary ":"TopBox2 bg-info "}text-primary border shadow-sm col-lg-2 col-md-4 col-sm-4 m-3 p-2`}>
            <h5>{props.title}</h5>
            <div className="d-flex justify-content-between m-3">
                {props.name!=null && <h5 className="text-center mt-2">{props.name}</h5>}
                {props.number!=null &&<><Statistic title={null} value={props.number} formatter={formatter}/></>}
            </div>
        </div>
     );
}

export default TopBox;