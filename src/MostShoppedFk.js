import "./MostShoppedFk.css";

const MostShoppedFk = () => {
  const MostShoppedFk = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/sport-glove/a/q/e/left-right-free-size-most-popular-sun-uv-protection-arm-sleeves-original-imaggn32jw4ztzcs.jpeg?q=80",
      itemName: "Cycling Gloves",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/l4ei1e80/umbrella/w/7/e/5-bottle-umbrella-vkg-original-imagfafftvhghqmg.jpeg?q=80",
      itemName: "Umbrellas",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/bottle/3/f/9/1000-crystal-clear-water-bottle-for-fridge-home-office-gym-original-imagnpgch6jzqgrm.jpeg?q=80",
      itemName: "Water Bottles & Flasks",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/shopsy-dumbbell/a/1/q/3-in-1-convertible-dumbbells-barbell-home-gym-set-kit-for-home-original-imaghe6hagxvjyrj.jpeg?q=80",
      itemName: "Fitness Kits",
      priceFrom: 50,
    },
  ];
  return (
    <div className="MostShoppedFk">
      <div className="row">
        <div className="col-4 bgcolor">
          <div className="row mainTopic">
            <div className="col subTopic">
              <a href="#">
                <h5>Most Shopped on FK</h5>
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
              {MostShoppedFk.map(function (value, index, array) {
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

export default MostShoppedFk;
