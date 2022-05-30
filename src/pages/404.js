import * as React from "react";
import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";

const NotFoundPage = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Not Found!</p>
  </div>
);

export default withPrismicUnpublishedPreview(NotFoundPage);
