import "./results.css";
import React from 'react'

const Results = () => {
  return (
    <div className="searchItem">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Full Kiln</h1>
      <span className="siDet1">5 Plates</span>
      <span className="siDet2">Maximum Storage </span>
      <span className="siSubtitle">
        In-house Ceramic Studio with Additional Raw Materials
      </span>
      <span className="siFeatures">
        Studio • Pottery Wheel • Workstation
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        Check Availability
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">5000/-</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availability</button>
      </div>
    </div>
  </div>
  )
}

export default Results