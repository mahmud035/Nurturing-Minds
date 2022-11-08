import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import CoursePackages from '../CoursePackages/CoursePackages';
import Appointment from '../../Appointment/Appointment';
import useSetTitle from '../../../hooks/useSetTitle';

const Home = () => {
  useSetTitle('Home');

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <CoursePackages></CoursePackages>
      <Gallery></Gallery>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
