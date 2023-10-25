import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugSaucer,
  faHardDrive,
  faSearch,
  faDharmachakra,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [machine, setMachine] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/list", { state: { machine, date } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faMugSaucer} />
            <span>Ceramics</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHardDrive} />
            <span>Kiln</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faDharmachakra} />
            <span>Pottery Wheel</span>
          </div>
        </div>
        {type !== "list" && (
          <>
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
                  onChange={(e) => setMachine(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
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
                    className="datepicker"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <button
                  className="headerButton button-7 Search"
                  onClick={()=>handleSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
