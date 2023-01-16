import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

function Home() {
  return (
    <Box textAlign={"center"}>
      <Typography component={"h1"} variant={"h1"}>
        Today you learn
      </Typography>
      <Typography component={"h2"} variant={"h2"}>
        Enter the world of IT today
      </Typography>
      <Link href="/blog" passHref>
        <Button variant="contained">Enter Blog</Button>
      </Link>
    </Box>
  );
}

export default Home;
