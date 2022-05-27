const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  // 全Newsのuidを取得
  const fetchedNews = await graphql(`
    query {
      allPrismicNews {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  // News毎に画面を生成
  fetchedNews.data.allPrismicNews.edges.forEach((edge) => {
    const { uid } = edge.node;
    actions.createPage({
      path: `/news/${uid}`,
      component: require.resolve("./src/templates/news-detail.js"),
      context: { uid },
    });
  });
};
