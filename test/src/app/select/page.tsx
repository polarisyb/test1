'use client'

import React, { useState, useEffect } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import useStore from './useStore';
import './page.css';

const Page = () => {
  const fetchData = useStore((state) => state.fetchData);
  const [selectedData, setSelectedData] = useState([]);
  const updateSelectedData = useStore((state) => state.updateSelectedData);

  useEffect(() => {
    fetchData("https://careerdesigntest.azurewebsites.net/v2/api/Teacher/subjectinfo/allsubject/org");
  }, []);

  const handleGetSelectedData = () => {
    const data = useStore.getState().data;
    if (data && data.org_subinfoList) {
      const selectedItems = data.org_subinfoList.filter(item => item.selected);
  
      const existingSelectedData = useStore.getState().selectedData;
      const newSelectedItems = selectedItems.filter(
        newItem => !existingSelectedData.some(existingItem => existingItem.subjectName === newItem.subjectName)
      );
  
      const newData = {
        ...data,
        org_subinfoList: data.org_subinfoList.filter(item => !item.selected)
      };
      useStore.setState({ data: newData });
      
      if (newSelectedItems.length > 0) {
        const updatedSelectedData = [...existingSelectedData, ...newSelectedItems];
        updateSelectedData(updatedSelectedData);
        console.log('컴포넌트 A에서 선택한 데이터를 컴포넌트 B로 가져옴:', newSelectedItems);
      } else {
        console.log('중복된 데이터는 추가되지 않았습니다.');
      }
    }
  };

  const handleExportSelectedData = () => {
    const data = useStore.getState().data;
    if (data && data.org_subinfoList) {
      const selectedItems = data.org_subinfoList.filter(item => item.selected);
      updateSelectedData(selectedItems);
      console.log('컴포넌트 B에서 선택한 데이터를 컴포넌트 A로 내보냄:', selectedItems);
    }
  };

  return (
    <div className='page'>
      <ComponentA />
      <br />
      <button onClick={handleGetSelectedData}>컴포넌트 b로 가져오기</button>
      <button onClick={handleExportSelectedData}>컴포넌트 A로 내보내기</button>
      <br />
      <ComponentB />
    </div>
  );
};

export default Page;

