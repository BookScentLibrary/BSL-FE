import MainPage from "./pages/MainPage";
import CompCatalog from "./pages/CompCatalog";
import Signup from "./components/user/Signup";

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
    path: "/signup",
    element: Signup,
  },
];
