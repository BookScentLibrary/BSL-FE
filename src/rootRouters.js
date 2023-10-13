import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import SignUp from "./components/user/Signup";
import SignIn from "./components/user/SignIn";
import SearchMain from "./components/search/searchMain";
import ReviewListPage from "./pages/review/ReviewListPage";
import ReviewWritePage from "./pages/review/ReviewWritePage";
import ReviewDetailPage from "./pages/review/ReviewDetailPage";
import ReviewEditPage from "./pages/review/ReviewEditPage";
import NewsPartMain from "./pages/newspart/NewsPartMain";
import BookMenuMain from "./pages/book/BookMenuMain";
import ProgramListPage from "./pages/program/ProgramListPage";
import ProgramForm from "./pages/program/ProgramForm";
import UserList from "./components/user/UserList";
import RecommendList from "./components/recommend/RecommendList";
import RecommendWrite from "./components/recommend/RecommendWrite";

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
    path: "superAdmin/userList",
    element: UserList,
  },
  {
    path: "news/reviewList",
    element: NewsPartMain,
  },
  {
    path: "news/reviewWrite",
    element: ReviewWritePage,
  },
  {
    path: "/news/reviewDetail/:rev_postId",
    element: ReviewDetailPage,
  },
  {
    path: "/news/reviewEdit/:rev_postId",
    element: ReviewEditPage,
  },
  {
    path: "/search",
    element: SearchMain,
  },
  {
    path: "/book",
    element: BookMenuMain,
  },
  {
    path: "/book/detail/:bookNo",
    element: BookMenuMain,
  },
  {
    path: "/book/recommendList",
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
  {
    path: "/admin/createRecommend",
    element: RecommendWrite,
  },
];
