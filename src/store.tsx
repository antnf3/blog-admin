// import {
//   configureStore,
//   PayloadAction,
//   createSlice,
//   createStore,
// } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const FETCH_JOB_INFO = "FETCH_JOB_INFO";

export interface JobState {
  JOB_ID: string;
  COUPANG_ID: string;
  SUB_ID: string;
  TOKEN_SEQ: number;
  TOKEN_NM: string;
  BLOG_TYPE: string;
  BLOG_TYPE_NM: string;
  BLOG_NM: string;
  BLOG_CATEGORY: string;
  BLOG_CATEGORY_NM: string;
  PRODUCT_ID: string;
  PRODUCT_NM: string;
  PD_OPT: string;
  DAILY_LIMIT_CNT: number;
  DAILY_INTERVAL_MM: number;
  USE_YN: string;
}
// const initialJobState: JobState[] = [
//   {
//     JOB_ID: "123",
//     COUPANG_ID: "2323",
//     SUB_ID: "ANDERSON",
//     TOKEN_SEQ: 7,
//     TOKEN_NM: "",
//     BLOG_TYPE: "6",
//     BLOG_TYPE_NM: "쇼핑2",
//     BLOG_NM: "네이버",
//     BLOG_CATEGORY: "ㅇㄴㄹㄴ",
//     BLOG_CATEGORY_NM: "33342",
//     PRODUCT_ID: "4523423424",
//     PRODUCT_NM: "국내쇼핑",
//     PD_OPT: "1022",
//     DAILY_LIMIT_CNT: 200,
//     DAILY_INTERVAL_MM: 10,
//     USE_YN: "Y",
//   },
//   {
//     JOB_ID: "1234",
//     COUPANG_ID: "2323",
//     SUB_ID: "ANDERSON",
//     TOKEN_SEQ: 7,
//     TOKEN_NM: "",
//     BLOG_TYPE: "6",
//     BLOG_TYPE_NM: "쇼핑2",
//     BLOG_NM: "네이버",
//     BLOG_CATEGORY: "ㅇㄴㄹㄴ",
//     BLOG_CATEGORY_NM: "33342",
//     PRODUCT_ID: "4523423424",
//     PRODUCT_NM: "국내쇼핑",
//     PD_OPT: "1022",
//     DAILY_LIMIT_CNT: 200,
//     DAILY_INTERVAL_MM: 10,
//     USE_YN: "Y",
//   },
// ];

// // createSlice
// const toDos = createSlice({
//   name: "jobReducer",
//   initialState: initialJobState,
//   reducers: {
//     add: (state: JobState[], action: PayloadAction<string>) => [...state],
//     remove: (state: JobState[], action: PayloadAction<number>) => [...state],
//   },
// });

// const store = configureStore({ reducer: toDos.reducer });
// // export { addToDo, deleteToDo };

// export const { add, remove } = toDos.actions;
// export default store;

const QUERY = "QUERY";
const QUERY_STARTED = "QUERY_STARTED";
const QUERY_SUCCESS = "QUERY_SUCCESS";
const QUERY_FAILURE = "QUERY_FAILURE";

interface ParamsProps {
  mapFile: string;
  inData: {} | [];
}
export const query = (params?: ParamsProps) => {
  return async (dispatch: any) => {
    dispatch(queryStarted());
    try {
      const res = await axios.request({
        method: "post",
        url: `http://localhost:8000/home`,
        data: params,
      });
      return dispatch(querySuccess(res));
    } catch (err) {
      return dispatch(queryFailure(err));
    }
  };
};
const queryStarted = () => ({ type: QUERY_STARTED });
const querySuccess = (res: any) => ({
  type: QUERY_SUCCESS,
  payload: { data: res.data },
});
const queryFailure = (error: any) => ({
  type: QUERY_FAILURE,
  payload: { error },
});

const init = {
  loading: false,
  arrList: {},
  error: null,
};
const axiosReducer = (state = init, action: any) => {
  switch (action.type) {
    case QUERY:
      return action.payload;
    case QUERY_STARTED:
      return {
        ...state,
        loading: true,
      };
    case QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        arrList: action.payload,
      };
    case QUERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
  }
};
const axiosStore = createStore(axiosReducer, applyMiddleware(thunk));

export default axiosStore;
