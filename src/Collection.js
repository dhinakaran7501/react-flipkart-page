import "./Collection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Collection() {
  const groceryImg =
    "https://rukminim1.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100";
  const MobilesImg =
    "https://rukminim1.flixcart.com/flap/72/72/image/22fddf3c7da4c4f4.png?q=100";
  const FashionsImg =
    "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/0d75b34f7d8fbcb3.png?q=100";
  const Electronics =
    "https://rukminim1.flixcart.com/flap/72/72/image/69c6589653afdb9a.png?q=100";
  const hF =
    "https://rukminim1.flixcart.com/flap/72/72/image/ab7e2b022a4587dd.jpg?q=100";
  const Appliances =
    "https://rukminim1.flixcart.com/flap/72/72/image/0ff199d1bd27eb98.png?q=100";
  const Travel =
    "https://rukminim1.flixcart.com/flap/72/72/image/71050627a56b4693.png?q=100";
  const TO =
    "https://rukminim1.flixcart.com/flap/72/72/image/f15c02bfeb02d15d.png?q=100";
  const bTM =
    "https://rukminim1.flixcart.com/flap/72/72/image/dff3f7adcf3a90c6.png?q=100";
  const tW =
    "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/05d708653beff580.png?q=100";
  return (
    <div className="collection-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={groceryImg} alt="" />
            <h6>Grocery</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={MobilesImg} alt="" />
            <h6>Mobiles</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={FashionsImg} alt="" />
            <h6>Fashion</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={Electronics} alt="" />
            <h6>Electronics</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={hF} alt="" />
            <h6>Home & Furniture</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={Appliances} alt="" />
            <h6>Appliances</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={Travel} alt="" />
            <h6>Travel</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={TO} alt="" />
            <h6>Top Offers</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={bTM} alt="" />
            <h6>Beauty & Toys</h6>
          </a>
          </div>
          <div className="col-sm-6 col-md">
          <a href="#" className="img-sec">
            <img src={tW} alt="" />
            <h6>Two Wheelers</h6>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
