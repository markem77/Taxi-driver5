import Driversec1 from '../components/fordriver/Driversec1';
import Driversec2 from '../components/fordriver/Driversec2';
import Headerdriver from '../components/fordriver/Headerdriver';
import Questionnaire from '../components/fordriver/Questionnaire';


const Driver = () => {
  return (
    <div className ="maincont3">
      <Headerdriver/>
      <Driversec1 />
      <Driversec2 />
      <Questionnaire />
    </div>
  );
};

export default Driver;
