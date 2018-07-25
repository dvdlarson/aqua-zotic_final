import React, { Component } from 'react';

// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavTabs from '../NavTabs';


const App = ({ children }) => (
  <>
    {/* <Header /> */}
    <NavTabs />
    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
