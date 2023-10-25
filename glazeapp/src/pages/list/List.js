import React, { useState,useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import Results from "../../components/result/Results";
const List = () => {
  const [openDate, setOpenDate] = useState(true);
  const location = useLocation();
  // console.log(location);
  const [isMobile,setIsmobile] = useState(false); 
  const [machine, setMachines] = useState(location?.state?.machine);
  const [date, setDate] = useState(location?.state?.date);
  
  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  const checkIfMobile = () => {
    if (window.innerWidth <= 768) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };
  return (
    <>
    
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
        <div className={`listSearch ${isMobile ? 'mobile-hidden' : ''}`}>
            <h2 className="lsTitle">Filters</h2>
            <div className="lsItem">
              <label>Machine</label>
              <input type="text" placeholder={machine} />
            </div>
            <div className="lsItem">
              <label>Booking Date</label>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "do MMM-yy")} to ${format(
                  date[0].endDate,
                  "do MMM-yy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="search-datepicker"
                  />
                )}
  
              </div>
              <button className="listSearch button-7">Search</button>
          </div>
          <div className="listResult">
                  <Results/>
                  <Results/>
                  <Results/>
                  <Results/>
                  <Results/>
                  <Results/>
                  <Results/>

          </div>
        </div>
      </div>
    </>
  );
};

export default List;
