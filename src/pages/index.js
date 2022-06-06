import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allPrismicNews {
      edges {
        node {
          uid
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
      <ul>
        {data.allPrismicNews.edges.map((item) => {
          const { uid, data } = item.node;
          return (
            <li key={uid}>
              <a href={`/news/${uid}`}>{data.title.text}</a>
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default IndexPage;
