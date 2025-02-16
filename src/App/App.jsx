import { Box } from '@mui/system'
import './App.css'
import { Body } from './Components/Body/Body'
import { Header } from './Components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Body />
      </Box>
    </>
  )
}

export default App
