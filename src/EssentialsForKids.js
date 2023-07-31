import "./EssentialsForKids.css";

const EssentialsForKids = () => {
  const EssentialsForKids = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/l05lx8w0/backpack/m/s/t/medium-30-l-laptop-casual-backpack-bagpack-for-men-women-blg15-original-imagcy8zk9yywffq.jpeg?q=80",
      itemName: "School Bags",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/kids-sandal/m/d/c/4-rfn112-red-flamingo-original-imagnhq3y4jkthzk.jpeg?q=80",
      itemName: "Flats",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/mug/p/v/l/heavy-gauge-laser-print-tea-coffe-milk-250-6-bhai-chara-original-imagnq83kq7wtcyc.jpeg?q=80",
      itemName: "Mugs",
      priceFrom: 50,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/250/250/xif0q/blanket/v/d/d/double-bed-comfortar-with-02-pillows-cftr-3801-bsb-home-original-imagkzzqw755nush.jpeg?q=80",
      itemName: "Blankets",
      priceFrom: 50,
    },
  ];
  return (
    <div className="EssentialsForKids">
      <div className="row">
        <div className="col-4 bgcolor">
          <div className="row mainTopic">
            <div className="col subTopic">
              <a href="#">
                <h5>Essentials for Kids</h5>
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
              {EssentialsForKids.map(function (value, index, array) {
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

export default EssentialsForKids;
