import React, { useState } from 'react';

export default function Filter() {
  const [series, setSeries] = useState('StardustCrusaders');

  const handleSelect = (select) => {
    setSeries(select);
  };

  return (
    <div>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="StardustCrusaders">Stardust Crusaders</option>
        <option value="DiamondIsUnbreakable">Diamond Is Unbreakable</option>
        <option value="GoldenWind">Golden Wind</option>
      </select>
    </div>
  );
}
