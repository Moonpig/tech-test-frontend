const XhrLoader = function XhrLoader(app) {
  const req = new XMLHttpRequest();
  req.open('GET', '/proxy?url=https://search.moonpig.com/api/products?size=1000&offset=0&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job', true);
  req.onreadystatechange = () => {
    function parser(XhrRes) {
      const prods = JSON.parse(XhrRes).Products;
      const uniqIds = [];
      const uniqProds = [];
      // single loop O(n), loop within loop also poss but is O(n*2)
      // could make decision on device whether to have client perform search on data or server
      // eslint-disable-next-line no-restricted-syntax
      for (const prod of prods) {
        if (!uniqIds.includes(prod.ProductId)) {
          uniqIds.push(prod.ProductId);
          // USD to sterling conversion if required
          if (prod.Price.Currency === '$') {
            prod.Price.Value = Math.ceil((prod.Price.Value / 1.26) * 100) / 100;
          }
          uniqProds.push({
            id: prod.ProductId,
            title: prod.Title,
            price: prod.Price.Value,
            imgLink: prod.ProductImage.Link.Href,
            rating: prod.Reviews.AverageStarReviewRating,
          });
        }
      }
      return uniqProds;
    }
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 400) {
        const prods = parser(req.responseText);
        app.setState({ prodList: prods });
      } else {
        app.setState({ prodList: `Something is broken, please let us know: engineering.team@moonpig.com with reference: #${'someRef'}` });
      }
    }
  };
  req.send();
};

export default XhrLoader;
