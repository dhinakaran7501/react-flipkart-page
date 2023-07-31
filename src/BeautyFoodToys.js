import "./BeautyFoodToys.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const BeautyFoodToys = () => {
  const BeautyFoodToys = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=80",
      itemName: "Top Selling Stationery",
      priceFrom: 49,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=80",
      itemName: "Geared Cycles",
      priceFrom: 3999,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80",
      itemName: "Remote Control Toys",
      priceFrom: 1000,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=80",
      itemName: "Electric Cycle",
      priceFrom: 4999,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=80",
      itemName: "Rider Helmets",
      priceFrom: 699,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=80",
      itemName: "Tyres",
      priceFrom: 799,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=80",
      itemName: "Non-Geared Cycles",
      priceFrom: "10,999",
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=80",
      itemName: "Soft Toys",
      priceFrom: 700,
    },
  ];
  return (
    <div className="beautyFoodToys">
      <div className="row">
        <div className="col">
          <a href="#">
            <h5>Beauty, Food, Toys & More</h5>
          </a>
        </div>
        <div className="greatericon">
          <a href="#">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="boe-flex">
        {BeautyFoodToys.map(function (value, index, array) {
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

export default BeautyFoodToys;
