import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const SideBar = () => {
  return (
    <Box
      sx={{
        width: "359px",
        height: "344px",
        borderTop: "1px solid #E5E5F3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon
                icon="icon-park-outline:wallet"
                style={{
                  color: "blue",
                  fontSize: "34px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="62,540 SAR"
              secondary="Total Investment"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "24px",
                  fontWeight: 700,
                },
                "& .MuiListItemText-secondary": {
                  fontSize: "14px",
                  color: "text.secondary",
                  fontWeight: 400,
                },
              }}
            />
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              padding: "14px 24px",
              fontSize: "12px",
              fontWeight: 600,
              color: "white",
              backgroundColor: "#2D91FE",
              border: "1px solid #E5E5F3",
              borderRadius: "42px",
              textTransform: "none",
            }}
          >
            Deposit
          </Button>
          <Button
            sx={{
              padding: "14px 24px",
              fontSize: "12px",
              fontWeight: 400,
              color: "black",
              border: "1px solid #E5E5F3",
              borderRadius: "42px",
              textTransform: "none",
            }}
          >
            Withdraw
          </Button>
        </Box>
        <Box
          sx={{
            py: "56px",
            px: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderBottom: "1px solid #E5E5F3",
          }}
        >
          <Icon
            icon="icon-park-outline:info"
            style={{
              fontSize: "34px",
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: "text.secondary",
              fontWeight: 400,
            }}
          >
            To withdraw more than 10,000 SAR you need to verify your banking
            account.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 6,
          }}
        >
          <img src="/Frame-1.svg" alt="illustration" />
        </Box>
        <Box
          sx={{
            mx: 8,
            my: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
            }}
          >
            Why Should You Trust It?
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Because of this and that. Anyway investing is very good
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
