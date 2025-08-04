import { IHighlightCard } from "@/utils/common/interfaces/highlight-card.inteface";
import Title from "@/utils/helpers/title";
import React from "react";

const HighlightCard = ({
  name,
  Icon,
  description,
  is_border = false,
  is_hover = false,
  size = "md",
}: IHighlightCard) => {
  const sizeClasses = {
    sm: "!text-xl",
    md: "!text-2xl",
    lg: "!text-4xl",
  };

  return (
    <div
      className={`group p-4 ${is_border && "border border-accent"} ${
        is_hover &&
        "hover:bg-primary hover:text-white hover:drop-shadow-xl hover:shadow-sm"
      } rounded`}
    >
      {Icon ? (
        <div
          className={`rounded-full w-fit mx-auto ${
            is_hover && "group-hover:border-red-400 group-hover:bg-background"
          } bg-foreground border-12 border-accent`}
        >
          <Icon
            className={`w-16 h-16 p-2 ${
              is_hover && "group-hover:text-secondary-foreground"
            } text-secondary`}
          />
        </div>
      ) : null}

      <Title
        style={[sizeClasses[size], Icon ? "mt-8" : "", "text-center mb-2"].join(
          " "
        )}
      >
        {name}
      </Title>
      {description && <p className="text-center">{description}</p>}
    </div>
  );
};

export default HighlightCard;
