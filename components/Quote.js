import { Alert, AlertTitle } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import styled from "@emotion/styled";

const QuoteComponent = styled(Alert)`
  .MuiAlert-message {
    width: 100%;
    text-align: center;
  }
  margin: 1em 0;
`;

export const Quote = ({ quote, author }) => (
  <QuoteComponent severity="info" icon={<AutoStoriesIcon fontSize="inherit" />}>
    <AlertTitle>{quote}</AlertTitle>
    author — <strong>{author}</strong>
  </QuoteComponent>
);
