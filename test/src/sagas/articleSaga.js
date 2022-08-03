import { articleActions } from "../slice/articleSlice";
import {call, put} from "redux-saga/effects";
import Axios from "axios";
import history from "../utils/history";

export function* deleteArticleAsync(action){
  const id = action.payload;

  yield Axios.delete(`http://localhost:3001/board/${id}`);

  alert("삭제되었습니다.");
  history.push(`/`);

  history.go(0) // 새로고침
}

export function* updateArticleAsync(action){
  const article = action.payload;

  const response = yield Axios.put(
    `http://localhost:3001/board/${article.id}`,
    article
  );

  alert("수정되었습니다.");

  history.push(`/article/${response.data.id}`, response.data.id);
}

export function* fetchArticleAsync(action){
  const id = action.payload;

  const response = yield Axios.get(`http://localhost:3001/board/${id}`);

  yield put(articleActions.getArticleAsync(response.data));
}

export function* getArticleAsync(action){
  const id = action.payload;

  const response = yield Axios.get(`http://localhost:3001/board/${id}`);

  const request = yield Axios.put(`http://localhost:3001/board/${id}`, {
    ...response.data,
    views: parseInt(response.data.views) + 1,
  });

  yield put(articleActions.getArticleAsync(request.data));
}

export function* registerArticleAsync(action){
  const data = action.payload;

  const response = yield Axios.post(`http://localhost:3001/board/`, data);

  alert("저장되었습니다.");

  history.push(`/article/${response.data.id}`, response.data.id);
}