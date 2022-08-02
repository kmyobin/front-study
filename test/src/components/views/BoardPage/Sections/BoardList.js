import { Button } from 'antd';
import React from 'react'
import {Link} from "react-router-dom";

function BoardList(props) {
  console.log(props.board);

  return (
    <div>
      <table>
      <colgroup>
        <col width="10%" />
        <col width="70%" />
        <col width="10%" />
        <col width="10%" />
      </colgroup>
      <tbody>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>조회수</th>
          <th></th>
        </tr>        
      </tbody>
      <tbody>
        {props.board.map((article) => (
          <tr key = {article.id}>
            <td>{article.id}</td>
            <Link to={`/article/${article.id}`}>
              <td>{article.title}</td>
            </Link>
            <td>{article.views}</td>
            <td>
              <Button onClick={ () => props.hadnleDeleteClick(article.id)}>
                X
              </Button>
            </td>
          </tr>
        ))}        
      </tbody>
      
      </table>
    </div>
  )
}

export default BoardList;