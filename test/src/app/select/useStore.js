import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  selectedData: [],
  fetchData: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    set({ data });
  },
  toggleSelect: (index) => {
    set((state) => {
      const newData = [...state.data.org_subinfoList];
      newData[index].selected = !newData[index].selected;

      return { data: { ...state.data, subinfoList: newData } };
    });
  },
  // setSelectedData: () => {
  //   set((state) => ({
  //     selectedData: state.data.org_subinfoList.filter(item => item.selected)
  //   }));
  //   console.log(selectedData)
  // },
  /* updateSelectedData: (newSelectedData) => {
    set({ selectedData: newSelectedData });
    newSelectedData.forEach((item) => {
      console.log(`subjectName: ${item.subjectName}`);
    });
  } */
  updateSelectedData: (newSelectedData) => {
    if (!newSelectedData || newSelectedData.length === 0) {
      console.log("가져온 항목이 없음");
    } else {
      set({ selectedData: newSelectedData });
    newSelectedData.forEach((item) => {
      console.log(`subjectName: ${item.subjectName}`);
    });
    }
  }
}));

export default useStore;