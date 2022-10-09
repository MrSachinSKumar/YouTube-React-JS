import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';

function VideoCard({video: { id: {videoId}, snippet}}) 
{
  return (
    <Card sx={{width:{ xs: '100%', sm:'358px', md: '257px'}, boxShadow: 'none', borderRadius: 0, bgcolor:'#000'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia>
                <img src={snippet?.thumbnails?.high?.url} alt={demoThumbnailUrl} width={{xs: '100%', sm:'358px',md: '100%'}} height={'190px'}/>
            </CardMedia>
        </Link>
        <CardContent sx={{background:'#000', height: '65px', p:0, '&:last-child': { pb: 5 }}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontSize='14px' fontWeight='bold' color= '#FFF'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle1' fontSize='12px' color= 'gray'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard