import React from 'react'
import "./PostItem.css"


const Postitem = ({ post }) => {
  return (
    <div className='post-item-container'>
        <h1 className='post-item-title'>{post.title}</h1>
        <p className='post-item-body'>{post.body}</p>
    </div>
  )
}

export default Postitem