import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "../apis/book";

//책 목록의 상태 정의
export const initialState = {
  book: {},
  rate: {},
  reader: [],
  review: [],
  recommend: [],
  searchResults: [],
};

//책과 관련된 액션 정의
export const searchBookAPI = createAsyncThunk(
  "book/search",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.searchBook(data);
      console.log("searchAPI response : ", response);
    } catch (error) {
      console.log("searchAPI : error response", error.response.data);
    }
  }
);

//북 서치
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

      console.log("searchAPI response : ", response);
      console.log("searchAPI response.data : ", searchResults);
    } catch (error) {
      console.log("searchAPI : error response", error.response.data);
    }
  }
);

//사서 추천 도서 글 등록
export const BookRecommendAPI = createAsyncThunk(
  "admin/recommendCreate",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.bookRecommendAPI(data);
      console.log(response.data);
      thunkAPI.dispatch(
        bookSlice.actions.setSelectedBookRecommend(response.data)
      );
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

//리뷰 등록
export const BookReivewAPI = createAsyncThunk(
  "news/reviewWrite",
  async (data, thunkAPI) => {
    try {
    console.log("Ddddd",data.isbn)

      const response = await bookAPI.BookReivewAPI(data);
      console.log(response.data);
      thunkAPI.dispatch(
        bookSlice.actions.setSelectedBookRecommend(response.data)
      );
      window.location.replace("/news/reviewList");
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

export const getBookAPI = createAsyncThunk(
  "book/getBook",
  async (bookNo, thunkAPI) => {
    try {
      const response = await bookAPI.getBook(bookNo);
      console.log(response.data);
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
      if (
        teens === 0 ||
        twenteies === 0 ||
        thirties === 0 ||
        forties === 0 ||
        fifties === 0 ||
        seniors === 0
      ) {
        const data = [
          {
            m: 0 + "%",
            f: 0 + "%",
          },
          {
            m: 0 + "%",
            f: 0 + "%",
          },
          {
            m: 0 + "%",
            f: 0 + "%",
          },
          {
            m: 0 + "%",
            f: 0 + "%",
          },
          {
            m: 0 + "%",
            f: 0 + "%",
          },
          {
            m: 0 + "%",
            f: 0 + "%",
          },
        ];
        thunkAPI.dispatch(bookSlice.actions.readerData(data));
      } else {
        const data = [
          {
            m: Math.round((response.data.m_10 / teens) * 100) + "%",
            f: Math.round((response.data.f_10 / teens) * 100) + "%",
          },
          {
            m: Math.round((response.data.m_20 / twenteies) * 100) + "%",
            f: Math.round((response.data.f_20 / twenteies) * 100) + "%",
          },
          {
            m: Math.round((response.data.m_30 / thirties) * 100) + "%",
            f: Math.round((response.data.f_30 / thirties) * 100) + "%",
          },
          {
            m: Math.round((response.data.m_40 / forties) * 100) + "%",
            f: Math.round((response.data.f_40 / forties) * 100) + "%",
          },
          {
            m: Math.round((response.data.m_50 / fifties) * 100) + "%",
            f: Math.round((response.data.f_50 / fifties) * 100) + "%",
          },
          {
            m: Math.round((response.data.m_senior / seniors) * 100) + "%",
            f: Math.round((response.data.f_senior / seniors) * 100) + "%",
          },
        ];

        thunkAPI.dispatch(bookSlice.actions.readerData(data));
      }
    } catch (error) {
      console.error("readerDataAPI - error response : ", error.response.data);
    }
  }
);

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

      if (allCount === 0 && allPoint === 0) {
        const data = {
          avg: 0,
          p1: 0,
          p2: 0,
          p3: 0,
          p4: 0,
          p5: 0,
        };
        thunkAPI.dispatch(bookSlice.actions.ratingData(data));
      } else {
        const data = {
          avg: avg.toFixed(1),
          p1: Math.round((response.data.point_1 / allCount) * 100) + "%",
          p2: Math.round((response.data.point_2 / allCount) * 100) + "%",
          p3: Math.round((response.data.point_3 / allCount) * 100) + "%",
          p4: Math.round((response.data.point_4 / allCount) * 100) + "%",
          p5: Math.round((response.data.point_5 / allCount) * 100) + "%",
        };
        thunkAPI.dispatch(bookSlice.actions.ratingData(data));
      }
    } catch (error) {
      console.error("readerDataAPI - error response : ", error.response.data);
    }
  }
);

export const getSelectedBookReviewAPI = createAsyncThunk(
  "book/getSelectedBookReview",
  async (bookNo, thunkAPI) => {
    try {
      // const response = await bookAPI.getSelectedBookReview(bookNo);
      const response = {
        data: [
          {
            rev_postId: 1,
            nickname: "닉네임1",
            postTitle: "첫번째 리뷰",
            content: "첫번째 리뷰 내용",
            createdAt: "2023-10-02 12:00:00",
            rate: 4,
          },
          {
            rev_postId: 2,
            nickname: "닉네임2",
            postTitle: "두번째 리뷰",
            content: "두번째 리뷰 내용",
            createdAt: "2023-10-02 12:00:00",
            rate: 5,
          },
          {
            rev_postId: 3,
            nickname: "닉네임3",
            postTitle: "세번째 리뷰",
            content:
              "봐, 여기서 네가 웃는 장면이 하이라이트니까 사진으로도 담아낼 수 없는 몹시도 사소한 그 행동거지에 그 어떤 어두운 스토리도 뒤집어 놓는 순간이 흘러넘치고 있어 어딘가 하나를 잘라서 썸네일로 하자 급한 대로 지금은 말이야",
            createdAt: "2023-10-02 12:00:00",
            rate: 2,
          },
          {
            rev_postId: 4,
            nickname: "닉네임4",
            postTitle: "네번째 리뷰",
            content: "네번째 리뷰 내용",
            createdAt: "2023-10-02 12:00:00",
            rate: 5,
          },
          {
            rev_postId: 5,
            nickname: "닉네임5",
            postTitle: "다섯번째 리뷰",
            content: "다섯번째 리뷰 내용",
            createdAt: "2023-10-02 12:00:00",
            rate: 3,
          },
        ],
      };
      console.log(response.data);
      thunkAPI.dispatch(bookSlice.actions.setSelectedBookReview(response.data));
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
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
  },
});
