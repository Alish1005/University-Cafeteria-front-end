import "./adminsettings.css"
import DiscountIcon from '@mui/icons-material/Discount';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { DatePicker, Space ,TimePicker} from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';





function AdminSettings() {
    const [offday,setoffday]=useState("");
    const [offdaytitle,setoffdaytitle]=useState("");
    const [offdaylist,setoffdaylist]=useState([]);

    const onChange = (time, timeString) => {
        
    };
    const onChange2 = (date, dateString) => {
        setoffday(dateString);
    };
    const onClick2 = () => {
        const l=offdaylist;
        l.push({title:offdaytitle,date:offday})
        setoffdaylist(l);
        setoffdaytitle("")
    };
    const onChange3 = (event) => {
        setoffdaytitle(event.target.value)
    };

    return (
        <div className="pagesContent text-primary">
            <h4>Admin Settings</h4>
            <hr />
            <div className="">
                <h5 className="settingsTitles"><DiscountIcon/> Discounts</h5>
                <div className="m-3 row justify-content-center">
                    <input type="number" className="Settingsinput col-sm-12 border rounded" min={0} max={99} placeholder="MU-member Discount"/>
                    <input type="number" className="Settingsinput col-sm-12 border rounded" min={0} max={99} placeholder="MU-staff Discount"/>
                    <input type="number" className="Settingsinput col-sm-12 border rounded" min={0} max={99} placeholder="Non-MU Discount"/>
                </div>
            </div>
            <hr />

            <div className="row">
                <h5 className="settingsTitles"><AccessTimeIcon/> Cafeteria Time</h5>
                <div className="m-3 d-flex justify-content-center">
                    <div>
                        <label htmlFor="startTime" className="mb-1">Open Time</label>
                        <TimePicker id="startTime" className="mx-3" use12Hours format="h:mm a" onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor="endTime" className="ms-3 mb-1">Close Time</label>
                        <TimePicker id="endTime" className="mx-3" use12Hours format="h:mm a" onChange={onChange} />
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
            <h5 className="settingsTitles"><InfoIcon/> About Us</h5>
            <TextArea className="Settingsinput SettingsTextArea"></TextArea>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-11 col-lg-5 mx-2 row">
                <h5 className="settingsTitles"><WorkOffIcon/> Off days</h5>
                <Space direction="vertical">
                    <input type="text" onChange={onChange3} placeholder="Offday Title" value={offdaytitle} className="Settingsinput p-1 border rounded"/>
                    <DatePicker onChange={onChange2} className="my-3"/>
                    <button className="btn btn-outline-primary mb-3" onClick={onClick2}><strong>+</strong> Add</button>
                </Space>
                </div>
                <div className="SettingsOffday col-md-11 col-sm-10 col-lg-5 mx-2 row">
                    <table className="SettingsOffdaytable table table-striped-gray">
                        <thead>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </thead>
                        {
                            offdaylist.map((day,index)=>(
                                <tr>
                                    <td>{index}</td>
                                    <td>{day.title}</td>
                                    <td>{day.date}</td>
                                    <td><button className="btn btn-danger text-danger m-1 p-0"><DeleteIcon/></button></td>
                                </tr>
                            ))
                            }
            
                    </table>
                </div>
            </div>
            <hr />
            <div className="">
                <h5 className="settingsTitles"><NewspaperIcon/> News</h5>
            </div>
            <div className="SettingsSavebtn position-fixed start-50">
                <button className="btn btn-primary">Save</button>
            </div>
        </div>
    );
}

export default AdminSettings;