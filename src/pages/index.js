import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allPrismicNews {
      edges {
        node {
          uid
          url
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  // console.log(data);
  return (
    <main>
      <h1>News List</h1>
      {data.allPrismicNews.edges.map((item) => {
        const { uid, url, data } = item.node;
        return (
          <li key={uid}>
            <a href={url}>{data.title.text}</a>
          </li>
        );
      })}
    </main>
  )
}

export default IndexPage;
