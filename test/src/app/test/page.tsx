'use client'

import React from 'react';
import { create } from 'zustand';

const useStore1 = create((set) => ({
  // 변수
  BookCount: 0,
  CardCount: 0,

  // 함수
  DecreaseBookCount: () => {
    set((state) => ({
      BookCount: state.BookCount - 1
    }));
  },
  IncreaseCardCount: () => {
    set((state) => ({
      CardCount: state.CardCount + 2
    }));
  },
}));

const useStore2 = create((set) => ({
  // 변수
  PenCount: 0,

  // 함수
  IncreasePenCount: () => {
    set((state) => ({
      PenCount: state.PenCount + 1
    }));
  },
  DecreasePenCount: () => {
    set((state) => ({
      PenCount: state.PenCount - 1
    }));
  },
}));

const Book = () =>  {
  // 구조 분해 할당을 통해 가져오는 방법
  const {BookCount, DecreaseBookCount} = useStore1();
  return (
    <>
      <div>Book {BookCount}</div>
      <br/>
      <button onClick={() => {
        DecreaseBookCount();
        // useStore.setState({ BookCount : BookCount -1})
        console.log(`BookCount ${BookCount}`);
      }} style={{width: '100px', height: '50px'}}>
        Book -1
      </button>
    </>
  );
};

const Card = () => {
  // 구조 분해 할당을 통해 가져오는 방법
  const {CardCount, IncreaseCardCount} = useStore1();
  return (
    <>
      <div>Card {CardCount}</div>
      <br/>
      <button onClick={() => {
        IncreaseCardCount();
        // useStore.setState({ CardCount: CardCount + 2})
        console.log(`CardCount : ${CardCount}`);
      }} style={{width: '100px', height: '50px'}}>
        Card + 2
      </button>
    </>
  );
};

const Pen = () => {
  const {PenCount, IncreasePenCount, DecreasePenCount} = useStore2();
  return (
    <>
      <div>Pen {PenCount}</div>
      <br/>
      <button onClick={() => {
        IncreasePenCount();
        console.log(`PenCount : ${PenCount}`);
      }} style={{width: '100px', height: '50px'}}>
        Pen + 1
      </button>
      <br/>
      <button onClick={() => {
        DecreasePenCount();
        console.log(`PenCount : ${PenCount}`);
      }} style={{width: '100px', height: '50px'}}>
        Pen - 1
      </button>
    </>
  );
};

const page = () => {
  
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Book></Book>
      
      <br/>
      <br/>

      <Card></Card>
      
      <br/>
      <br/>

      <Pen></Pen>
    </div>
  );
};

export default page;