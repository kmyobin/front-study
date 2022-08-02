import { take, takeEvery, takeLatest } from "redux-saga/effects";
import { articleActions } from "../slice/articleSlice";
import { fetchArticleAsync, getArticleAsync, registerArticleAsync, updateArticleAsync, deleteArticleAsync } from "./articleSaga";
import { boardActions } from "../slice/boardSlice";
import { getBoardAsync } from "./boardSaga";

const { registerArticle, getArticle, fetchArticle, updateArticle, deleteArticle } = articleActions;
const {getBoard} = boardActions;

export default function* rootWatcher() {
  yield takeLatest(registerArticle.type, registerArticleAsync);
  yield takeEvery(getArticle.type, getArticleAsync);
  yield takeEvery(getBoard.type, getBoardAsync);
  yield takeEvery(fetchArticle.type, fetchArticleAsync);
  yield takeLatest(updateArticle.type, updateArticleAsync);
  yield takeLatest(deleteArticle.type, deleteArticleAsync);
}