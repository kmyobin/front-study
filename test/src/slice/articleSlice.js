import {createSlice} from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: { 
    id: 0, 
    title: "", 
    content: "", 
    views: 0, 
    date: Date.now(),
    editDate: "",
  },
  reducers: {
    deleteArticle: (state, {payload : id}) => {
      console.log("게시글 삭제 액션 호출 -- deleteArticle");
    },

    registerArticle: (state, {payload : article}) => {
      console.log(article);
    },

    getArticle: (state, {payload: id}) => {
      console.log("게시글 조회 액션 호출 -- getArticle");
    },

    getArticleAsync: (state, {payload: article}) => {
      console.log("saga에서 put 액션 호출 -- getArticleAsync");
      return{
        ...state,
        id: article.id,
        title: article.title,
        content: article.content,
        date: article.date,
        editDate: article.editDate,
        views: article.views,
      };
    },    
    
    fetchArticle: (state, {payload: id}) => {
      console.log("게시글 조회 액션 호출 -- fetchArticle");
    },

    updateArticle: (state, {payload: article}) => {
      console.log("게시글 수정 액션 호출 -- updateArticle");
    },

    changeRegisterInput: (state, {payload}) => {
      switch(payload.name){
        case "title":
          return {
            ...state,
            title: payload.value,
          };
        case "content" :
          return {
            ...state,
            content: payload.value,
          };
        default: break;
      }
    },

  },
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;