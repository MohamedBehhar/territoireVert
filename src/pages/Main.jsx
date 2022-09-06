import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';

import React from 'react'

const Main = () => {
  return (
	<div>
		<Navbar />
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
	</div>
  )
}

export default Main