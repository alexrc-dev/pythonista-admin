import {
  Container, Typography, Box, TextField, Button, CircularProgress, IconButton, Paper, Divider,
  InputAdornment
} from "@mui/material";
import Router from "next/router";
import {saveToken} from "../services/credentials.service";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

const App = () => {
  const [showUserPsw, setShowUserPsw] = useState(false);
  const [values, setValues] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);


  const handleUserPsw = () => {
    setShowUserPsw(!showUserPsw)
  };

  const handleMouseDown = (evt: any) => {
    evt.preventDefault();
  }
  const handleChange = (prop: string) => (evt: any) => {
    setValues({...values, [prop]: evt.target.value});
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 3,
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: '16px'
        }}
        component={Paper}
        elevation={6}>
        <Typography variant={"subtitle1"} component={"strong"} align={"center"}>Sign In</Typography>
        <Divider/>
        <TextField fullWidth variant={"outlined"} label={"Username"} onChange={handleChange('username')}/>
        <TextField fullWidth variant={"outlined"} label={"Password"} onChange={handleChange('password')}
                   type={showUserPsw ? 'text' : 'password'}
                   InputProps={{
                     endAdornment: <InputAdornment
                       position={"end"}>
                       <IconButton onClick={handleUserPsw} onMouseDown={handleMouseDown} edge={"end"}>
                         {showUserPsw ? <VisibilityOff/> : <Visibility/>}
                       </IconButton>
                     </InputAdornment>
                   }}/>
        <Divider/>
        <Button sx={{width: '100%'}} variant={"contained"} disabled={loading} color={"secondary"}>
          {loading ? (<><CircularProgress size={24}
                                          variant={"indeterminate"} color={"primary"}/> {' Loading'}</>) : 'Login'}
        </Button>
      </Box>
    </Container>
  );
};

export default App;
