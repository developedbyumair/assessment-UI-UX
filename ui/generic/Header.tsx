import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = React.useState("Auto-Invest");

  const handleLinkClick = (item: string) => {
    setActiveLink(item);
  };
  return (
    <Box
      sx={{
        height: "132px",
      }}
    >
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          padding: "0 32px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "360px",
          }}
        >
          <img src="/logo.png" alt="logo" />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", gap: "56px" }}>
          {["Overview", "Invest", "Auto-Invest", "My Portfolio"].map((item) => (
            <Box key={item}>
              <a
                href="#"
                className={`nav-link ${activeLink === item ? "active" : ""}`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </a>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "text.secondary" }}>En</Typography>
          <Icon
            icon="ph:bell-light"
            style={{ fontSize: "30px", color: "rgba(164, 166, 187, 1)" }}
          />
          <Icon
            icon="radix-icons:avatar"
            style={{ fontSize: "30px", color: "rgba(164, 166, 187, 1)" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
