import React,{ useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import "./error.css";
import Footer from "../../components/footer/Footer";
import json from "./error";
function ErrorPage() {
  const [randomData, setRandomData] = useState(null);
  const getRandomObject = () => {
    const randomIndex = Math.floor(Math.random() * json.length);
    return json[randomIndex];
  };
  useEffect(() => {
    setRandomData(getRandomObject());
  }, []);

  console.log(randomData?.img);

  if (!randomData) {
    return <div>Loading...</div>;
  }
  return (
<> 
    <div className="error">
      <h1 className="error-heading">{randomData?.text}</h1>
      <img src={randomData.img} alt="Error 404"/>
      <Link to="/"> 
      <button className="button-7 error-back">Go Back</button>
      </Link>
    </div>
    <Footer/>
</>
  );
}

export default ErrorPage;

