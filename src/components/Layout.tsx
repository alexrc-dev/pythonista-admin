import {getClientDetails} from "../services/clients.service";
import {CardGiftcard, Dashboard, ManageAccounts, Flag} from "@mui/icons-material";
import EventIcon from "@mui/icons-material/Event";
import {Box} from "@mui/system";
import {
  CssBaseline, AppBar, Toolbar, Typography, List, ListItem, ListItemText,
  ListItemIcon, Divider, Drawer
} from "@mui/material";
import Head from "next/head";
import Link from "./Link";
import Button from "@mui/material/Button";
import * as React from "react";
import {removeToken} from "../services/credentials.service";
import {useEffect, useState} from "react";
import {ClientModel} from "../models/client.model";

interface LayoutProps {
  children: any,
  title: string
}

const Layout = (props: LayoutProps) => {
  const [client, setClient] = useState<ClientModel | null>(null);

  useEffect(() => {
    getClientDetails().then(c => setClient(c));
  }, [])

  const drawer_width = 270;

  const routes = [
    {title: 'Dashboard', path: '/dashboard', icon: <Dashboard/>},
    {title: 'Events', path: '/events', icon: <EventIcon/>},
    {title: 'Coupons', path: '/coupons', icon: <CardGiftcard/>},
    {title: 'Courses', path: '/courses', icon: <Flag/>},
    {title: 'Users', path: '/users', icon: <ManageAccounts/>}
  ]
  const logout = () => {
    removeToken();
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <Head>
        <title>{`Pythonista API Client ${props.title ? ' - ' + props.title : ''}`}</title>
      </Head>
      <AppBar elevation={4} position={"fixed"} color={"primary"}
              sx={{
                width: `calc(100% - ${drawer_width}px)`,
                ml: `${drawer_width}px`
              }}>
        <Toolbar>
          <Link href={"/dashboard"} color={"inherit"} variant={"h6"}
                underline={"none"}>
            Pythonista API Client - Admin
          </Link>
          <Typography
            style={{fontWeight: "300", position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}
            variant={"subtitle1"}
            component={"h2"}>
            {props.title}
          </Typography>
          <Button sx={{position: 'absolute', right: '16px'}} color={"secondary"} variant="contained" onClick={logout}
                  component={Link} noLinkStyle href="/">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawer_width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawer_width,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          {client && (
            <ListItemText primary={client.brand_name} secondary={client.name}/>)}
        </Toolbar>
        <Divider/>
        <List>
          {routes.map((route, k) => (
            <ListItem component={Link} noLinkStyle href={route.path} button key={k}
                      selected={props.title === route.title}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.title}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{my: 9, flexGrow: 1, bgcolor: 'background.default', p: 3}}>
        {props.children}
      </Box>
    </Box>
  )
}

export default Layout;
