export const sort = (data, config) => {
  const sortedData = [...data];
  if (config === 'none') {
    return sortedData;
  }
  if (config === 'priceAsc') {
    sortedData.sort((a, b) => a.price - b.price);
  }
  if (config === 'priceDesc') {
    sortedData.sort((a, b) => b.price - a.price);
  }
  if (config === 'nameAsc') {
    sortedData.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }
  if (config === 'nameDesc') {
    sortedData.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (config === 'ratingAsc') {
    sortedData.sort((a, b) => a.rating.rate - b.rating.rate);
  }
  if (config === 'ratingDesc') {
    sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
  }
  return sortedData;
};
