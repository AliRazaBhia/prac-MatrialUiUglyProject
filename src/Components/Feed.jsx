import React from 'react'
import {  Box}from '@mui/material'
import Post from './Post'



const Feed = () => {
  const noOfPost = [1,2,3,4,5,6]
  const multiplePosts =  noOfPost.map(( _,index)=> <Post key={index}/> )

  
  return (
    <>
    <Box  flex={4}>
      {multiplePosts}
    </Box>
    </>
  )
}

export default Feed