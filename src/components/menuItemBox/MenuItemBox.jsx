import "./menuItemBox.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

function MenuItemBox(props) {
    const [count, setCount] = useState(1);
    return ( 
        <div className="menuItemBox col-lg-3 col-md-5 border p-3 m-lg-3 mx-sm-0 my-sm-3 my-xs-3 shadow">
            <img className="MenuItemBoxImg m-1 mb-3 rounded" src={props.img} alt="" />
            {props.isNew && <span class="newspan badge bg-danger">New</span>}
            {props.outstock && <span class="newspan badge bg-secondary text-primary">out of stock</span>}
            <h5>{props.name}</h5>
            <p>{props.component}</p>
            <p><strong>{props.price}$</strong></p>
            {props.outstock ? <button className="btn btn-primary" disabled><AddShoppingCartIcon/> Add to Cart</button>:<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.id}`}><AddShoppingCartIcon/> Add to Cart</button>}
            {/*---------Item PoP ----------- */}
            <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hiddden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img className="menupopimg m-2 mb-3 rounded" src={props.img} alt="" />
                        <p>{props.component}</p>
                        {count<=1 ? <button className="btn-count btn btn-primary" disabled> <RemoveIcon/> </button> : <button className="btn-count btn btn-primary" onClick={()=>setCount(count-1)}> <RemoveIcon/> </button>}
                        <input type="number" className="input-count text-center border-1" placeholder="quantity" value={count} min={1} max={100}/> 
                        {count>=100 ? <button className="btn-count btn btn-primary" disabled> <AddIcon/> </button> : <button className="btn-count btn btn-primary" onClick={()=>setCount(count+1)}> <AddIcon/> </button>}
                        <input type="text" max={100} min={1} className="input-note-pop m-3 p-2" placeholder="Notes" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" ><AddShoppingCartIcon/> Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MenuItemBox;