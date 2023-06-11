import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import PopularCourse from "./Components/PopularCourse/PopularCourse";
import OurServices from "./Components/OurServices/OurServices";
import DoctorList from "./Components/DoctorsList/DoctorList";
import UpcommingEvent from "./Components/UpcommingEvent/UpcommingEvent";
function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <OurServices></OurServices>
      <DoctorList></DoctorList>
      <UpcommingEvent></UpcommingEvent>
    </div>
  );
}

export default App;
