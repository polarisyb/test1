'use client'

import { create } from 'zustand';
import './page.css';

const useStore = create((set) => ({
  theme: 'light',
  nuts: 'nuts',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
  nutsChange: () => set((state) => ({
    nuts: state.nuts === 'nuts' ? 'honey' : 'nuts'
  })),
}));

const page = () => {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);
  console.log(theme);

  const nuts = useStore((state) => state.nuts);
  const nutsChange = useStore((state) => state.nutsChange);
  console.log(nuts);
/*
  리액트는 상태 값이 변화하면 컴포넌트를 리렌더링 한다.
  때문에 nuts 상태 값이 변하지 않아도 theme 상태 값이 변하면 컴포넌트가 리렌더링 되고
  콘솔 창에 nuts가 출력 된다.
  같은 이유로 theme 상태 값이 변하지 않아도 nuts 상태 값이 변하면 콘솔 창에 theme 가 출력 된다.
*/

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Nuts : {nuts}</p>
      <button onClick={nutsChange}>Nuts Change</button>
    </div>
  );
};

export default page;