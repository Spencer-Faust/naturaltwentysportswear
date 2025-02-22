import { Box } from '@mui/system';
import React from 'react';
import './Header.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from '@mui/material';

export const Header = ({isMobile}) => (
    <Box className='header-container'>
        <Box sx={{ fontSize: isMobile ? '' : '3rem' }}>Natural Twenty Sportswear</Box>
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
);