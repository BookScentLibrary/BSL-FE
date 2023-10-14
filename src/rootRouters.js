import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import SignUp from "./components/user/Signup";
import SignIn from "./components/user/SignIn";
import SearchMain from "./components/search/searchMain";
import NoticeListPage from "./pages/notice/NoticeListPage";
import NoticeWritePage from "./pages/notice/NoticeWritePage";
import NoticeDetailPage from "./pages/notice/NoticeDetailPage";
import NoticeEditPage from "./pages/notice/NoticeEditPage";
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
import RecommendDetail from "./components/recommend/RecommendDetail";
import RecommendUpdate from "./components/recommend/RecommendUpdate";

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
    path: "/superAdmin/userList",
    element: UserList,
  },
  {
    path: "/news/noticeList",
    element: NewsPartMain,
  },
  {
    path: "/news/noticeDetail/:not_postId",
    element: NoticeDetailPage,
  },
  {
    path: "/news/noticeEdit/:not_postId",
    element: NoticeEditPage,
  },
  {
    path: "/news/noticeWrite",
    element: NoticeWritePage,
  },
  {
    path: "/news/reviewList",
    element: NewsPartMain,
  },
  {
    path: "/news/reviewWrite",
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
    path: "/user/recommendList",
    element: BookMenuMain,
  },
  {
    path: "/news/programList",
    element: NewsPartMain,
  },
  {
    path: "/news/programForm",
    element: ProgramForm,
  },
  {
  path: "/admin/recommendCreate",
    element: RecommendWrite,
  },
  {
    path: "/user/recommendDetail/:recPostId",
    element: RecommendDetail,
  },
  {
    path: "/admin/recommendUpdate/:recPostId",
    element: RecommendUpdate,
  },
];
