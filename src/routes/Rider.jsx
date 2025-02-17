
import Questionnaire from '../components/fordriver/Questionnaire';
import Header from '../components/forrider/Header';
import Header_rider from '../components/forrider/Header_rider';
import Rider1_section from '../components/forrider/Rider1_section';
import Temoignages from '../components/forrider/Temoignages';
import './styles/rider.css'
const Rider = () => {

  return (
   <div className="maincont2">
    <Header_rider />
    <Header />
    <Rider1_section />
    <Temoignages />
    <Questionnaire />
   </div>
  );
};

export default Rider;
