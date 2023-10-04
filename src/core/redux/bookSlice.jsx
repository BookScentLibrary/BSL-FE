import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testAPI } from "../apis";
import { bookAPI } from "../apis/book";


export const initialState = {
  book: {},
  rate: {},
  reader: [],
  review: [],
};

//책과 관련된 액션 정의 
export const searchBookAPI = createAsyncThunk(
  "book/search",
  async (data, thunkAPI) => {
    try {
      const response = await bookAPI.get(
        `/search?${data.data1}&${data.data2}&${data.data3}`
      );
      console.log("searchAPI response : ", response.data);
    } catch (error) {
      console.log("searchAPI : error response", error.response.data);
    }
  }
);
export const getBookTestAPI = createAsyncThunk(
  "book/test",
  async (data, thunkAPI) => {
    try {
      const response = await testAPI.getBook();
      console.log(response.data);
      thunkAPI.dispatch(bookSlice.actions.setTestMessage(response.data));
    } catch (error) {
      console.log("testAPI : error response", error.response.data);
    }
  }
);

export const getReaderDataAPI = createAsyncThunk(
  "book/readerData",
  async (data, thunkAPI) => {
    try {
      // const response = await bookAPI.getReaderData();
      const response = {
        data: {
          m_10: 20,
          f_10: 54,
          m_20: 40,
          f_20: 46,
          m_30: 10,
          f_30: 121,
          m_40: 430,
          f_40: 21,
          m_50: 100,
          f_50: 0,
          m_senior: 0,
          f_senior: 120,
        },
      };

      const teens = response.data.m_10 + response.data.f_10;
      const twenteies = response.data.m_20 + response.data.f_20;
      const thirties = response.data.m_30 + response.data.f_30;
      const forties = response.data.m_40 + response.data.f_40;
      const fifties = response.data.m_50 + response.data.f_50;
      const seniors = response.data.m_senior + response.data.f_senior;

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
    } catch (error) {
      console.error("readerDataAPI - error response : ", error.response.data);
    }
  }
);

export const getRatingDataAPI = createAsyncThunk(
  "book/readerData",
  async (data, thunkAPI) => {
    try {
      // const response = await bookAPI.getRatingData();
      const response = {
        data: {
          point_1: 8,
          point_2: 60,
          point_3: 83,
          point_4: 72,
          point_5: 220,
        },
      };

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
        avg: avg.toFixed(1),
        p1: Math.round((response.data.point_1 / allCount) * 100) + "%",
        p2: Math.round((response.data.point_2 / allCount) * 100) + "%",
        p3: Math.round((response.data.point_3 / allCount) * 100) + "%",
        p4: Math.round((response.data.point_4 / allCount) * 100) + "%",
        p5: Math.round((response.data.point_5 / allCount) * 100) + "%",
      };

      thunkAPI.dispatch(bookSlice.actions.ratingData(data));
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
    setTestMessage: (state, action) => {
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
  },
});
