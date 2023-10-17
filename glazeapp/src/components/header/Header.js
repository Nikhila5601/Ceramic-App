import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faHardDrive, faSearch, faCalendarDays } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import "./header.css";

const Header = () => {
  const [ date,setDate ] = useState([]);
  return (
    <>
      <div className="header">
        <div className="headerContai">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faMugSaucer} />
              <span>Ceramics</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faHardDrive} />
              <span>Kiln</span>
            </div>
          </div>

          <h1 className="headerTitle">
            Elevate Your Craft with Our Ceramic Machine Rentals
          </h1>
          <p className="headerDesc">
            Fuel your craft with our premium ceramic machine rentals, designed
            for all levels of expertise.
          </p>
          <button className="headerButton button-7">Let's Create!</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faSearch} className="headerIcon" />
              <input
                className="headerSearchInput"
                type="text"
                name="machine-type"
                id=""
                placeholder="Search Machines"
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span className="headerSearchText">Date to Date</span>
            </div>

            <div className="headerSearchItem">
             <button className="headerButton button-7 Search"> Search </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
