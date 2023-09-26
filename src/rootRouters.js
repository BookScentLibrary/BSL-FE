import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import SearchMain from "./components/search/searchMain";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    element: MainPage,
  },
  {
    path: "/compcat",
    element: CompCatalog,
  },
  {
    path:"/search",
    element: SearchMain
    //나중에 서치 넣어야 함. 

  }
];