import React from 'react'
import {Box, Typography, Button} from "@mui/material"
import Banner from "../assets/images/banner.jpg"

export const HeroBanner = () => {
  return (
    <Box
      sx={{mt:{lg:"212px", xs:"70px"},
      ml:{sm:"50px"}
      }} position="relative" p="20px"
    >
      <Typography
        color="#ff2625" fontWeight="600" fontSize="26px">
          Fitness
      </Typography>
      <Typography color="#fff" fontWeight="700" sx={{fontSize:{lg:"44px", xs:"40px"}}}>
        Rendirse <br /> no es una opción
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="20px">
       Aquí encontrarás ejercicios para mantener activo tu cuerpo, <br /> te sentiras con más energía
       y más saludables. <br />
        Los ejercicios estan en inglés <br /> asi que es una buena alternativa para ponerlo en practica
      </Typography>
      <Button variant='contained' color="error" 
        href='#exercises'
       >Explorar Ejercicios</Button>
       <img sx={{width:{sm:"100px"}}} src={Banner} alt="banner" className='hero-banner-img' />
    </Box>
  )
}
