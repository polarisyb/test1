'use client'

import React, { useEffect } from 'react';
import useStore from './useStore';

const ComponentA = () => {
  const data = useStore((state) => state.data);
  const toggleSelect = useStore((state) => state.toggleSelect);

  if (!data || !data.org_subinfoList) {
    return <p>Loading...</p>;
  }

  const handleCheckboxChange = (index) => {
    toggleSelect(index);
  };

  return (
    <>
      <h2>Component A</h2>
      <ul>
        {data.org_subinfoList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.selected || false}
              onChange={() => handleCheckboxChange(index)}
            />
            {item.subjectName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComponentA;
