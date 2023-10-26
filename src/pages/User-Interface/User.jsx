import Topbar from "../../components/topbar/Topbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import ChangePassword from "./changePass/ChangePass";
import FeedbacksRate from "./feedbacksRate/FeedbacksRate";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Footer from "../../components/footer/Footer";
import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import MyOrders from "./MyOrders/MyOrders";
import Offers from "./Offers/Offers";
import NotFound from "../NotFound/NotFound";

function User() {
  const [cart, setCart] = useState([]);
  //list item for cart
  //Add item to cart list (function)
  //give the Menu page the fucntion (props)
  //give the items list to the cart
  return (
    <div className="">
      <Router>
        <Topbar />
        <Routes>
          {/*for each page you need to create a Route */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      <Footer IsUser={true} />

      <div
        class="modal fade"
        id="FeedbackModel"
        tabindex="-1"
        aria-labelledby="FeedbackModelLabel"
        aria-hidden="true"
        style={{ zIndex: "100000" }}
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="FeedbackModelLabel">
                FeedBack
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p> We're Excited to Hear from You!</p>
              <Rate className="m-3" allowClear={false} defaultValue={3} />
              <TextArea
                placeholder="Note"
                className="Settingsinput SettingsTextArea"
                style={{ height: "200px" }}
              ></TextArea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
