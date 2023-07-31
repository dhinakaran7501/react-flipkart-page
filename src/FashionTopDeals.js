import "./FashionTopDeals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const FashionTopDeals = () => {
  const FashionTopDeals = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kn4xhu80/bra/x/c/3/lightly-padded-32e-no-regular-regular-br2213p08-clovia-original-imagfvnj3gmgqbxf.jpeg?q=80",
      itemName: "Bra, Tops, Dresses",
      priceFrom: 99,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/fk-p-flap/210/210/image/5aa98b7cee183286.jpg?q=80",
      itemName: "Best selling Styles",
      priceFrom: 999,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/flap/210/210/image/4398b53c0596430f.jpg?q=80",
      itemName: "Kids' Clothing",
      priceFrom: 1500,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/l23mhzk0/top/a/b/l/m-tttp006710-tokyo-talkies-original-imagdgg4gqpmdgm8.jpeg?q=80",
      itemName: "Tops, Dresses, Jeans",
      priceFrom: 999,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/ksez24w0/hand-messenger-bag/w/z/z/amy-plus-md-satchel-ladies-handbag-hgge016022m3-satchel-lavie-original-imag5zj5aqrwgcdz.jpeg?q=80",
      itemName: "Lavie, Caprese, Allen Solly",
      priceFrom: 699,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kz8qsnk0/lehenga-choli/m/k/z/free-3-4-sleeve-puspar-lh-001-divastri-original-imagbarzwpevcr5e.jpeg?q=80",
      itemName: "Lehenga Cholis & Gowns",
      priceFrom: 1500,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kxnl6kw0/jewellery-set/a/c/d/na-na-m11-single-r5-bright-style-original-imaga2ahezaabmry.jpeg?q=80",
      itemName: "Fashion Jewellery",
      priceFrom: 99,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kpu3frk0/trouser/n/i/k/30-foilcombo9661-trend-level-original-imag3zggwyrwtbz9.jpeg?q=80",
      itemName: "Palazzos",
      priceFrom: 199,
    },
  ];
  return (
    <div className="FashionTopDeals">
      <div className="row">
        <div className="col">
          <a href="#">
            <h5>Fashion Top Deals</h5>
          </a>
        </div>
        <div className="greatericon">
          <a href="#">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="boe-flex">
        {FashionTopDeals.map(function (value, index, array) {
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

export default FashionTopDeals;
