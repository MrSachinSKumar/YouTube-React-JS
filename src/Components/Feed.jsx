import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {SideBar, Videos} from './index'
import {fetchFromAPI} from '../utils/fetchFromAPI'

function Feed() 
{
  const [selectedCategory, setSelectedCategory] = useState('New ')
  const [videos, setVideos] = useState([])
  useEffect(() => 
  {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)})
  }, [selectedCategory])
  
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
      <Box sx={{height:{sx:'auto', md:'100vh'}, width:{sx: 'auto', md: '16%' }, backgroundColor:'#212121', px: {sx:0, md:'10px'}, textAlign: 'center'}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'gray', fontSize: '12px', margin: 'auto'}}>
          Copyright 2022 YouTube
        </Typography>
      </Box>
      <Box p={3} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={1} sx={{color:'white'}}>
        {selectedCategory} videos 
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed