import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    id: 0,
    content: "",
    date: Date.now(),
    articleId: 0,
    comments: [],
  },
  reducers: {
    registerComment: (state, {payload: comment}) => {
      console.log("댓글 등록 액션 호출 -- registerComment");
    },
    getCommentAsync: (state, {payload: list}) => {
      return {
        ...state,
        comments: list,
      };
    },
  },
});


export const commentReducers = commentSlice.reducer;
export const commentActions = commentSlice.actions;