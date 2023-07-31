import "./App.css";
import BeautyFoodToys from "./BeautyFoodToys";
import BestofElectronics from "./BestofElectronics";
import Carousel from "./Carousel";
import Collection from "./Collection";
import EndofseasonBestSeller from "./EndofseasonBestSeller";
import ThreeSplit from "./ThreeSplit";
import Header from "./Header";
import SportsHealthcare from "./SportsHealthcare";
import FashionTopDeals from "./FashionTopDeals";
import TopDeals from "./TopDeals";
import BrandDirectory from "./BrandDirectory";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Collection />
      <Carousel />
      <BestofElectronics />
      <BeautyFoodToys />
      <EndofseasonBestSeller />
      <ThreeSplit />
      <SportsHealthcare />
      <FashionTopDeals />
      <TopDeals />
      <BrandDirectory />
      <Footer />
    </div>
  );
}

export default App;
