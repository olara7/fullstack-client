import React, { useEffect } from "react";
import "./Post.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import Profile from "../../pages/Profile/Profile";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import { Link } from 'react-router-dom'


const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    postDelete(postId: $postId) {
      userErrors {
        message
      }
    post {
      title
    }
    }
}
`;

export default function Post({
  title,
  content,
  date,
  user,
  id,
  userId,
  isMyProfile,
  refetch,
}) {
  const [deletePost, {data, loading}] = useMutation(DELETE_POST);

  const formatedDate = new Date(Number(date));

  return (
    <div className="Post">
      {isMyProfile === true &&(
        <p className="deleteBtn" onClick={() => {
          deletePost({
            variables: {
              postId: id,
            },
          });
          //add timeout on refetch to let server update database
          setTimeout(() => { refetch()}, 700);
        }}
        >
        Delete Post
        </p>
      )}
      <div>
        <h2 className="post-title">{title}</h2>
        <p className="post-content">{content}</p>
        <h4 className="post-date">
         {`${formatedDate}`.split(" ").splice(0, 3).join(" ")}
        </h4>
        <Link className="post-user" to={`/profile/${userId}`}> {user} </Link>
      </div>
    </div>
  );
}
