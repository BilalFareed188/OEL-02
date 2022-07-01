// import "./global.css";
import Navbar from './component/Navbar';
import Body from './component/Body';
import AnimatedContainer from './component/AnimatedContainer';
import ProfileContent from './component/ProfileContent';

import car1 from './assets/car1.jpg'
import car2 from './assets/car2.jfif'
import CountactUs from "./component/ContactUs";




const App = () => {

    return(
        <div>
            <Navbar/>
            <Body/>
            <h1  class= "productsHeading">PRODUCTS</h1>
            <AnimatedContainer CarImg={car1}/>
            <AnimatedContainer CarImg={car2}/>
            <h1  class= "productsHeading">CONTACT US</h1>
            <CountactUs />
            <ProfileContent/>
        </div>
    );
}

export default App;