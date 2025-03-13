import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { DiscoveryForm } from './DiscoveryForm';

export const Body = ({isMobile}) => (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: !isMobile && '3.5rem',

        //TODO: set up screen size conditional
        maxWidth: isMobile ? '85%' : '45%',
    }}>
        <Box sx={{ fontSize: isMobile ? '1.25rem' : '3.5rem', paddingTop: isMobile ? '1rem' : '' }}>Hey there!</Box>
        <Box sx={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: isMobile ? '1rem' : '2rem', maxWidth: '40rem', lineHeight: 1.5 }}>
        I’m Stayce, a senior designer specializing in all things activewear!  
        </Box>
        <Box sx={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: isMobile ? '1rem' : '2rem', maxWidth: '40rem', lineHeight: 1.5 }}>
            Looking for an extra set of hands to help design your upcoming collection? 
            Or need someone to get in detail on those pesky tech packs and help translate?
            I love helping small to midsize brands bring their dreams to life, while staying in control of their product development! 
            So if you’re looking for an activewear specialist, you found her!   
        </Box>
        <Link 
            href='https://calendly.com/naturaltwentysportswear/discoverycall?month=2025-02'
            target='_blank'
            rel="noreferrer"
            underline='none'
            sx={{
                color: 'black',
                backgroundColor: 'white',
                width: isMobile ? '70%' : '50%',
                marginTop: isMobile ? '1rem' : '2rem',
                borderColor: 'black',
                border: '2px solid',
                borderRadius: '1.5rem',
                '&:hover': {
                    backgroundColor: 'lightgray',
                    cursor: 'pointer',
                }
            }}
        >
        <Box sx={{ padding: '1.75rem 3rem', display: 'flex', justifyContent: 'center' }}>Schedule a discovery call</Box>
        </Link>
        <Box sx={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: isMobile ? '1rem' : '2rem', maxWidth: '40rem', lineHeight: 1.5  }}>
            Want answers to some of your questions before we chat? 
            Drop them in the form below and I’ll get back to you in two biz days! 
        </Box>
        <DiscoveryForm isMobile={isMobile} />
    </Box>
)