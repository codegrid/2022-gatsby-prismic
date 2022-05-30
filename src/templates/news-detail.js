import * as React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

export const query = graphql`
  query ($uid: String) {
    prismicNews(uid: { eq: $uid }) {
      _previewable
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
      <p><a href="/">トップへ</a></p>
    </main>
  );
};

export default withPrismicPreview(NewsDetailPage);
