import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export const DiscoveryForm = () => {

    const getCheckboxes = (text, name) => {

        return (
            <FormControlLabel 
                control={
                    <Checkbox label={text} name={name} inputProps={{ 'aria-label': `${text} checkbox`}} />
                } 
                label={text}
            />
        )
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formattedData = Object.fromEntries(formData);
        console.log('OPE', formattedData)
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                width: '100%',
                marginTop: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '.5rem'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <TextField 
                        id="name" 
                        label="Name" 
                        name='name'
                        variant="outlined" 
                        required
                        sx={{ width: '100%' }}
                    />
                    <TextField 
                        id="brand-name" 
                        label="Brand Name" 
                        name='brandName'
                        variant="outlined" 
                        sx={{ width: '100%' }}
                    />
                </Box>
                <TextField 
                    id="email" 
                    label="Email" 
                    name='email'
                    variant="outlined" 
                    required
                    sx={{ width: '100%' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <TextField 
                        id="website" 
                        label="Website" 
                        name='website'
                        variant="outlined" 
                        required
                        sx={{ width: '100%' }}
                    />
                    <TextField 
                        id="social-media-handles" 
                        label="Social Media Handles" 
                        name='socials'
                        variant="outlined" 
                        sx={{ width: '100%' }}
                    />
                </Box>
                <FormGroup sx={{ color: 'black' }}>
                    {getCheckboxes('Consulting', 'consulting')}
                    {getCheckboxes('Creative Design: Concept, Analysis + Moodboards', 'creative')}
                    {getCheckboxes('Technical Design: CADs/Tech Flats, Tech Pack + Grading', 'technical')}
                    {getCheckboxes('Sampling + Pre-Production', 'sampling')}
                    {getCheckboxes('Sourcing', 'sourcing')}
                </FormGroup>
                <TextField
                    id="tell-me-more"
                    label="Tell me more about yourself and your activewear brand!"
                    name='tellMeMore'
                    required
                    multiline
                    rows={3}
                />
                <Button type='submit' variant='contained' endIcon={<SendIcon  />}>Submit</Button>
            </Box>
        </Box>
    )
}