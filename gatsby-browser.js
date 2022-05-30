import * as React from "react";
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";

import { linkResolver } from "./src/utils/link-resolver";
import NewsDetailPage from "./src/templates/news-detail";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          news: NewsDetailPage,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
);
