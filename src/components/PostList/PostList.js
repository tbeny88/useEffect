import React, { useEffect, useState } from 'react'
import Postitem from '../PostItem/Postitem'
import "./PostList.css"
import { getAllPosts } from '../../services/post.service'
import { getPostByNumber } from '../../services/post.service'


const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostByNumber(10)
        .then(setPosts)
    }, [])

  return (
    <div className='post-list-container'>{posts.map(post => <Postitem key={post.id} post={post} />)}</div>
  )
}

export default PostList