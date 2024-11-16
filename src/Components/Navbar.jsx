import { MailOutline, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";
import {
  Avatar,
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import React, { useState } from "react";
import { theme } from "../theme";

        const StyledToolBar = styled(Toolbar)({
          display: "flex",
          justifyContent: "space-between",
        });


        const Search = styled("div")({
          backgroundColor: "white",
          padding: "0px 10px",
          width: "30%",
          borderRadius: theme.shape.borderRadius,
          display:"flex",
          alignItems:'center'
          
        });


        const Icons = styled(Box)(({ theme }) => ({
          color: theme.palette.primary.main,
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
          [theme.breakpoints.up("sm")]:{
            display:"flex"
          }
        }));


        const XsBox =  styled(Box)(({theme})=>({

          [theme.breakpoints.up('sm')]:{
            display:"none",
          }

        }))
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <AppBar   position="sticky" sx={(theme) => ({   backgroundColor: theme.palette.primary.backGroundMainColor,   borderBottom: "0.5px solid",   borderColor: "white",   color: "white", })} >
    
      <StyledToolBar>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
          <WebIcon
            sx={{
              display: { xs: "block", sm: "block" },
              fontSize: { xs: "30px", sm: "24px" },
              marginRight: { xs: "0", sm: "5px" },
            }}
          ></WebIcon>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bolder"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            WebGram
          </Typography>
        </Box>

         
            <Search>
              <SearchOutlined sx={{color:"black", width:"20px", height:"20px", mr:"10px  "}}/>
              <InputBase placeholder="Search..." />
            </Search>
            <Icons>
              <Badge>
                <MailOutline color="" />
              </Badge>
              <Badge>
                <NotificationsNoneOutlined />
              </Badge>
              <Avatar onClick={e=>setIsOpen(true)} sx={{ color: "white", width: "35px", height: "35px", cursor:"pointer"  }}>
                A
              </Avatar>
            </Icons>

            <XsBox>
            <Avatar onClick={e => setIsOpen(true)} sx={{ color: "white", width: "35px", height: "35px", cursor:"pointer" }}>
                A
              </Avatar>
            </XsBox>
        
      </StyledToolBar>

      <Menu
        sx={{mt:"2rem",
          '& .MuiPaper-root': {
            backgroundColor: '#f5f5f7',
            color:"black"
    },
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose = {e=> setIsOpen(false)}
        anchorOrigin={{
          vertical: "vertical",
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      
    </AppBar>
  );
};

export default Navbar;
