import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../images/footer-bg.png";
import "./Footer.css";

const backgroundImg = {
  background: `url(${footerBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Footer = () => {
  return (
    <Container style={backgroundImg} sx={{ my: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Emergency Dental Care
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Treatment of Personal Diseases
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Tooth Extraction
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "#14D1CA" }}>
            Service
          </Typography>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Emergency Dental Care
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Treatment of Personal Diseases
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Tooth Extraction
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "#14D1CA" }}>
            Oral Health
          </Typography>
          <ul>
            <li>
              <Link to="#" className="footer-link">
                Emergency Dental Care
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Treatment of Personal Diseases
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Tooth Extraction
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Check Up
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6" sx={{ color: "#14D1CA" }}>
            Our Address
          </Typography>
          <Typography>
            New York - 101010 Hudson <br /> Yards
          </Typography>
          <Typography variant="h3">Icon</Typography>
          <Typography>Call Now</Typography>
          <Button variant="contained" sx={{ mt: 1 }}>
            +2025550295
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
