import "./App.css";
import Home from "./page/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./layout/rootLayout";
import Details from "./page/details/Details";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    document.body.dataset.themeDarkMode = isDarkMode.toString();
  }, [isDarkMode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/:countryCode" element={<Details />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
