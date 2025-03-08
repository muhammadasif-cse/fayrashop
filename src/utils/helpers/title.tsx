const Title = ({
  children,
  style,
}: Readonly<{
  children: string;
  style?: string;
}>) => {
  return (
    <h1
      className={
        "text-4xl font-semibold text-primary" + (style ? ` ${style}` : "")
      }
    >
      {children}
    </h1>
  );
};

export default Title;
