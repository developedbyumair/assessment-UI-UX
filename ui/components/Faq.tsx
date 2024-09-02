import { Icon } from "@iconify/react";
import {
  AccordionDetails,
  AccordionSummary,
  styled,
  Accordion as StyledAccordion,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

const Accordion = styled(StyledAccordion)({
  background: "transparent",
  boxShadow: "none",
  border: "none",
});

export const Faq = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon icon="bi:chevron-down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why should I trust this tool?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you can provide the explanation on why this tool is
            trustworthy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon icon="bi:chevron-down" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What risks are related to investments?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you can detail the risks involved in investments.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon icon="bi:chevron-down" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What is the Auto-Investment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Explain what Auto-Investment is here.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
