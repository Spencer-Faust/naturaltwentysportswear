import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { DiscoveryForm } from './DiscoveryForm';

export const Body = () => (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: '3.5rem',

        //TODO: set up screen size conditional
        maxWidth: '45%',
    }}>
        <Box sx={{ fontSize: '3.5rem' }}>We'd love to hear from you!</Box>
        <Box sx={{ fontSize: '1.25rem', marginTop: '2rem', maxWidth: '40rem', lineHeight: 1.5 }}>
            Work side by side with an activewear professional! Schedule a call or fill out the form below to tell me all the nitty gritty deets about your brand and project goals. I'd love to help you bring your designs to life!  
        </Box>
        <Link 
            href='https://calendly.com/naturaltwentysportswear/discoverycall?month=2025-02'
            target='_blank'
            rel="noreferrer"
            underline='none'
            sx={{
                color: 'black',
                backgroundColor: 'white',
                width: '50%',
                marginTop: '2rem',
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
        <Box sx={{ fontSize: '1.25rem', marginTop: '2rem', maxWidth: '40rem', lineHeight: 1.5  }}>
            Have some more in depth questions before we chat? Drop them below and I'll get back to you in two days. I'm based in Minneapolis, Minnesota, US. Don't worry! I work with brands across the US + the globe.
        </Box>
        <DiscoveryForm />
    </Box>
)