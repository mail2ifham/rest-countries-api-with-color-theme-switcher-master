import { create } from "zustand";

export const useCountriesStore = create((set) => ({
  isLoading: false,
  fetchError:null,
  countries: [],
  filteredRegion: "all",
  search: "",
  countryDetails: {},
  filteredList: [],


  getFilterdList: (foundCountry) => {
    set({ filteredList: foundCountry });
  },

  setIsLoading: (bool) => {
    set({ isLoading: bool });
  },

  fetchCountries: async () => {
    set({fetchError:null, countries: [], isLoading: true });

    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) {
        throw new Error("Unable to load data");
      }
      const data = await res.json();

      set({
        countries: data.sort(
          (
            currentCountry,
            nextCountry // sorting A-Z
          ) => currentCountry.name.common.localeCompare(nextCountry.name.common)
        ),
        isLoading: false,
      });
    } catch (e) {
      console.log(e.message);
      set({fetchError:e.message,isLoading: false,countries: []})
    }
  },

  getFilterRegion: (filtered) => {
    set({ filteredRegion: filtered });
  },

  setSearch: (value) => {
    set({ search: value });
  },

  fetchCountryDetails: async (countryCode) => {
    set({ countryDetails: null, isLoading: true });

    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (!res.ok) {
        throw new Error("Unable to  load data");
      }
      const [data] = await res.json();

      set({ countryDetails: data, isLoading: false });
    } catch (e) {
      console.log(e.message);
    }
  },
}));
