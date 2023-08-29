'use client'

import React from 'react';
import useStore from './useStore';

const ComponentB = () => {
  const selectedData = useStore((state) => state.selectedData);

  return (
    <>
      <h2>Component B</h2>
      <ul>
        {selectedData.map((item, index) => (
          <li key={index}>{item.subjectName}</li>
        ))}
      </ul>
    </>
  );
};

export default ComponentB;
