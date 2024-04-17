import React, { useState } from 'react';

const PaymentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [postalCode, setPostalCode] = useState('');

  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    const formattedValue = cleanedValue.replace(/(\d{4})/g, '$1 ').trim();
    return formattedValue;
  };

  const isValidExpiryDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) return false;

    const [month, year] = value.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (parseInt(year) < currentYear) return false;
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth) return false;

    return true;
  };

  const isValidCvc = (value) => {
    const regex = /^\d{3,4}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidExpiryDate(expiryDate) || !isValidCvc(cvc)) {
      // Show an error message
      return;
    }

    try {
      const response = await fetch('/api/processPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          cardNumber,
          expiryDate,
          cvc,
          country,
          postalCode,
        }),
      });

      if (response.ok) {
        // Payment successful
        console.log('Payment successful');
      } else {
        // Payment failed
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={formatCardNumber(cardNumber)}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
          required
        />
        <div>
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
        </div>
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          maxLength={5}
          required
          pattern="\d\d/\d\d"
          title="Enter a valid expiry date in the format MM/YY"
          onBlur={(e) => {
            if (!isValidExpiryDate(e.target.value)) {
              // Show an error message or perform any necessary action
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength={4}
          required
          pattern="\d{3,4}"
          title="Enter a 3 or 4-digit CVC code"
          onBlur={(e) => {
            if (!isValidCvc(e.target.value)) {
              // Show an error message or perform any necessary action
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="United Kingdom">United Kingdom</option>
          {/* Add more country options if needed */}
        </select>
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default PaymentForm;