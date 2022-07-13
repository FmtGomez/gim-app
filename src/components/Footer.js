import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Logo from "../assets/images/Logo.png"

export const Footer = () => {
  return (
    <Box  mt="80px">
      <Stack direction="row" justifyContent="center" gap="10px" alignItems="center" px="30px" pt="24px">
        <Typography>
          Hecho con 💛 
        </Typography>
        <img src={Logo} alt="logo"  width="50px" height="50px" />
      </Stack>

    </Box>
  )
}
