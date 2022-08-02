import React from 'react'
import {Link} from "react-router-dom";
import {Button, Input} from 'antd';

const {TextArea} = Input;

function RegisterOrEdit(props) {
  return (
    <div style={{maxWidth:"700px", margin:"2rem auto"}}>
      <Link to="/">
        <Button>←</Button>
      </Link>
      <form onSubmit={props.handleSubmit}>
        <br />
        <div style={{maxWidth: "700px", margin: "2rem"}}>
          <label>Title: </label>
          <Input 
            onChange ={props.handleTitleChange} 
            value={props.titleValue}
            type="text" 
            name="title" />
          <hr />
        
          <TextArea 
            onChange={props.handleContentChange} 
            value={props.contentValue} 
            name="content" />
        </div>
        <Button type="danger" onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "등록"}
        </Button>
      </form>
    </div>
  )
}

export default RegisterOrEdit
