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
  console.log(data);
  return (
    <main>
      <h1>News List</h1>
    </main>
  )
}

export default IndexPage;
