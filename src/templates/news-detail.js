import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ($uid: String) {
    prismicNews(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
  }
`;

const NewsDetailPage = ({ data }) => {
  // console.log(data);
  const title = data.prismicNews.data.title.text;
  const body = data.prismicNews.data.body.html;
  return (
    <main>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </main>
  );
};

export default NewsDetailPage;
