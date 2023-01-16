import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export const BlogCover = ({ title, description, coverImage, slug }) => {
  const imageUrl = `https:${coverImage.fields.file.url}?q=80&h=200&w=200`;
  return (
    <Link
      passHref
      href={`/blog/${slug}`}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={coverImage.fields.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: { sm: "block", xs: "none" } }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
