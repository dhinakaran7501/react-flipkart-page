import "./TopDeals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const TopDeals = () => {
  const TopDeals = [
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=80",
      itemName: "Apple iPads",
      priceFrom: "30,000",
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=80",
      itemName: "Charger",
      priceFrom: 999,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=80",
      itemName: "Mirrorless Cameras",
      priceFrom: 1500,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/j6zcwi80/instant-camera/5/q/n/ice-blue-with-brown-case-40-shots-mini-9-ice-blue-with-brown-original-imaex6nzgyqqzhfk.jpeg?q=80",
      itemName: "Instax Cameras",
      priceFrom: 11999,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/jv2p6kw0/stylus/m/p/8/pencil-2nd-gen-mu8f2zm-a-apple-original-imafg2dsgpu9pfgz.jpeg?q=80",
      itemName: "Apple Pencil",
      priceFrom: 1199,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/xif0q/printer/z/s/h/-original-imagnuwewu5arfpu.jpeg?q=80",
      itemName: "Top Rated Printers",
      priceFrom: 2799,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/kox8b680/camera-bag/backpack/m/q/o/dslr-slr-camera-lens-shoulder-backpack-case-for-canon-nikon-original-imag39xgsm4py2hq.jpeg?q=80",
      itemName: "Camera Bags",
      priceFrom: 1500,
    },
    {
      imgURL: "https://rukminim1.flixcart.com/image/210/210/k0bbb0w0/data-cable/usb-type-c-cable/u/t/w/flipkart-smartbuy-acrbb1m01-original-imafk4vq3kedyxku.jpeg?q=80",
      itemName: "Charger Cables",
      priceFrom: 199,
    },
  ];
  return (
    <div className="TopDeals">
      <div className="row">
        <div className="col">
          <a href="#">
            <h5>Top Deals</h5>
          </a>
        </div>
        <div className="greatericon">
          <a href="#">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="boe-flex">
        {TopDeals.map(function (value, index, array) {
          return (
            <a href="#">
              <div className="d-inline-block">
                <div className="col">
                  <div class="card">
                    <img src={value.imgURL} class="card-img-top" alt="img" />
                    <div class="card-body">
                      <p class="card-text">
                        <p>{value.itemName}</p>
                        <h5>From &#8377;{value.priceFrom}</h5>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TopDeals;
