import React from 'react';

import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Hero from './components/layout/Hero/Hero';
import Homepage from './components/views/Homepage/Homepage';
import Footer from './components/layout/Footer/Footer';


const App = () => (
  <MainLayout>
    <Hero title="ANNA KUSZAL" subtitle="Frontend developer" />
    <Homepage />
    <Footer copy='Copyright © 2022 by Anna Kuszal.' rights='All Rights Reserved.' />
  </MainLayout>
);


export default App;
