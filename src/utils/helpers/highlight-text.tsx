const HighlightText = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex items-center gap-4">
      <hr className="bg-primary w-4 h-10 rounded-sm" />
      <div className="text-primary font-semibold">{children}</div>
    </div>
  );
};

export default HighlightText;
