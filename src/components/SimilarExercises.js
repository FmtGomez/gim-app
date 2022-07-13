import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {HorizontalScrollBar} from "./HorizontalScrollBar";
import {Loader} from "./Loader";

//props de ExerciseDetail
export const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:"110px", xs:"0"}}}>
      <Typography variant='h4' margin="15px">
        Ejercicios que trabajan el mismo grupo de músculos
      </Typography>
        
        <Stack direction="row" sx={{p:"2", position:"relative"}}>
          {targetMuscleExercises.length? 
          <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
        </Stack>

        <Typography variant='h4' margin="15px">
        Ejercicios que trabajan el mismo Equipamiento
      </Typography>
        <Stack direction="row" sx={{p:"2", position:"relative"}}>
          {equipmentExercises.length? 
          <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
        </Stack>

    </Box>
  )
}
