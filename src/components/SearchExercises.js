import React, {useEffect, useState} from 'react'
import {Box , Button, Stack, TextField, Typography} from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { HorizontalScrollBar } from './HorizontalScrollBar';

export const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

const [search, setSearch] = useState("");

const [bodyParts, setBodyParts] = useState([]);

useEffect(()=>{
  const fetchExercisesData = async ()=>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
    setBodyParts(["all", ...bodyPartsData])
  }
  fetchExercisesData()
},[])

const handleChange = (e)=>{
  e.preventDefault()
  setSearch(e.target.value.toLowerCase())
}

const handleSearch = async ()=>{
  if(search){
    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    const searchdExercises = exerciseData.filter(
      (el) => el.name.toLowerCase().includes(search)
    ||el.target.toLowerCase().includes(search)
    ||el.equipment.toLowerCase().includes(search)
    ||el.bodyPart.toLowerCase().includes(search)
    );
    setSearch("");
    setExercises(searchdExercises);
  }
}


  return (
    <Stack alignItems="center" mt="307px" 
      justifyContent="center" p="20px">
       <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px"}}}
       mb="50px" textAlign="center">
          Increíbles ejercicios <br /> que deberías conocer
       </Typography>
       <Box position="relative" mb="72px">
          <TextField
            sx={{
              input:{
                fontWeight:"700", 
                border:"none", 
                borderRadius:"4px"
                },
                width:{lg:"800px", xs:"350px"},
                backgroundColor:"#fff", 
                // borderRadius:"40px"
            }}
            height="76px"
            value={search}
            onChange={(e)=>{handleChange(e)}}
            placeholder="Buscar Ejercicio"
            type="text"
          />
          <Button className='search-btn'
            sx={{
              bgcolor:"#ff2625",
              color:"#fff",
              textTransform: "none",
              width:{lg:"175px", xs:"80px"},
              fontSize:{lg:"20px", sx:"14px"},
              height:"56px",
              position:"absolute",
              right:"0"
            }}
            onClick={handleSearch}
          >
            Buscar
          </Button>
       </Box>
       <Box sx={{position:"relative", width:"100%", p:"20px"}}>
            <HorizontalScrollBar data={bodyParts} bodyParts  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
       </Box>
    </Stack>
  )
}
