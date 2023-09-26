import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import ReviewListPage from './pages/ReviewListPage';
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
    path: "/reviewList",
    element: ReviewListPage,
  },
  {
    path:"/search",
    element: SearchMain
  }
];