import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "../apis/book";
import { useDispatch } from "react-redux";

//책 목록의 상태 정의
export const initialState = {
  book: {},
  rate: {},
  reader: [],
  review: [],
  recommend: [],
  searchResults: [],
  search: [],
  ppBooks: [],
};

//책 검색
export const searchBookAPI = createAsyncThunk(
  "book/search",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.searchBook(data);
      thunkAPI.dispatch(bookSlice.actions.setSearchList(response.data));
    } catch (error) {
      console.log("searchAPI : error response", error.response.data);
    }
  }
);

export const ppBooksAPI = createAsyncThunk(
  "book/ppBooks",
  async (data, thunkAPI) => {
    // console.log(data);
    try {
      const response = await bookAPI.ppBook();
      thunkAPI.dispatch(bookSlice.actions.setppBookList(response.data));
    } catch (error) {
      console.log("ppBooksAPI : error response", error.response);
    }
  }
);

export const SelectBookRecommendAPI = createAsyncThunk(
  "book/search",
  async (data, thunkAPI) => {
    try {
      const { searchValue, searchType, pageNumber, pageSize } = data;
      const response = await bookAPI.selectBookRecommendAPI(
        searchValue,
        searchType,
        pageNumber,
        pageSize
      );

      const searchResults = response.data.content; // 응답에서 검색 결과를 추출합니다

      // 검색 결과를 Redux 스토어에 저장하기 위해 setSearchResults 액션을 디스패치합니다
      thunkAPI.dispatch(bookSlice.actions.setSearchResults(searchResults));

    } catch (error) {
      console.log("searchAPI : error response", error.response.data);
    }
  }
);

