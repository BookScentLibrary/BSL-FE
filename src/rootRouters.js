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
import UserList from "./components/user/UserList";
import BookRecommend from "./components/book/BookRecommend";

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
    path: "/news/noticeList",
    element: NoticeListPage,
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
    element: ReviewListPage,
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
    path: "/book/recommend",
    element: BookRecommend,
  },
];
