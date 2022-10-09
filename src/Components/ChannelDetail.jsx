import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'

function ChannelDetail() 
{ 
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id}=useParams()

  useEffect(() => 
  {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  }, [id])

  if (!videos) return <img src="https://loading.io/icon/tcjp3h" alt="" />
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                     zIndex: 10,height: '300px'}}/>
        <ChannelCard channelDetail={channelDetails} marginTop='-115px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr: { sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail