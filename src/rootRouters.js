import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";

import BookMenuMain from "./pages/book/BookMenuMain";
import NewsPartMain from "./pages/newspart/NewsPartMain";

import SignUp from "./components/user/Signup";
import SignIn from "./components/user/SignIn";
import UserList from "./components/user/UserList";

import SearchMain from "./components/search/searchMain";

import NoticeWritePage from "./pages/notice/NoticeWritePage";
import NoticeDetailPage from "./pages/notice/NoticeDetailPage";
import NoticeEditPage from "./pages/notice/NoticeEditPage";

import ReviewWritePage from "./pages/review/ReviewWritePage";
import ReviewDetailPage from "./pages/review/ReviewDetailPage";
import ReviewEditPage from "./pages/review/ReviewEditPage";

import ProgramDetail from "./pages/program/ProgramDetail";
import ProgramForm from "./pages/program/ProgramForm";

import RecommendWrite from "./components/recommend/RecommendWrite";
import RecommendDetail from "./components/recommend/RecommendDetail";
import RecommendUpdate from "./components/recommend/RecommendUpdate";
import MyPage from "./pages/mypage/MyPage";
import BestSeller from "./components/bestBookPage/BestSeller";

import NewBookList from "./components/newBook/NewBookDetail"

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
    path: "/book",
    element: BookMenuMain,
  },
  {
    path: "/news",
    element: NewsPartMain,
  },
  // 사용자 관련
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
  // 공지사항
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
  // 리뷰
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
  // 도서 관련 - 검색
  {
    path: "/search",
    element: SearchMain,
  },
  // 도서 관련 - 상세 페이지
  {
    path: "/book/detail/:bookNo",
    element: BookMenuMain,
  },
  // 프로그램 안내
  {
    path: "/news/programList",
    element: NewsPartMain,
  },
  {
    path: "/news/programForm",
    element: ProgramForm,
  },
  {
    path: "/news/program/detail/:postId",
    element: ProgramDetail,
  },
  // 사서 추천 도서
  {
    path: "/user/recommendList",
    element: BookMenuMain,
  },
  {
    path: "/admin/recommendCreate",
    element: RecommendWrite,
  },
  {
    path: "/user/recommendDetail/:recPostId",
    element: BookMenuMain,
  },
  {
    path: "/admin/recommendUpdate/:recPostId",
    element: RecommendUpdate,
  },
  //마이페이지
  {
    path: "/user/mypage",
    element: MyPage,
  },
  {
    path: "/user/mypage/cart",
    element: MyPage,
  },
  {
    path: "/user/mypage/history",
    element: MyPage,
  },
  {
    path: "/user/mypage/rent",
    element: MyPage,
  },
  {
    path: "/user/mypage/review",
    element: MyPage,
  },
  {
    path: "/user/mypage/hope",
    element: MyPage,
  },
  //인기도서 페이지
  {
    path: "/book/bestseller",
    element: BookMenuMain,
  },
  {
    path: "/book/newbook",
    element: NewBookList,
  },
];
