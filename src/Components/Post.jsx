import React, { useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import { ExpandMore, ExpandMoreRounded, Favorite, FavoriteBorder, FavoriteOutlined, MoreVertRounded, ShareRounded } from '@mui/icons-material'


const Post = () => {
   
  return (
    <Card sx={{marginTop:"1rem"}} >
    <CardHeader
      avatar={
        <Avatar aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertRounded/>
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="400"
      image="./137-95165.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur blanditiis accusantium voluptatem? Eaque dignissimos, labore ipsa dolorem quam doloribus!
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} sx={{color:"red"}} />
      <IconButton aria-label="share">
        <ShareRounded />
      </IconButton>
      <ExpandMore
        
        aria-label="show more"
      >
        <ExpandMoreRounded />
      </ExpandMore>
    </CardActions>
  </Card>

  )
}

export default Post