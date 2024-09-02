import Box from "@mui/material/Box";
import { Header, RightContent, SideBar } from "../ui/generic";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <SideBar />
        <Box
          sx={{
            mr: "65px",
          }}
        >
          <RightContent />
        </Box>
      </Box>
    </>
  );
}
