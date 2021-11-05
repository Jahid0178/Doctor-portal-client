import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../images/footer-bg.png";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          <Typography sx={{ color: "#808080" }}>
            New York - 101010 Hudson <br /> Yards
          </Typography>
          <Typography variant="h3">
            <FacebookRoundedIcon
              sx={{ color: "#4267B2", mr: 1, fontSize: "2rem" }}
            ></FacebookRoundedIcon>
            <GoogleIcon
              sx={{ color: "#4285F4", mr: 1, fontSize: "2rem" }}
            ></GoogleIcon>
            <TwitterIcon
              sx={{ color: "#1DA1F2", fontSize: "2rem" }}
            ></TwitterIcon>
          </Typography>
          <Typography sx={{ color: "#808080" }}>Call Now</Typography>
          <Button
            variant="contained"
            sx={{
              width: 160,
              background:
                "linear-gradient(to right, rgba(24, 210, 176, 1), rgb(15, 207, 233, 1))",
              mt: 1,
            }}
          >
            +2025550295
          </Button>
        </Grid>
        <Typography sx={{ py: 2, margin: "auto", color: "#808080" }}>
          Copyright 2021 All Rights Reserved
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
