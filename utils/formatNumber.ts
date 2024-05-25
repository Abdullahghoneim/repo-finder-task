const formatStars = (stars: number) => {
  if (stars >= 1000) {
    return (stars / 1000).toFixed(1) + "K";
  }
  return stars.toString();
};

export default formatStars;
