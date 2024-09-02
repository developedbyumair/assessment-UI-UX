import { Button, ListItemText, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Faq } from "../components";
import { CustomBarChart } from "../components/charts";

const scores = [
  {
    color: "#2D91FE",
    percentage: "45.7%",
    label: "A",
  },
  {
    color: "#4BDFFF",
    percentage: "51.5%",
    label: "B",
  },
  {
    color: "#FFC359",
    percentage: "23.2%",
    label: "C",
  },
  {
    color: "#FF6769",
    percentage: "51.5%",
    label: "D",
  },
];

export const RightContent = () => {
  return (
    <>
      <Box
        sx={{
          minWidth: "952px",
          height: "232px",
          border: "1px solid #E5E5F3",
          borderRadius: "16px",
          py: "32px",
          px: "40px",
        }}
      >
        <Box sx={{ display: "flex", gap: 6 }}>
          <Box
            sx={{
              width: "182px",
              height: "168px",
              background:
                "radial-gradient(1191.32% 115.38% at 96.39% 8.75%, #2DA5FE 0%, #218AF5 100%);",
              borderRadius: "16px",
              p: "32px",
            }}
          >
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography mb={3}>Conservative</Typography>
              <ListItemText
                primary="10-14%"
                secondary="Interest Rate"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "24px",
                    fontWeight: 700,
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "14px",
                    color: "white",
                    fontWeight: 400,
                    opacity: 0.9,
                  },
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: 15,
              }}
            >
              <ListItemText
                primary="Active"
                secondary="Status"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "rgba(128, 203, 23, 1)",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#0D0F52",
                    opacity: 0.3,
                  },
                }}
              />
              <ListItemText
                primary="1500 SAR"
                secondary="Max. Investement"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "17px",
                    fontWeight: 700,
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#0D0F52",
                    opacity: 0.3,
                  },
                }}
              />
              <ListItemText
                primary="26"
                secondary="Loans Funded"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "17px",
                    fontWeight: 700,
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#0D0F52",
                    opacity: 0.3,
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                my: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#0D0F52",
                    opacity: 0.4,
                  }}
                >
                  * Strategy started at 20th March 2021
                </Typography>
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
                      backgroundColor: "#FF6769",
                      border: "1px solid #E5E5F3",
                      borderRadius: "42px",
                      textTransform: "none",
                    }}
                  >
                    Stop
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
                    Change Settings
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          gap: 3,
        }}
      >
        <Box
          sx={{
            minWidth: "464px",
            height: "368px",
            border: "1px solid #E5E5F3",
            borderRadius: "16px",
            py: "40px",
            px: "48px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "32px",
              fontStyle: "normal",
              mb: 4,
            }}
          >
            Invested
          </Typography>
          <div style={{ width: "100%" }}>
            <CustomBarChart />
          </div>
        </Box>
        <Box
          sx={{
            minWidth: "464px",
            height: "369px",
            border: "1px solid #E5E5F3",
            borderRadius: "16px",
            py: "40px",
            px: "48px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "32px",
              fontStyle: "normal",
              mb: 4,
              maxWidth: "200px",
            }}
          >
            Excepted Risk Score Distribution
          </Typography>
          <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
            <img src="/chat-2.svg" alt="Risk Score Distribution" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              {scores.map((score) => (
                <Box
                  key={score.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: score.color,
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#0D0F52",
                    }}
                  >
                    {`${score.label} - ${score.percentage}`}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "32px",
            fontStyle: "normal",
            mx: 2,
          }}
        >
          You Might Want to Know
        </Typography>
        <Faq />
      </Box>
    </>
  );
};
