interface IProductColor {
  value: string;
  code: string;
  name?: string;
}

interface IProduct {
  id: string | number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  colors?: IProductColor[];
  isNew?: boolean;
}

interface IProductActions {
  onAddToCart?: (product: IProduct) => void;
  onToggleFavorite?: (product: IProduct) => void;
  onView?: (product: IProduct) => void;
  onRemove?: (product: IProduct) => void;
}

interface IProductCardProps {
  product?: IProduct;
  actions?: IProductActions;
  showActions?: {
    discount?: boolean;
    heart?: boolean;
    eye?: boolean;
    cart?: boolean;
    trash?: boolean;
    colors?: boolean;
  };
  className?: string;
}
