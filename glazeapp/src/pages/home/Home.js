import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import "./home.css";
import Email from '../../components/email/Email';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (<>
    <div className="home">
    <Navbar/>
    <Header />
    <div className="homeContainer">
      <h1 className="homeTitle">
        Browse by Category
      </h1>
    <Featured />
    <Email/>
    </div>
    <Footer/>
    </div>
  </>
  )
}

export default Home