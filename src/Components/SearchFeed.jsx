import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Videos} from './index'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() 
{
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => 
  {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        Search Results for {searchTerm} videos
      </Typography>
      <Box display='flex' p='2'>
        <Box sx={{mr: { sm: '85px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default SearchFeed