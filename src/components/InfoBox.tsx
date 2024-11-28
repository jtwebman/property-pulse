export default function InfoBox({
  className,
  heading,
  children,
  button,
}: Readonly<{
  className: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  button: React.ReactNode;
}>) {
  return (
    <div className={className}>
      {heading}
      {children}
      {button}
    </div>
  );
}
