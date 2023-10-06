import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import Signup from "./components/user/Signup";
import SearchMain from "./components/search/searchMain";
import ReviewListPage from "./pages/review/ReviewListPage";
import ReviewWritePage from "./pages/review/ReviewWritePage";
import NewsPartMain from "./pages/newspart/NewsPartMain";

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
    path: "/news",
    element: NewsPartMain,
  },
  {
    path: "/signup",
    element: Signup,
  },
  {
    path: "news/reviewList",
    element: ReviewListPage,
  },
  {
    path: "news/reviewWrite",
    element: ReviewWritePage,
  },
  {
    path:"/search",
    element: SearchMain
  }
];
