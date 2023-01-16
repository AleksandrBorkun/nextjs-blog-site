import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Typography variant="h1" component={"h1"}>
        This is About
      </Typography>
      <br />
      <Link href={"/"} passHref>
        <Button variant="outlined">Go Home</Button>
      </Link>
    </>
  );
}
