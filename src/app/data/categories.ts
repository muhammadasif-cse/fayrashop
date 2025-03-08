export interface ISidebarCategory {
  name: string;
  route: string;
}

export interface ISidebarCategories {
  name: string;
  route: string;
  category?: ISidebarCategory[];
}

export const categories: ISidebarCategories[] = [
  {
    name: "Woman’s Fashion",
    route: "/",
    category: [
      { name: "Single Button Blazer", route: "/" },
      { name: "Casual Wear Straight Pant", route: "/" },
      { name: "Puff Sleeve Party Dress", route: "/" },
      { name: "Shirt A Line Dress", route: "/" },
      { name: "Ethnic Style Shirt Dress", route: "/" },
      { name: "Regular Fit Printed Shirt", route: "/" },
    ],
  },
  {
    name: "Men’s Fashion",
    route: "/",
    category: [
      { name: "Shirts", route: "/" },
      { name: "Pants", route: "/" },
    ],
  },
  {
    name: "Electronics",
    route: "/",
    category: [
      { name: "Mobile Phones", route: "/" },
      { name: "Laptops", route: "/" },
    ],
  },
  {
    name: "Home & Lifestyle",
    route: "/",
    category: [
      { name: "Furniture", route: "/" },
      { name: "Decor", route: "/" },
    ],
  },
  {
    name: "Medicine",
    route: "/",
    category: [
      { name: "Vitamins", route: "/" },
      { name: "Supplements", route: "/" },
    ],
  },
  {
    name: "Sports & Outdoor",
    route: "/",
    category: [
      { name: "Fitness Equipment", route: "/" },
      { name: "Outdoor Gear", route: "/" },
    ],
  },
  {
    name: "Baby’s & Toys",
    route: "/",
    category: [
      { name: "Toys", route: "/" },
      { name: "Baby Care", route: "/" },
    ],
  },
  {
    name: "Groceries & Pets",
    route: "/",
    category: [
      { name: "Pet Food", route: "/" },
      { name: "Groceries", route: "/" },
    ],
  },
  {
    name: "Health & Beauty",
    route: "/",
    category: [
      { name: "Skincare", route: "/" },
      { name: "Makeup", route: "/" },
    ],
  },
  {
    name: "New Check Single",
    route: "/",
  },
];
