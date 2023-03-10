import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/auth/thunks'

const menus = [
  {
    path: 'meals',
    title: 'Meals',
  },
  {
    path: 'orders',
    title: 'Orders',
  },
]

const AdminHeader = () => {
  const dispatch = useDispatch()

  const signOutNavigateHandler = () => {
    dispatch(signOut())
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{ marginRight: '10px' }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {item.title}
              </Typography>
            </NavLink>
          ))}

          <Button color="inherit" onClick={signOutNavigateHandler}>
            Sign Out
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default AdminHeader

const Container = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
