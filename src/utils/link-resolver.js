exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "news": {
      return `/news/${doc.uid}`;
    }
    default:
      return "/";
  }
};
