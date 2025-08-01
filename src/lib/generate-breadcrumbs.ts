export interface TBreadcrumb {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export function generateBreadcrumbs(pathname: string): TBreadcrumb[] {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: TBreadcrumb[] = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      label: decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      href: index < segments.length - 1 ? href : undefined,
      isCurrent: index === segments.length - 1,
    };
  });
  // if need default breadcrumb for root path just replace return [{ label: "Home", href: "/" }, ...breadcrumbs]
  return [...breadcrumbs];
}
