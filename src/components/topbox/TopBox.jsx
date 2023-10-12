import "./topbox.css"
function TopBox(props) {
    return ( 
        <div className="TopBox bg-secondary text-primary border shadow-sm col-lg-2 col-md-4 col-sm-4 m-3 p-2">
            <h5>{props.title}</h5>
            <div className="d-flex justify-content-between m-3">
                {props.name!=null && <h5 className="text-center">{props.name}</h5>}
                {props.number!=null && <h5 className="text-center">{props.number}</h5>}
            </div>
        </div>
     );
}

export default TopBox;