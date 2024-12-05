import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Button, Drawer, ListItemButton, ListItemIcon, ListItemText, List, IconButton, useMediaQuery, useTheme, Typography } from '@mui/material';
import ChairIcon from '@mui/icons-material/Chair';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const Pages = ['HOME','ABOUT','FURNITURES','BLOG','CONTACT US'];
  const PAGE = ['HOME','ABOUT','FURNITURES','BLOG','CONTACT US','LOG IN','SEARCH'];
  return (
    <>
    
      <AppBar position='static' elevation={0} sx={{backgroundColor:'white'}}>
        <Toolbar sx={{color:'black'}}>
         <ChairIcon sx={{color:'black'}} />
         <Typography sx={{marginLeft:'5px'}}>
              EDGECUT
            </Typography>
         {
          isMatch ? (
            <>
            
            <Drawer open={drawerOpen} onClose={()=> setDrawerOpen(false)}>
               <List>
                {
                  PAGE.map((page,index)=>(
                    <ListItemButton onClick={()=> setDrawerOpen(false)} key={index}>
                    <ListItemIcon>
                       <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                  ))}
                 
              </List>
            </Drawer>
            <IconButton sx={{color:'black',marginLeft:'auto'}} onClick={()=> setDrawerOpen(!drawerOpen)}>
               <MenuIcon />
            </IconButton>
            </>
          ):(
               <>
               <Tabs sx={{marginLeft:'auto'}}
                textColor='black'
                indicatorColor='secondary'
                value={value}
                onChange={(e,value)=> setValue(value)}
               >
                {
                  Pages.map((page,index)=>(
                    <Tab key={index} label={page} />
                  ))
                }
         </Tabs>
         <Button size='large' sx={{marginLeft:'auto',color:'black'}} endIcon={<PersonIcon />}>LOG IN</Button>
         <Button sx={{marginLeft:'10px',color:'black'}}><SearchIcon /></Button>
               </>
          )
         }
         
        </Toolbar>            
      </AppBar>
    </>
  )
};

export default Navbar;