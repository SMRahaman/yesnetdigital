import React from "react";
import Banner from "../../Components/Banner/Banner";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import OurServices from "../../Components/OurServices/OurServices";
import UpcommingEvent from "../../Components/UpcommingEvent/UpcommingEvent";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <OurServices></OurServices>
      <UpcommingEvent></UpcommingEvent>
    </div>
  );
};

export default Home;
