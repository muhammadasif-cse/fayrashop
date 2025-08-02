export const product_utils = {
  formatPrice: (price: number, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  },

  calculateDiscount: (originalPrice: number, salePrice: number) => {
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  },

  getStockStatus: (stock: number) => {
    if (stock === 0)
      return { status: "out", label: "Out of Stock", class: "stock-out" };
    if (stock <= 5)
      return { status: "low", label: `Only ${stock} left`, class: "stock-low" };
    return { status: "in", label: "In Stock", class: "stock-in" };
  },

  renderStars: (rating: number, maxRating = 5) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    return {
      full: fullStars,
      half: hasHalfStar ? 1 : 0,
      empty: emptyStars,
    };
  },
};
