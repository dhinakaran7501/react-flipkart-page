import "./BestofElectronics.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const BestofElectronics = () => {
  const bestofElectronics = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/flap/210/210/image/20c224cd52ae7a87.jpg?q=80",
      itemName: "Best of Trimmers",
      priceFrom: 399,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=80",
      itemName: "Premium PowerBanks",
      priceFrom: 499,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=80",
      itemName: "Top Mirrorless Cameras",
      priceFrom: "40,000",
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=80",
      itemName: "Printers",
      priceFrom: 3999,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=80",
      itemName: "Monitors",
      priceFrom: 7949,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/k6fd47k0pkrrdj/printer/r/g/r/canon-pixma-mg3070s-original-imafbu3ypdzxq3wb.jpeg?q=80",
      itemName: "Printers",
      priceFrom: 2336,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/monitor/x/a/z/-original-imagr73bhwneffva.jpeg?q=80",
      itemName: "Gaming Monitor",
      priceFrom: "11,999",
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=80",
      itemName: "Projectors",
      priceFrom: 9999,
    },
  ];
  return (
    <div className="bestofElectronics">
      <div className="row">
        <div className="col">
          <a href="#">
            <h5>Best of Electronics</h5>
          </a>
        </div>
        <div className="greatericon">
          <a href="#">
            <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="boe-flex">
        {bestofElectronics.map(function (value, index, array) {
          return (
            
              <div className="d-inline-block" key={index}>
                <div className="col">
                  <div className="card">
                    <img src={value.imgURL} className="card-img-top" alt="img" />
                    <div className="card-body">
                      <p className="card-text">
                        <p>{value.itemName}</p>
                        <h5>From &#8377;{value.priceFrom}</h5>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          
          );
        })}
      </div>
    </div>
  );
};
export default BestofElectronics;
