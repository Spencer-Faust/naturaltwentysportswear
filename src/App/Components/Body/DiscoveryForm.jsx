import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const DiscoveryForm = ({ isMobile }) => {
    const { VITE_serviceId: serviceId, VITE_templateId: templateId } = import.meta.env;
    const [ emailData, setEmailData ] = useState(null);
    const [ isDataReady, setIsDataReady ] = useState(false);
    const [ hasSubmitted, setHasSubmitted ] = useState(false);

    const servicesDescriptions = useMemo(() => ({
        consulting: 'Consulting',
        creative: 'Creative Design: Concept, Analysis + Moodboards',
        technical: 'Technical Design: CADs/Tech Flats, Tech Pack + Grading',
        sampling: 'Sampling + Pre-Production',
        sourcing: 'Sourcing',
        marketing: 'Sign up for news and updates'
    }), [])

    const getCheckboxes = (service, checked) => (
        <FormControlLabel 
            sx={{ color: 'black' }}
            control={
                <Checkbox 
                    label={servicesDescriptions[service]} 
                    name={service} 
                    defaultChecked={checked} 
                    inputProps={{ 'aria-label': `${servicesDescriptions[service]} checkbox`}} 
                />
            }
            label={servicesDescriptions[service]}
        />
    );

    useEffect(() => {
        if (emailData) {
            emailjs.send(serviceId, templateId, emailData).then(() => setHasSubmitted(true));
        }
    }, [isDataReady])

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formattedData = Object.fromEntries(formData);
        setEmailData({
            name: formattedData.name,
            email: formattedData.email,
            brandName: formattedData.brandName,
            website: formattedData.website,
            socialHandles: formattedData.socialHandles,
            tellMeMore: formattedData.tellMeMore,
            consulting: formattedData.consulting ? 'Yes' : 'No',
            creative: formattedData.creative ? 'Yes' : 'No',
            technical: formattedData.technical ? 'Yes' : 'No',
            sampling: formattedData.sampling ? 'Yes' : 'No',
            sourcing: formattedData.sourcing ? 'Yes' : 'No',
            marketing: formattedData.marketing  ? 'Yes' : 'No',
        });
        setIsDataReady(true);
    };

    return ( !hasSubmitted ?
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
                {isMobile ? 
                <>
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
                </> :
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
                }
                <TextField 
                    id="email" 
                    label="Email" 
                    name='email'
                    variant="outlined" 
                    required
                    sx={{ width: '100%' }}
                />
                {isMobile ? 
                    <>
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
                            name='socialHandles'
                            variant="outlined" 
                            sx={{ width: '100%' }}
                        />
                    </> :
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
                            name='socialHandles'
                            variant="outlined" 
                            sx={{ width: '100%' }}
                        />
                    </Box>
                }
                <FormGroup>
                    {getCheckboxes('consulting')}
                    {getCheckboxes('creative')}
                    {getCheckboxes('technical')}
                    {getCheckboxes('sampling')}
                    {getCheckboxes('sourcing')}
                </FormGroup>
                <FormGroup>
                    <TextField
                        id="tell-me-more"
                        label={isMobile ? "Tell me more about yourself!" : "Tell me more about yourself and your activewear brand!"}
                        name='tellMeMore'
                        required
                        multiline
                        rows={3}
                    />
                    {getCheckboxes('marketing', true)}
                </FormGroup>
                <Button type='submit' variant='contained' endIcon={<SendIcon  />}>Submit</Button>
            </Box>
        </Box> :
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '.5rem',
                padding: '2rem',
                
            }}
        >
            <CheckCircleIcon sx={{ color: 'green', height: 48, width: 48 }} />
            <Box
                sx={{ color: 'black', fontSize: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}
            >
                Thank you for your interest
            </Box>
            <Box
                sx={{ color: 'black', fontSize: '1.5rem' }}
            >
                I will follow up with you as soon as possible!
            </Box>
        </Box>
    )
}