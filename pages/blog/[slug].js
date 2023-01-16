import { Box } from "@mui/system";
import { BreadcrumbsNavagation } from "../../components/BreadcrumbsNavagation";
import { getBlogPage } from "../../src/contentful";
import { renderComponent } from "../../src/renderer";

export default function BlogPage({ content, title }) {
  return (
    <Box sx={{ maxWidth: "1440px", width: "100%", margin: "auto" }}>
      <BreadcrumbsNavagation
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Blog", href: "/blog" },
        ]}
        current={title}
      />
      {content.map((it, key) => renderComponent(it, key))}
    </Box>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const blog = await getBlogPage(slug);
  return {
    props: { ...blog.fields },
  };
}
