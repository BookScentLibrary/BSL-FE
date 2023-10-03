import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import Signup from "./components/user/Signup";
import SearchMain from "./components/search/searchMain";
import ReviewListPage from "./pages/review/ReviewListPage";
import NewsPartMain from "./pages/newspart/NewsPartMain";
import BookMenuMain from "./pages/book/BookMenuMain";

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
    path: "/reviewList",
    element: ReviewListPage,
  },
  {
    path: "/search",
    element: SearchMain,
  },
  {
    path: "/book",
    element: BookMenuMain,
  },
];
