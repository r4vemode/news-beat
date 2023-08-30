import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';

import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import LifeStyle from "./components/LifeStyle.jsx";
import Technic from "./components/Technic.jsx";
import Society from "./components/Society.jsx";
import HomeAndGarden from "./components/HomeAndGarden.jsx";
import Health from "./components/Health.jsx";
import ShowBusiness from "./components/ShowBusiness.jsx";
import Shark from "./articles/Shark.jsx";
import AppleTree from "./articles/AppleTree.jsx";
import BlockPensi from "./articles/BlockPensi.jsx";
import ChillSea from "./articles/ChillSea.jsx";
import ClearGubka from "./articles/ClearGubka.jsx";
import Error from "./articles/Error.jsx";
import Evrey from "./articles/Evrey.jsx";
import Germany from "./articles/Germany.jsx";
import Gubka from "./articles/Gubka.jsx";
import Mask from "./articles/Mask.jsx";
import Nusha from "./articles/Nusha.jsx";
import Pensionery from "./articles/Pensionery.jsx";
import Phone from "./articles/Phone.jsx";
import PhoneDanger from "./articles/PhoneDanger.jsx";
import Plane from "./articles/Plane.jsx";
import Pogreb from "./articles/Pogreb.jsx";
import Posadka from "./articles/Posadka.jsx";
import Pugacheva from "./articles/Pugacheva.jsx";
import Pylisos from "./articles/Pylisos.jsx";
import Rings from "./articles/Rings.jsx";
import School from "./articles/School.jsx";
import SpeedCar from "./articles/SpeedCar.jsx";
import Spoiler from "./articles/Spoiler.jsx";
import Sssr from "./articles/Sssr.jsx";
import TeaMoosh from "./articles/TeaMoosh.jsx";
import Volochkova from "./articles/Volochkova.jsx";
import Volos from "./articles/Volos.jsx";
import Vznosy from "./articles/Vznosy.jsx";
import Wasp from "./articles/Wasp.jsx";



const InnerApp = () => {
  const location = useLocation();
  const routes = [
    { path: '/', component: MainPage },
    { path: '/shark', component: Shark },
    { path: '/appleTree', component: AppleTree },
    { path: '/blockPensi', component: BlockPensi },
    { path: '/ChillSea', component: ChillSea },
    { path: '/ClearGubka', component: ClearGubka },
    { path: '/Error', component: Error },
    { path: '/Evrey', component: Evrey },
    { path: '/Germany', component: Germany },
    { path: '/Gubka', component: Gubka },
    { path: '/Mask', component: Mask },
    { path: '/Nusha', component: Nusha },
    { path: '/Pensionery', component: Pensionery },
    { path: '/Phone', component: Phone },
    { path: '/PhoneDanger', component: PhoneDanger },
    { path: '/Plane', component: Plane },
    { path: '/Pogreb', component: Pogreb },
    { path: '/Posadka', component: Posadka },
    { path: '/Pugacheva', component: Pugacheva },
    { path: '/Pylisos', component: Pylisos },
    { path: '/Rings', component: Rings },
    { path: '/School', component: School },
    { path: '/SpeedCar', component: SpeedCar },
    { path: '/Spoiler', component: Spoiler },
    { path: '/Sssr', component: Sssr },
    { path: '/TeaMoosh', component: TeaMoosh },
    { path: '/Volochkova', component: Volochkova },
    { path: '/Volos', component: Volos },
    { path: '/Vznosy', component: Vznosy },
    { path: '/Wasp', component: Wasp },
    { path: '/', component: MainPage }
  ];

  const exceptionalRoutes = [
    '/shark',
    '/appleTree',
    '/blockPensi',
    '/ChillSea',
    '/ClearGubka',
    '/Error',
    '/Evrey',
    '/Germany',
    '/Gubka',
    '/Mask',
    '/Nusha',
    '/Pensionery',
    '/Phone',
    '/PhoneDanger',
    '/Plane',
    '/Pogreb',
    '/Posadka',
    '/Pugacheva',
    '/Pylisos',
    '/Rings',
    '/School',
    '/SpeedCar',
    '/Spoiler',
    '/Sssr',
    '/TeaMoosh',
    '/Volochkova',
    '/Volos',
    '/Vznosy',
    '/Wasp'
  ];

  const isExceptionalRoute = exceptionalRoutes.includes(location.pathname);

  return (
    <div>
      { !isExceptionalRoute && <Header /> }
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      { !isExceptionalRoute && (
        <>
          <LifeStyle />
          <Society />
          <HomeAndGarden />
          <Health />
          <Technic />
          <ShowBusiness />
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
}

export default App
