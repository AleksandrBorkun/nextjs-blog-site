import { Box } from "@mui/system";
import { BlogCover } from "../../components/BlogCover";
import { BreadcrumbsNavagation } from "../../components/BreadcrumbsNavagation";
import { BlogGrid } from "../../components/Grid";
import { getBlogPages } from "../../src/contentful";

function Home({ blogs }) {
  return (
    <Box maxWidth={"1440px"} margin="auto">
      <BreadcrumbsNavagation
        breadcrumbs={[{ title: "Home", href: "/" }]}
        current={"Blog"}
      />

      <BlogGrid>
        {blogs &&
          blogs.map((blog, key) => <BlogCover key={key} {...blog.fields} />)}
      </BlogGrid>
    </Box>
  );
}

export default Home;

export async function getServerSideProps() {
  const blogPages = await getBlogPages();

  return {
    props: { blogs: blogPages },
  };
}
