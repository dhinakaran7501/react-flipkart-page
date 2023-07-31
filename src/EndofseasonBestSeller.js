import "./EndofseasonBestSeller.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const EndofseasonBestSeller = () => {
  const addImg =
    "https://rukminim1.flixcart.com/www/1070/730/promos/22/05/2023/6350965b-ae8b-4b2a-a298-2ce4c7371f0d.jpg?q=80";

  const EndofseasonBestSeller = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=80",
      itemName: "Wrist Watches",
      priceFrom: 90,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/shoe/d/b/c/8-mrj2099-8-aadi-white-original-imagmkfyfyfn9kc8.jpeg?q=80",
      itemName: "Casual Shoes",
      priceFrom: 70,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/slipper-flip-flop/z/f/t/6-l-cp-lyvi-black-original-imagmwfhqkjmyygf.jpeg?q=80",
      itemName: "Slippers & Flip Flops",
      priceFrom: 70,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/sandal/y/5/t/8-sandals-42-vechlo-black-original-imag5rzzbq2fvahj-bb.jpeg?q=80",
      itemName: "Sandals & Floaters",
      priceFrom: 70,
    },
  ];
  return (
    <div className="EndofseasonBestSeller">
      <div className="row">
        <div className="col-4 bgcolor">
          <div className="row mainTopic">
            <div className="col subTopic">
              <a href="#">
                <h5>End of Season Bestsellers</h5>
              </a>
            </div>
            <div className="greatericon">
              <a href="#">
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-flex">
              {EndofseasonBestSeller.map(function (value, index, array) {
                return (
                  <a href="#">
                    <div className=" mb-3">
                      <div class="card">
                        <img
                          src={value.imgURL}
                          class="card-img-top"
                          alt="img"
                        />
                        <div class="card-body">
                          <p class="card-text">
                            <p>{value.itemName}</p>
                            <h5>Min. {value.priceFrom}%Off</h5>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-8 addImg">
          <a href="#">
            <img src={addImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EndofseasonBestSeller;
