export interface IHighlightCard {
  is_border?: boolean;
  is_hover?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  description?: string;
  size?: "sm" | "md" | "lg";
}
