import "./HotelBooking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import GuestSelector from "./GuestSelector";
import PaymentForm from "./PaymentSystem";
import basket from "../../Assets/basket.png";
import receipt from "../../Assets/receipt.png";
import profile from "../../Assets/ProfileIcon.JPG";
import line from "../../Assets/line.png";

const HotelBooking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (date && date < startDate) {
      setStartDate(null);
    }
  };

  return (
    <div>
      <div className="booking-container">
        <h1>Hotel Booking</h1>
        <div class="booking-steps">
          <div class="step">
            <img className="icon" src={profile} height={50}/>
            <span class="label">Login</span>
          </div>
          <div class="step">
            <img className="icon" src={receipt} height={50}/>
            <span class="label">Fill in admission</span>
          </div>
          <div class="step">
            <img className="icon" src={basket} height={50}/>
            <span class="label">Checkout</span>
          </div>
        </div>
        <h3>Select Start and End Dates:</h3>

        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Start Date"
          minDate={new Date()}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="End Date"
          minDate={startDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
        <GuestSelector />
        <PaymentForm />
      </div>
    </div>
  );
};

export default HotelBooking;
