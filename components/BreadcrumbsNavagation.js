import {
  Autocomplete,
  Breadcrumbs,
  Button,
  Link as MUILink,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";

export const BreadcrumbsNavagation = ({ breadcrumbs, current }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (_, inputValue) => {
    setValue(inputValue);
    if (inputValue.trim().length < 3) return;
    axios(`/api/search?query=${inputValue}`)
      .then((resp) => setData(resp.data))
      .catch((e) => console.error(e));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { sm: "center", xs: "start" },
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        margin="2em 0"
      >
        {breadcrumbs.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            passHref
            style={{ color: "inherit" }}
            legacyBehavior
          >
            <MUILink underline="hover" color="inherit">
              {title}
            </MUILink>
          </Link>
        ))}
        <Typography color="text.primary">{current}</Typography>
      </Breadcrumbs>

      <Autocomplete
        freeSolo
        options={data.map((option) => option.title)}
        value={value}
        onInputChange={onChange}
        sx={{
          marginLeft: "auto",
          minWidth: "300px",
          maxWidth: "100%",
          width: { xs: "100%", sm: "auto" },
          marginRight: { xs: "auto", sm: 0 },
        }}
        renderOption={(option) => {
          const post = data.filter((it) => it.title === option.key)[0];
          return (
            <Link
              href={post.href}
              passHref
              key={post.title}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                sx={{ display: "block", width: "100%", textAlign: "start" }}
                variant="text"
                onClick={() => {
                  setValue("");
                  setData([]);
                }}
              >
                {post.title}
              </Button>
            </Link>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search article..." />
        )}
      />
    </Box>
  );
};
