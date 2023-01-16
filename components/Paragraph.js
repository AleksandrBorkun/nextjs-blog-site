import MuiMarkdown from "mui-markdown";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import styled from "@emotion/styled";

const MarkdownImage = styled.img`
  max-width: 100%;
`;

const overrides = {
  img: ({ alt, src }) => (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <MarkdownImage alt={alt} src={`${src}?q=80&h=600`} />
    </Box>
  ),
  p: (props) => {
    return <Typography component={"div"} variant="body1" {...props} />;
  },
};

export const Paragraph = ({ text }) => (
  <MuiMarkdown overrides={overrides}>{text}</MuiMarkdown>
);
