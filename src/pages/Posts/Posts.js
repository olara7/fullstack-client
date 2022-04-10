import React from "react";
import Post from "../../components/Post/Post";
import { gql, useQuery } from "@apollo/client"
import "./Posts.css"

const GET_POSTS = gql`
  query {
  posts {
    id
    title
    content
    createdAt
    user {
      id
      name
    }
  }
}
`

export default function Posts() {

  const { data, error, loading} = useQuery(GET_POSTS)

  if(error) return <div> Error loading posts </div>

  if(loading) return <div> Loading posts...</div>

  console.log({
    data,
    error,
    loading,
  });

  //destructure posts from data
  const { posts } = data 

  return (
  <div className="container">
    {posts.map((post) => {
      return (<div className="card">
      <Post
      key={post.id} 
      title={post.title} 
      content={post.content} 
      date={post.createdAt} 
      id={post.id}
      userId={post.user.id}
      user={post.user.name}
      />
      </div>
    )})}
  </div>
  );
}
