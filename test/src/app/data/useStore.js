import { create } from "zustand";

const useStore = create((set) => ({
  subjects: null,
  addSubjects: (data) => {
    set((state) => ({
      subjects: data
    }));
  }
}));

export default useStore;
