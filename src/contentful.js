const contentful = require("contentful");

const CFUL_ACCESS_TOKEN = process.env.CFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "m13yea668kn4",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CFUL_ACCESS_TOKEN,
  environment: "master",
});

export function getBlogPage(slug) {
  return client
    .getEntries({ "fields.slug": slug, content_type: "blogPage", include: 3 })
    .then((resp) => resp.items[0])
    .catch((err) => console.log(err));
}

export function getBlogPages() {
  return client
    .getEntries({ content_type: "blogPage", include: 3 })
    .then((resp) => resp.items)
    .catch((err) => console.log(err));
}

export function searchBlogPages(query = "undefined undefined") {
  return client
    .getEntries({ query, content_type: "blogPage", include: 3 })
    .then((resp) => resp.items)
    .catch((err) => console.log(err));
}
