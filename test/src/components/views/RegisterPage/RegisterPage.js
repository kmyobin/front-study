import React, { useEffect, useState } from 'react'
import RegisterOrEdit from './Sections/RegisterOrEdit';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {articleActions} from "../../../slice/articleSlice";

function RegisterPage(props) {  
  const dispatch = useDispatch();

  const { id, views, date, editDate, title, content } = useSelector(
    (state) => ({
      id: state.articleReducers.id,
      views: state.articleReducers.views,
      date: state.articleReducers.date,
      editDate: state.articleReducers.editDate,
      title: state.articleReducers.title,
      content: state.articleReducers.content,
    }),
    shallowEqual
  );
  
  const [IsForUpdate, setIsForUpdate] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    if(searchParams.get("isForEdit") === "true"){
      dispatch(articleActions.fetchArticle(props.match.params.articleId));
      setIsForUpdate(true);
    }
  }, [id]);

  const onRegisterChange = (event) => {
    const {name, value} = event.target;
    dispatch(articleActions.changeRegisterInput({name: name, value: value}));
  };

  const onSubmitArticle = (event) => {
    event.preventDefault();

    if(title === "" || title === null || title === undefined){
      alert("제목을 작성하십시오.");
      return false;
    }
    if(content === "" || content === null || content === undefined){
      alert("내용을 작성하십시오.");
      return false;
    }

    const article={
      id: id,
      title: title, 
      content: content, 
      views: views,
      date: date,
      editDate: IsForUpdate ? Date.now() : editDate,
    };
    
    if(IsForUpdate){
      dispatch(articleActions.updateArticle(article));
    }
    else{
      dispatch(articleActions.registerArticle(article));
    }

  };


  return (
    <>
      <RegisterOrEdit
        titleValue={title}
        contentValue={content}
        handleRegisterChange={onRegisterChange}
        handleSubmit={onSubmitArticle}
        updateRequest={IsForUpdate}
      />
    </>
  )
}

export default RegisterPage
