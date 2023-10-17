import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = ({ comment, onCommentUpdate, onCommentDelete }) => {
    return (
      <div>
        <div>{comment.user.nickname}</div>
        <div>{comment.content}</div>
        <div>
          <button onClick={() => onCommentUpdate(comment)}>수정</button>
          <button onClick={() => onCommentDelete(comment.commentId)}>삭제</button>
        </div>
      </div>
    );
  };

export default Comment;
