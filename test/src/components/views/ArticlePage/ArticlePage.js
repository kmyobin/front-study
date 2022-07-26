import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {articleActions} from "../../../slice/articleSlice";
import ArticleDetail from './Sections/ArticleDetail';
import {Link} from "react-router-dom";
import {Button, Typography} from "antd";
import Comment from './Sections/Comment';
import {commentActions} from "../../../slice/commentSlice";

function ArticlePage({match, location}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.getArticle(match.params.articleId));
    dispatch(commentActions.getComments(match.params.articleId)); // 댓글 목록 불러오기
  }, [match.params.articleId]);
  

  
  const {id, title, content, date} = useSelector((state) => ({
      id: state.articleReducers.id,
      title: state.articleReducers.title,
      content: state.articleReducers.content,
      date: state.articleReducers.date
    }),
    shallowEqual
  );

  const views = useSelector((state) => state.articleReducers.views);
  const comments = useSelector((state) => state.commentReducers.comments); // 
  console.log(comments);    

  const [CommentValue, setCommentValue] = useState("");

  const onCommentChange = (e) => {
    setCommentValue(e.currentTarget.value);
  };

  const onCommentSubmit = () => {
    if(
      CommentValue === "" ||
      CommentValue === null ||
      CommentValue === undefined
    ){
      alert("댓글을 입력하십시오.");
      return false;
    }

    const comment = {
      id: 0,
      content: CommentValue,
      date: Date.now(),
      articleId: id,
    };

    dispatch(commentActions.registerComment(comment));
  };

  const onDeleteClick = () => {
    if(!window.confirm("삭제하시겠습니까?")) return false;
    dispatch(articleActions.deleteArticle(id));
  };

  const onDeleteComment = (commentId) => {
    dispatch(commentActions.deleteComment(commentId));
  };

  return (
    <div style={{width: "80%", margin: "3rem auto"}}>
      <div>
        <ArticleDetail
          id={id}
          title={title}
          content={content}
          views={views}
          date={date}
          handleDeleteClick={onDeleteClick}
          handleComment={
            <Comment
              comment={CommentValue}
              handleCommentChange={onCommentChange}
              handleCommentSubmit={onCommentSubmit}
            />
          }
          loadComments={comments}
          deleteComment={onDeleteComment}
        />
      </div>
      
    </div>
    
  );
}

export default ArticlePage;
