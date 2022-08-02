import React from 'react'
import {Link} from "react-router-dom";
import {Button, Typography} from "antd";

const {Title} = Typography;

function ArticleDetail(props) {
  return (
    <div>
      <div style={{margin : "2rem auto"}}>
        <a href ="/">
          <Button type="primary">목록으로 가기</Button>
        </a>
      </div>
      <div style ={{textAlign: "center"}}>
        <Title>게시글</Title>
      </div>
      <div>
        <table>
          <colgroup>
            <col width="10%" />
            <col width="40%" />
            <col width="10%" />
            <col width="40%" />
          </colgroup>
          <tr>
            <th>번호</th>
            <td>{props.id}</td>
            <th>조회수</th>
            <td>{props.views}</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{new Date(props.date).toLocaleString()}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td colspan="3">{props.title}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td colspan="3">{props.content}</td>
          </tr>
        </table>
      </div>

      <div style={{margin: "2rem auto"}}>
        <Link to={`/edit/${props.id}?isForEdit=true`}>
          <Button type="primary">수정</Button>
        </Link>
      </div>

      <div style={{margin: "auto"}}>
          <Button onClick={props.handleDeleteClick} type="danger">삭제</Button>
      </div>
    </div>
  )
}

export default ArticleDetail;