import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {articleActions} from "../../../slice/articleSlice";
import ArticleDetail from './Sections/ArticleDetail';
import {Link} from "react-router-dom";
import {Button, Typography} from "antd";

function ArticlePage({match, location}) {
  //console.log(match.params.articleId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.getArticle(match.params.articleId));
  }, [match.params.articleId]);

  const {id, title, content} = useSelector((state) => ({
    id: state.articleReducers.id,
    title: state.articleReducers.title,
    content: state.articleReducers.content,
  }));

  const date = useSelector((state) => state.articleReducers.date);
  const views = useSelector((state) => state.articleReducers.views);
    
  /*const onDeleteClick = () => {
    if(!window.confirm("삭제하시겠습니까?")) return false;
    dispatch(articleActions.deleteArticle(id));
  };*/

  return (
    <div style={{width: "80%", margin: "3rem auto"}}>
      <div>
        <ArticleDetail
          id={id}
          title={title}
          content={content}
          views={views}
          date={date}
        />
      </div>
      
    </div>
    
  )
}

export default ArticlePage
