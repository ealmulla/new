import React, { useState } from 'react';

const GuestSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleAdultsChange = (operation) => {
    if (operation === 'increment' && adults < 10) {
      setAdults(adults + 1);
    } else if (operation === 'decrement' && adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (operation) => {
    if (operation === 'increment' && children < 10) {
      setChildren(children + 1);
    } else if (operation === 'decrement' && children > 0) {
      setChildren(children - 1);
    }
  };

  const handleRoomsChange = (operation) => {
    if (operation === 'increment' && rooms < 10) {
      setRooms(rooms + 1);
    } else if (operation === 'decrement' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  return (
    <div>
      <div>
        <label>Adults:</label>
        <button onClick={() => handleAdultsChange('decrement')}>-</button>
        <span>{adults}</span>
        <button onClick={() => handleAdultsChange('increment')}>+</button>
      </div>

      <div>
        <label>Children:</label>
        <button onClick={() => handleChildrenChange('decrement')}>-</button>
        <span>{children}</span>
        <button onClick={() => handleChildrenChange('increment')}>+</button>
      </div>

      <div>
        <label>Rooms:</label>
        <button onClick={() => handleRoomsChange('decrement')}>-</button>
        <span>{rooms}</span>
        <button onClick={() => handleRoomsChange('increment')}>+</button>
      </div>
    </div>
  );
};

export default GuestSelector;