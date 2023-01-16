// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchBlogPages } from "../../src/contentful";

export default async function handler(req, res) {
  const { query } = req.query;

  console.log("api query", query);
  searchBlogPages(query)
    .then((resp) => {
      const results = resp.map(({ fields: { title, slug } }) => ({
        title,
        href: `/blog/${slug}`,
      }));
      res.status(200).json(results);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ msg: "something went wrong" });
    });
}
