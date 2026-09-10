import { Button, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar} alt="Avatar" />
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography color='primary' variant='h1' sx={{ textAlign: 'center' }}>Caio Scura</Typography>
                            <Typography color='primary' variant='h2' sx={{ textAlign: 'center' }}>I'm Software Enginner</Typography>

                            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button>
                                    <DownloadIcon/>
                                    Download CV
                                    </Button>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button>
                                    <MailIcon/>
                                    Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>
        </>
    )
}

export default Hero