//리뷰 등록
export const BookReivewAPI = createAsyncThunk(
  "news/reviewWrite",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.BookReivewAPI(data);
      thunkAPI.dispatch(
        bookSlice.actions.setSelectedBookRecommend(response.data)
      );
      window.location.replace("/news/reviewList");
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

// 선택된 도서 데이터 조회
export const getBookAPI = createAsyncThunk(
  "book/getBook",
  async (bookNo, thunkAPI) => {
    try {
      const response = await bookAPI.getBook(bookNo);
      const book = {
        ...response.data,
        author: response.data.author.split(";"),
      };
      thunkAPI.dispatch(bookSlice.actions.setBook(book));
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

// 대출 데이터 조회
export const getReaderDataAPI = createAsyncThunk(
  "book/readerData",
  async (bookNo, thunkAPI) => {
    try {
      const response = await bookAPI.getReaderData(bookNo);

      const teens = response.data.m_10 + response.data.f_10;
      const twenteies = response.data.m_20 + response.data.f_20;
      const thirties = response.data.m_30 + response.data.f_30;
      const forties = response.data.m_40 + response.data.f_40;
      const fifties = response.data.m_50 + response.data.f_50;
      const seniors = response.data.m_senior + response.data.f_senior;

      const data = [
        {
          m: response.data.m_10
            ? Math.round((response.data.m_10 / teens) * 100) + "%"
            : "0%",
          f: response.data.f_10
            ? Math.round((response.data.f_10 / teens) * 100) + "%"
            : "0%",
        },
        {
          m: response.data.m_20
            ? Math.round((response.data.m_20 / twenteies) * 100) + "%"
            : "0%",
          f: response.data.f_20
            ? Math.round((response.data.f_20 / twenteies) * 100) + "%"
            : "0%",
        },
        {
          m: response.data.m_30
            ? Math.round((response.data.m_30 / thirties) * 100) + "%"
            : "0%",
          f: response.data.f_30
            ? Math.round((response.data.f_30 / thirties) * 100) + "%"
            : "0%",
        },
        {
          m: response.data.m_40
            ? Math.round((response.data.m_40 / forties) * 100) + "%"
            : "0%",
          f: response.data.f_40
            ? Math.round((response.data.f_40 / forties) * 100) + "%"
            : "0%",
        },
        {
          m: response.data.m_50
            ? Math.round((response.data.m_50 / fifties) * 100) + "%"
            : "0%",
          f: response.data.f_50
            ? Math.round((response.data.f_50 / fifties) * 100) + "%"
            : "0%",
        },
        {
          m: response.data.m_senior
            ? Math.round((response.data.m_senior / seniors) * 100) + "%"
            : "0%",
          f: response.data.f_senior
            ? Math.round((response.data.f_senior / seniors) * 100) + "%"
            : "0%",
        },
      ];

      thunkAPI.dispatch(bookSlice.actions.readerData(data));
    } catch (error) {
      console.error("readerDataAPI - error response : ", error.response.data);
    }
  }
);

// 평점 데이터 조회
export const getRatingDataAPI = createAsyncThunk(
  "book/readerData",
  async (bookNo, thunkAPI) => {
    try {
      const response = await bookAPI.getRatingData(bookNo);

      const allCount =
        response.data.point_1 +
        response.data.point_2 +
        response.data.point_3 +
        response.data.point_4 +
        response.data.point_5;
      const allPoint =
        response.data.point_1 * 1 +
        response.data.point_2 * 2 +
        response.data.point_3 * 3 +
        response.data.point_4 * 4 +
        response.data.point_5 * 5;

      const avg = Math.round(allPoint / allCount, 1);

      const data = {
        avg: avg ? avg.toFixed(1) : "0",
        p1: response.data.point_1
          ? Math.round((response.data.point_1 / allCount) * 100) + "%"
          : "0%",
        p2: response.data.point_2
          ? Math.round((response.data.point_2 / allCount) * 100) + "%"
          : "0%",
        p3: response.data.point_3
          ? Math.round((response.data.point_3 / allCount) * 100) + "%"
          : "0%",
        p4: response.data.point_4
          ? Math.round((response.data.point_4 / allCount) * 100) + "%"
          : "0%",
        p5: response.data.point_5
          ? Math.round((response.data.point_5 / allCount) * 100) + "%"
          : "0%",
      };

      thunkAPI.dispatch(bookSlice.actions.ratingData(data));
    } catch (error) {
      console.error("readerDataAPI - error response : ", error.response.data);
    }
  }
);

// 선택된 도서 관련 리뷰 조회
export const getSelectedBookReviewAPI = createAsyncThunk(
  "book/getSelectedBookReview",
  async (bookNo, thunkAPI) => {
    try {
      const response = await bookAPI.getSelectedBookReview(bookNo);
      thunkAPI.dispatch(bookSlice.actions.setSelectedBookReview(response.data));
    } catch (error) {
      console.log(
        "BOOK_GET SELECTED BOOK REVIEW : error response",
        error.response.data
      );
    }
  }
);

//사서 추천 도서 글 등록
export const BookRecommendAPI = createAsyncThunk(
  "admin/recommendCreate",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.bookRecommendAPI(data);
      thunkAPI.dispatch(
        bookSlice.actions.setSelectedBookRecommend(response.data)
      );
      window.location.replace("/user/recommendList");
    } catch (error) {
      console.log(
        "BOOK_RECOMMEND CREATE : error response",
        error.response.data
      );
    }
  }
);

export const addBookCartAPI = createAsyncThunk(
  "book/ADD_BOOK_CART",
  async (bookNo, thunkAPI) => {
    try {
      const userId = sessionStorage.getItem("userId");
      const data = {
        bookNo: bookNo,
        userId: userId,
      };
      const response = await bookAPI.addBookCart(data);
      window.alert("도서를 책바구니에 담았습니다.")
    } catch (error) {
      console.log("BOOK_ADD_BOOK_CART : error response", error.response.data);
    }
  }
);

export const bookSlice = createSlice({
  name: "bookReducer",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
      return;
    },
    readerData: (state, action) => {
      state.reader = action.payload;
      return;
    },
    ratingData: (state, action) => {
      state.rate = action.payload;
      return;
    },
    setSelectedBookReview: (state, action) => {
      state.review = action.payload;
      return;
    },
    setSelectedBookRecommend: (state, action) => {
      state.recommend = action.payload;
      return;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload; // 검색 결과를 업데이트
    },
    setSearchList: (state, action) => {
      state.search = [...state.search, action.payload];
    },
    cleanSearchList: (state, action) => {
      state.search = [];
    },
    setppBookList: (state, action) => {
      state.ppBooks = action.payload;
    },
  },
});
