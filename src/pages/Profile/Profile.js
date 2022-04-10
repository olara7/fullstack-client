import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddPostModal from "../../components/AddPostModal/AddPostModal";
import Post from "../../components/Post/Post";
import { gql, useQuery, refetch } from "@apollo/client";

import "./Profile.css"

const GET_PROFILE = gql`
  query GetProfile($userId: ID!){
  profile(userId: $userId){
    bio
    isMyProfile
    user {
      id
      name
      posts {
        id
        title
        content
        createdAt
      }
    }
  }
}
`

export default function Profile() {
  //get id from params to use to get profile
  const { id } = useParams();

  //pass the id from params to the get profile query as a variable
  const { data, error, loading, refetch } = useQuery(GET_PROFILE, {
    variables: {
      userId: id
    }
  });


  if(error) return <div> Error getting profile </div>

  if(loading) return <div> Loading profile... </div>

  const { profile } = data
  

  return (
    <div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex ",
          justifyContent: "space-between",
        }}
      >
        <div className="profile">
          <h1>{profile.user.name}</h1>
          <p>{profile.bio}</p>
        </div>
      </div>
      <div>
      <div className="add-button">{profile.isMyProfile ? < AddPostModal {...{refetch}} /> : null}</div>
        {profile.user.posts.map((post) => {
          return (
            <div className="card">
            <Post
              key={post.id} 
              title={post.title} 
              content={post.content} 
              date={post.createdAt} 
              id={post.id}
              //user={profile.user.name}
              isMyProfile={profile.isMyProfile}
              {...{refetch}}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}
