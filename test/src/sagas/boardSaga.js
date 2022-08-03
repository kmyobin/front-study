import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardActions } from "../slice/boardSlice";
import { commentActions } from "../slice/commentSlice";

export function* getBoardAsync() {
  try{
    const responseForBoard = yield Axios.get(`http://localhost:3001/board/`); // board 조회
    const responseForComment = yield Axios.get(`http://localhost:3001/comment/`); // comment 조회

    const boardData = responseForBoard.data; // board 조회 값 복사

    if(responseForComment.data.length > 0){
      for(var article in responseForBoard.data){
        const comments=[];
        for(var comment in responseForComment.data){
          // 게시물 id == 댓글의 게시글 id 같다면
          if(responseForComment.data[comment].articleId ===
            responseForBoard.data[article].id){
              comments.push(responseForComment.data[comment].id); // 배열 만듦
            }
        }
        boardData[article]["conmments"]=comments; 
      }
    }
   
    yield put(boardActions.getBoardSuccessAsync(boardData));
    yield put(commentActions.getCommentsAsync(responseForComment.data));
  }catch(e){
    yield put(boardActions.getBoardFailedAsync(e.message));
  }


}