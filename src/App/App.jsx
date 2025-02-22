import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './Components/Body/Body'
import { Header } from './Components/Header/Header'

function App() {
  const [ isMobileDevice, setIsMobileDevice ] = useState(false);

  const handleScreenResize = () => {
    if (window.innerWidth >= 1400) {
        setIsMobileDevice(false);
    } else {
        setIsMobileDevice(true);
    }
};

// Checks initial screen size
useEffect(() => {
    if (window.innerWidth >= 1400) {
        setIsMobileDevice(false);
    }
}, []);

// Handle the view window being resized
useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => {
        window.removeEventListener('resize', handleScreenResize);
    }
}, []);

  return (
    <>
      <Header isMobile={isMobileDevice} />
      <Box sx={{ display: 'flex', justifyContent: isMobileDevice ? 'center' : 'flex-end'}}>
          <Body isMobile={isMobileDevice} />
      </Box>
    </>
  )
}

export default App
