import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import { Loader } from './Loader';


//props de ExerciseDetail
export const ExerciseVideos = ({exerciseVideos, name}) => {
  if (!exerciseVideos.length) return <Loader/>;
  return (
    <Box sx={{marginTop:{lg:"200px", xs:"20px"}}} p="20px">
      <Typography variant='h4' mb="33px">
        Mirá como se realiza el ejercicio <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> en estos videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection:{lg:"row"},
          gap:{lg:"110px", xs:"0"},
        }}
      >
        {exerciseVideos?.slice(0,3).map((item, index)=>(
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#fff">
                {item.video.title}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}
