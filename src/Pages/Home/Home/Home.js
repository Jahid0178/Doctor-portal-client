import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import DentalCare from "../DentalCare/DentalCare";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
