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
        "md:text-4xl text-2xl font-semibold" + (style ? ` ${style}` : "")
      }
    >
      {children}
    </h1>
  );
};

export default Title;
