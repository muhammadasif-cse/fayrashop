"use client";
import {
  EyeIcon,
  HeartIcon,
  Trash2Icon,
  StarHalfIcon,
  StarIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductCard = ({
  product,
  actions = {},
  showActions = {
    discount: true,
    heart: true,
    eye: true,
    cart: true,
    trash: false,
  },
  className = "",
}: IProductCardProps) => {
  if (!product) {
    return (
      <div
        className={`bg-secondary/30 w-[270px] h-[320px] flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">Product not available</p>
      </div>
    );
  }

  const [isFavorite, setIsFavorite] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  //* product actions
  const handleAddToCart = () => {
    try {
      if (actions.onAddToCart) {
        actions.onAddToCart(product);
      } else {
        console.log(`Added ${product.name} to cart`);
        alert("Successfully added to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleToggleFavorite = () => {
    try {
      setIsFavorite(!isFavorite);
      if (actions.onToggleFavorite) {
        actions.onToggleFavorite(product);
      } else {
        console.log(
          `${isFavorite ? "Removed from" : "Added to"} favorites: ${
            product.name
          }`
        );
        alert("Successfully updated favorites");
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleView = () => {
    try {
      if (actions.onView) {
        actions.onView(product);
      } else {
        console.log(`Viewing ${product.name}`);
        alert("Navigating to view");
      }
    } catch (error) {
      console.error("Error viewing product:", error);
    }
  };

  const handleRemove = () => {
    try {
      if (actions.onRemove) {
        actions.onRemove(product);
      } else {
        console.log(`Removed ${product.name}`);
        alert(`Removed ${product.name}`);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  //* product star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon key={i} size={16} className="fill-rating text-rating" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalfIcon
            key={i}
            size={16}
            className="fill-rating/50 text-rating"
          />
        );
      } else {
        stars.push(<StarIcon key={i} size={16} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className={`bg-accent/30 w-[270px] group ${className}`}>
      <div className="relative rounded-sm bg-accent overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={270}
          height={250}
          className="h-[250px] w-[270px] px-14 py-10 group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute top-3 left-3">
          {product.isNew && (
            <div className="px-2 w-fit rounded py-1 text-xs text-accent bg-chart-2 mb-2">
              New
            </div>
          )}
          {showActions.discount && discountPercentage > 0 && (
            <div className="px-2 w-fit rounded py-1 text-xs text-white bg-primary">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        {/* action buttons */}
        <div className="absolute top-3 group-hover:opacity-100 flex opacity-0 right-3 ease-in-out duration-500 flex-col gap-2">
          {showActions.trash && (
            <button
              onClick={handleRemove}
              className="cursor-pointer bg-primary text-white rounded-full w-9 h-9 p-1.5"
              aria-label="Remove product"
              title="Remove product"
            >
              <Trash2Icon size={24} />
            </button>
          )}

          {showActions.heart && (
            <button
              onClick={handleToggleFavorite}
              className={`cursor-pointer rounded-full w-9 h-9 p-1.5 transition-colors ${
                isFavorite ? "bg-primary text-white" : "bg-white text-black/70"
              }`}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <HeartIcon
                size={24}
                className={isFavorite ? "fill-current" : ""}
              />
            </button>
          )}

          {showActions.eye && (
            <button
              onClick={handleView}
              className="bg-white text-black/70 rounded-full w-9 h-9 p-1.5 cursor-pointer transition-colors"
              aria-label="View product details"
              title="View product details"
            >
              <EyeIcon size={24} />
            </button>
          )}
        </div>

        {showActions.cart && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 w-full h-0 p-2 text-base font-medium text-center text-white transition-all duration-300 bg-black rounded-b-sm opacity-0 cursor-pointer group-hover:h-10 group-hover:opacity-100"
            aria-label="Add to cart"
          >
            <div className="flex gap-3 items-center justify-center">
              Add <ShoppingCartIcon size={20} />
            </div>
          </button>
        )}
      </div>

      {/* product details */}
      <div className="py-4 px-2 space-y-2">
        <h4 className="text-base font-medium" title={product.name}>
          {product.name}
        </h4>

        {product.originalPrice ? (
          <div className="space-y-2">
            <p className="space-x-3 text-base font-medium">
              <span className="text-primary font-bold">$ {product.price}</span>
              <span className="line-through text-muted-foreground">
                $ {product.originalPrice}
              </span>
            </p>
            <div className="flex items-center font-semibold text-muted-foreground">
              {renderStars()}
              <p className="ml-2">({product.reviewCount})</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 font-semibold text-muted-foreground">
            <p className="text-danger">$ {product.price}</p>
            <div className="flex items-center">{renderStars()}</div>
            <p>({product.reviewCount})</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
