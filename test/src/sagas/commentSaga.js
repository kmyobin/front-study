import Axios from "axios";
import { put } from "redux-saga/effects";
import { commentActions } from "../slice/commentSlice";
import history from "../utils/history";

export function* registerCommentAsync(action) {
  const data = action.payload;


  yield Axios.post(`http://localhost:3001/comment/`, data);

  history.go(0); // refresh
}

export function* getCommentsAsync(action){
  const articleId = action.payload;

  const response = yield Axios.get(
    `http://localhost:3001/comment?articleId=${articleId}`
  );

  yield put(commentActions.getCommentsAsync(response.data));
}