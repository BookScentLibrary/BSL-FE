import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import SignUp from "./components/user/Signup";
import SignIn from "./components/user/SignIn";
import SearchMain from "./components/search/searchMain";
import ReviewListPage from "./pages/review/ReviewListPage";
import ReviewWritePage from "./pages/review/ReviewWritePage";
import NewsPartMain from "./pages/newspart/NewsPartMain";
import BookMenuMain from "./pages/book/BookMenuMain";
import ProgramListPage from "./pages/program/ProgramListPage";
import ProgramForm from "./pages/program/ProgramForm";

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
    path: "/signUp",
    element: SignUp,
  },
  {
    path: "/signIn",
    element: SignIn,
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
  },
  {
    path: "/book",
    element: BookMenuMain,
  },
  {
    path: "/book/detail",
    element: BookMenuMain,
  },
  {
    path: "news/programList",
    element: ProgramListPage,
  },
  {
    path: "news/programForm",
    element: ProgramForm,
  },
];
