import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,  } from '@mui/material'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import { ChatBubbleRounded, EmailRounded, ContactsRounded, DarkModeRounded } from '@mui/icons-material';
import { theme } from '../theme';



const SideBar = () => {
 
  return (
    <>
    <Box position="relative" disablePadding flex={1.2}  sx={{display: {xs: "none", sm:"block"}}} >
      <Box position="fixed">
    <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
              <ListItemIcon  sx={{minWidth:"40px"}}>
                <CottageRoundedIcon sx={{color:"#f5f5f7"}}  />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{'& .MuiTypography-root':{
                color:"#f5F5F7",
                fontWeight:"500",
                fontSize:"1.2rem",  
              }}} />
            </ListItemButton>
          </ListItem>
          
          <ListItem  disablePadding>
            <ListItemButton sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
              <ListItemIcon  sx={{minWidth:"40px"}}>
                <ChatBubbleRounded sx={{color:"#f5f5f7"}}  />
              </ListItemIcon>
              <ListItemText primary="Messages" sx={{'& .MuiTypography-root':{
                color:"#f5F5F7",
                fontWeight:"500",
                fontSize:"1.2rem",  
              }}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
              <ListItemIcon  sx={{minWidth:"40px"}}>
                <EmailRounded sx={{color:"#f5f5f7"}}  />
              </ListItemIcon>
              <ListItemText primary="Mail" sx={{'& .MuiTypography-root':{
                color:"#f5F5F7",
                fontWeight:"500",
                fontSize:"1.2rem",  
              }}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{display:'flex', justifyContent:"center", alignItems:"center"}}>
              <ListItemIcon sx={{minWidth:"40px"}}>
                <ContactsRounded sx={{color:"#f5f5f7" }}  />
              </ListItemIcon>
              <ListItemText primary="Contacts" sx={{'& .MuiTypography-root':{
                color:"#f5F5F7",
                fontWeight:"500",
                fontSize:"1.2rem",  
              }}} />
            </ListItemButton>
          </ListItem>


    </List>
    </Box>
    </Box>
    </>
  )
}

export default SideBar