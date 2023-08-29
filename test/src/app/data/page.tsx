'use client'

import { useEffect } from 'react';
import useFetch from './useFetch';
import useStore from './useStore';

const page = () => {
  const data = useFetch("https://careerdesigntest.azurewebsites.net/v2/api/Teacher/subjectinfo/allsubject/org");
  const subjects = useStore((state) => state.subjects);
  const addSubjects = useStore((state) => state.addSubjects);

  console.log(subjects)

  useEffect(() => {
    if (data) {
      addSubjects(data);
    }
  }, [data, addSubjects]);

  return (
    <>
      <h1>Hello Zustand - subjects </h1>
      <button
        onClick={() => console.log(subjects.subinfoList)}
        style={{ position: "fixed", top: "0", right: "0" }}
      >
        Debug Log
      </button>
      <ul>
        {subjects && subjects.subinfoList.map((subject, index) => (
          <li key={index} style={{color: '#fff'}}>subjectName: {subject.subjectName}</li>
        ))}
      </ul>
    </>
  );
};

export default page;