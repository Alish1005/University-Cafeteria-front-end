import { SpaRounded } from "@mui/icons-material";
import MyOrderBox from "../../../components/myorderbox/MyOrderBox";
import "./myOrders.css";
import ReplayIcon from '@mui/icons-material/Replay';

const orders = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      time: "15:30",
      total: 75.50,
      items: [
        {
          name: "Widget A",
          quantity: 3,
          price: 10.00,
          total: 30.00,
          note: "Customer prefers blue color"
        },
        {
          name: "Gadget B",
          quantity: 2,
          price: 25.50,
          total: 51.00,
          note: "Expedited shipping requested"
        },
        {
          name: "Accessory C",
          quantity: 1,
          price: 5.75,
          total: 5.75,
          note: "No specific notes"
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      time: "12:15",
      total: 105.25,
      items: [
        {
          name: "Gadget X",
          quantity: 1,
          price: 90.00,
          total: 90.00,
          note: "Expedited shipping requested"
        },
        {
          name: "Accessory Y",
          quantity: 3,
          price: 5.50,
          total: 16.50,
          note: "Gift wrap required"
        }
      ]
    },
    {
      id: 3,
      name: "Michael Johnson",
      phone: "555-123-4567",
      time: "09:45",
      total: 50.75,
      items: [
        {
          name: "Widget B",
          quantity: 2,
          price: 15.00,
          total: 30.00,
          note: "Urgent delivery needed"
        },
        {
          name: "Accessory Z",
          quantity: 1,
          price: 20.75,
          total: 20.75,
          note: "Special request: custom engraving"
        }
      ]
    },
    // Continue adding more orders...
  ];
function MyOrders() {
    return ( 
        <div className="MyOrders container-lg mb-5">
              <h3> My Orders </h3>
              <div className="row">
              <MyOrderBox  type='1' status="loading" date="Dec 12 2023" data={orders[1]} action={<span><ReplayIcon/> Re-Order</span>}/>
              <MyOrderBox  type='1' status="canceled" date="Dec 12 2023" data={orders[2]} action={<span><ReplayIcon/> Re-Order</span>}/>
              <MyOrderBox  type='1' status="complete" date="Dec 12 2023" data={orders[0]} action={<span><ReplayIcon/> Re-Order</span>}/>
              <MyOrderBox  type='1' date="Dec 12 2023" data={orders[1]} action={<span><ReplayIcon/> Re-Order</span>}/>
              </div>
        </div>
     );
}

export default MyOrders;