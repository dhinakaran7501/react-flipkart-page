import "./MonsoonEssentials.css";

const MonsoonEssentials = () => {
  const MonsoonEssentials = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/hair-oil/o/a/r/300-adivasi-jadibuti-natural-hair-oil-pack-3-phillauri-original-imagq75xgkey86ag.jpeg?q=80",
      itemName: "Hair Oil",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/kumzpu80/mug/a/s/p/personalized-photo-and-text-ceramic-cup-for-birthday-anniversary-original-imag7pr6qsfavcqe.jpeg?q=80",
      itemName: "Mugs",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/l5iid8w0/deodorant/u/o/c/200-deo-spray-fresh-active-none-antiperspirant-male-200ml-pack-original-imagg69xbr4t7ddh.jpeg?q=80",
      itemName: "Fragrances",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/raincoat/5/3/s/xxl-rnc-101-sancia-original-imagqf5rqhr42n7t.jpeg?q=80",
      itemName: "Men And Women Raincoats",
      priceFrom: 50,
    },
  ];
  return (
    <div className="MonsoonEssentials">
      <div className="row">
        <div className="col-4 bgcolor">
          <div className="row mainTopic">
            <div className="col subTopic">
              <a href="#">
                <h5>Monsoon Essentials</h5>
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
              {MonsoonEssentials.map(function (value, index, array) {
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
      </div>
    </div>
  );
};

export default MonsoonEssentials;
