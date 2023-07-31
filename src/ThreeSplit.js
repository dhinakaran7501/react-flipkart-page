import './ThreeSplit.css'
import MostShoppedFk from "./MostShoppedFk";
import MonsoonEssentials from './MonsoonEssentials';
import EssentialsForKids from './EssentialsForKids';

function ThreeSplit() {
  return (
    <div className="ThreeSplit">
      <div className="row">
        <div className="col-4">
      <MostShoppedFk />
        </div>
        <div className="col-4">
          <MonsoonEssentials />
        </div>
        <div className="col-4">
          <EssentialsForKids />
        </div>
      </div>
    </div>
  );
}


export default ThreeSplit;