'use client'

import React, { useState } from 'react';
import useStore from './useStore';

const ComponentB = () => {
  const selectedData = useStore((state) => state.selectedData);
  const toggleAllSelect = useStore((state) => state.toggleAllSelect);
  const toggleSelect = useStore((state) => state.toggleSelect);

  const [selectAll, setSelectAll] = useState(false);

  const handleToggleAllSelect = () => {
    toggleAllSelect(!selectAll);
    setSelectAll(!selectAll);
  };

  return (
    <>
      <h2>Component B</h2>
      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleToggleAllSelect}
        />
        전체 선택
      </label>
      <ul>
        {selectedData.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.selected || false}
              onChange={() => toggleSelect(index)}
            />
            {item.subjectName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComponentB;
