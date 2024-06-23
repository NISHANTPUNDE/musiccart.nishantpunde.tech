import { Box, Button, Container, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer';
const Cancel = () => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }
  return (
    <>
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <CloseIcon color="primary" sx={{ fontSize: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Order is successfully Cancel Enjoy!
      </Typography>
      <Typography variant="body1" gutterBottom>
        You will be Not receiving a Product
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome} sx={{ mt: 4 }}>
        Go back to Home page
      </Button>
    </Container>
    <Box sx={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
    }}>
    <Footer />
    </Box>
    </>
  )
}

export default Cancel