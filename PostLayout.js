import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <Link to = "/postpage/1">Post </Link>
        <br></br>
        <Link to = "/postpage/2">Post </Link>
        <br></br>
        <Link to = "/postpage/3">Post </Link>
        <br></br>
        <Link to = "/postpage/newpost">NewPost </Link>
        <Outlet />
    </>
  )
}

export default PostLayout
