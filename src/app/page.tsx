'use client'
import Image from "next/image";
import AppBar from '@mui/material/AppBar'
import { Toolbar, Box, Typography, IconButton, Menu, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Search as SearchIcon, BarChart3, TrendingUp, PieChart, Phone, Mail, MapPin } from 'lucide-react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1e40af' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu open={false} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
          >
            PEAPOA ANALYTICA
          </Typography>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Contact</NavButton>
          <Search>
            <IconButton sx={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </Search>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ 
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                Data-Driven Financial Excellence
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Transform your financial decisions with powerful analytics and insights
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  backgroundColor: 'white',
                  color: '#1e40af',
                  mr: 2,
                  '&:hover': {
                    backgroundColor: '#f8fafc'
                  }
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined"
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#f8fafc',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Financial Analytics" 
                  style={{ maxWidth: '100%', height: 'auto' }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: '#1e40af' }}>
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <BarChart3 size={40} />, title: 'Advanced Analytics', desc: 'Powerful tools for deep financial insights' },
              { icon: <TrendingUp size={40} />, title: 'Growth Strategy', desc: 'Data-driven approaches to maximize returns' },
              { icon: <PieChart size={40} />, title: 'Portfolio Management', desc: 'Comprehensive portfolio optimization' }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}>
                  <CardContent>
                    <Box sx={{ color: '#1e40af', mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: '#1e40af' }}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 4 }}>Get in Touch</Typography>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Phone size={20} style={{ marginRight: '12px', color: '#1e40af' }} />
                    <Typography>+254 9713231</Typography>
                  </Box>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Mail size={20} style={{ marginRight: '12px', color: '#1e40af' }} />
                    <Typography>contact@peapoa.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MapPin size={20} style={{ marginRight: '12px', color: '#1e40af' }} />
                    <Typography>Nairobi, Kenya</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 4 }}>Office Hours</Typography>
                  <Typography sx={{ mb: 2 }}>Monday - Friday: 9:00 AM - 6:00 PM</Typography>
                  <Typography sx={{ mb: 2 }}>Saturday: 10:00 AM - 2:00 PM</Typography>
                  <Typography>Sunday: Closed</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}