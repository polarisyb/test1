import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  selectedData: [],
  selectAll: false,
  fetchData: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    set({ data });
  },
  toggleSelect: (index) => {
    set((state) => {
      const newData = [...state.data.org_subinfoList];
      newData[index].selected = !newData[index].selected;

      return { data: { ...state.data, org_subinfoList: newData } };
    });
  },
  toggleAllSelect: (selectAll) => {
    set({ selectAll });
    set((state) => {
      const newData = state.data.org_subinfoList.map(item => ({
        ...item,
        selected: selectAll
      }));

      return { data: { ...state.data, org_subinfoList: newData } };
    });
  },
  setSelectedData: () => {
    set((state) => ({
      selectedData: state.data.org_subinfoList.filter(item => item.selected)
    }));
  },
  updateSelectedData: (newSelectedData) => {
    set((state) => ({
      selectedData: newSelectedData
    }));
    newSelectedData.forEach((item) => {
      console.log(`subjectName: ${item.subjectName}`);
    });
  }
}));

export default useStore;


/* updateSelectedData: (newSelectedData) => {
  set({ selectedData: newSelectedData });
  newSelectedData.forEach((item) => {
    console.log(`subjectName: ${item.subjectName}`);
  });
} */