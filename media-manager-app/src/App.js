import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import Routes from './routes'
import 'typeface-roboto'
import './App.css'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    fontFamily: [ "Roboto", "Helvetica", "Arial", "sans-serif" ].join(','),
    useNextVariants: true
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes/>
    </MuiThemeProvider>
  )
}

export default App
