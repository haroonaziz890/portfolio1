import React from "react";
import SidebarOnly from "./Sec0/Nv";
import SidebarWithContent from "./Sec1/Im";
// import Harr from "./Sec3/Harr";
import Para from "./Sec4/Para";
import Cards from "./Sec5/Cards";
import Head from "./Sec6/Head";
// import Tab from "./Sec8/Tab";
import Forrm from './Sec9/Forrm'
import Pik from './Sec11/Pik'
import Footer from './Sec10/Footer'

const App = () => {
  return (
    <div>
      <SidebarOnly />
      <SidebarWithContent />
      {/* <Harr /> */}
      <Para />
      <Cards />
      <Head />
      <Forrm />
      <Pik />
      {/* <Tab /> */}
      <Footer />
      
    </div>
  );
};

export default App;
