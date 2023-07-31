import "./SportsHealthcare.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const SportsHealthcare = () => {
  const SportsHealthcare = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=80",
      itemName: "Microphones",
      priceFrom: 250,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=80",
      itemName: "Treadmill, Exercise Bikes",
      priceFrom: 399,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=80",
      itemName: "Yoga Mat",
      priceFrom: 159,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=80",
      itemName: "Food Spreads",
      priceFrom: 499,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/book/h/l/7/the-hidden-hindu-original-imagjvn37ythf2z3.jpeg?q=80",
      itemName: "Fiction Books",
      priceFrom: 299,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=80",
      itemName: "Puzzles & Cubes",
      priceFrom: 79,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=80",
      itemName: "Baby Oral Care",
      priceFrom: 199,
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/image/210/210/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=80",
      itemName: "Learning & Educational Games",
      priceFrom: 150,
    },
  ];
  return (
    <div className="SportsHealthcare">
      <div className="row">
        <div className="col">
          <a href="#">
            <h5>Sports, Healthcare & More</h5>
          </a>
        </div>
        <div className="greatericon">
          <a href="#">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="boe-flex">
        {SportsHealthcare.map(function (value, index, array) {
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

export default SportsHealthcare;
