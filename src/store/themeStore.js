import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem("darkMode") === "true",

  toggleTheme: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem("darkMode", newMode);
      
      document.body.dataset.themeDarkMode = newMode.toString();
      return { isDarkMode: newMode };
    });
  },
}));
