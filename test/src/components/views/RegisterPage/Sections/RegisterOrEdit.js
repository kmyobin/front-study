import React from 'react'

function RegisterOrEdit(props) {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
        <br />
        <label>Title: </label>
        <input 
          onChange ={props.handleTitleChange} 
          value={props.titleValue}
          type="text" 
          name="title" />
        <hr />
        <div>
          <textArea 
            onChange={props.handleContentChange} 
            value={props.contentValue} 
            name="content" />
        </div>
        <button onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "등록"}
        </button>
      </form>

    </div>
  )
}

export default RegisterOrEdit
