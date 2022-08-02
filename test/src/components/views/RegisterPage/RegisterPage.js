import React, { useState } from 'react'
import RegisterOrEdit from './Sections/RegisterOrEdit';
import {useDispatch} from "react-redux";
import {articleActions} from "../../../slice/articleSlice";

function RegisterPage() {
  const [TitleValue, setTitleValue] = useState("")
  const [ContentValue, setContentValue] = useState("")
  const [IsForUpdate, setIsForUpdate] = useState(false)

  const dispatch = useDispatch();

  const onTitleChange = (event) =>{
    setTitleValue(event.currentTarget.value);
  };
  //console.log(TitleValue);

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };
  //console.log(ContentValue);

  const onSubmitArticle = (event) => {
    event.preventDefault();
    const article={title: TitleValue, content: ContentValue};
    dispatch(articleActions.registerArticle(article));
    //console.log(article);
  };


  return (
    <>
      <RegisterOrEdit
        titleValue={TitleValue}
        contentValue={ContentValue}
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
        updateRequest={IsForUpdate}
      />
    </>
  )
}

export default RegisterPage
