const HighlightText = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex items-center gap-4">
      <hr className="bg-danger w-5 h-10 rounded-sm" />
      <div className="text-danger font-semibold">{children}</div>
    </div>
  );
};

export default HighlightText;
