import "./offers.css"
function Offers() {
    return ( 
        <div className="offers">
            <div className="heading text-primary bg-secondary">
              <h3>&mdash; Offers &mdash;</h3>
            </div>
            <div className="container">
            <button className="offerimg"><img src="https://cache.dominos.com/wam/prod/market/LB/_ar/images/promo/7c07f1f8-aeac-42ca-a47f-94b8e65395b5.jpg" alt="" />    </button>        
            <button className="offerimg"><img src="https://cache.dominos.com/wam/prod/market/LB/_ar/images/promo/4e6c7460-603b-47db-9908-6c4069a38556.jpg"alt="" /></button>  
            <button className="offerimg"><img src="https://cache.dominos.com/wam/prod/market/LB/_ar/images/promo/4d3638e2-13bf-4501-acb0-e4526dfecc99.jpg"alt="" /></button>  
            <button className="offerimg"><img src="https://cache.dominos.com/wam/prod/market/LB/_ar/images/promo/dfc07eaf-fd21-4537-a0ff-d132e8b5c0b5.jpg"alt="" /></button>    
            </div>
        </div>
     );
}

export default Offers;