'use client'

import React, { useState, useEffect } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import useStore from './useStore';
import './page.css';

const Page = () => {
  const fetchData = useStore((state) => state.fetchData);
  // const [selectedData, setSelectedData] = useState([]);
  const updateSelectedData = useStore((state) => state.updateSelectedData);

  useEffect(() => {
    fetchData("https://careerdesigntest.azurewebsites.net/v2/api/Teacher/subjectinfo/allsubject/org");
  }, []);

  const handleGetSelectedData = () => {
    const data = useStore.getState().data;
    if (data && data.org_subinfoList) {
      const selectedItems = data.org_subinfoList.filter(item => item.selected);
      // setSelectedData(selectedItems);
      updateSelectedData(selectedItems);
    }
  };

  return (
    <div className='page'>
      <ComponentA />
      <br />
      <button onClick={handleGetSelectedData}>컴포넌트 b로 가져오기</button>
      <button>컴포넌트 A로 내보내기</button>
      <br />
      <ComponentB />
    </div>
  );
};

export default Page;

