import { Box } from '@mui/system';
import React from 'react';
import './Header.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from '@mui/material';

export const Header = () => (
    <Box className='header-container'>
        <Box className='header-title'>Natural Twenty Sportswear</Box>
        <Link
            href='https://www.instagram.com/naturaltwentysportswear'
            target='_blank'
            rel="noreferrer"
        >
            <InstagramIcon
                sx={{ 
                    color: 'white',
                    height: 36, 
                    width: 36,
                    '&:hover': {
                        color: '#E1306C',
                    }
                }} 
            />
        </Link>
    </Box>
)