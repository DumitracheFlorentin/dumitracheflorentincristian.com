export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col mx-6 sm:mx-8 md:mx-0 gap-8 sm:gap-16">
      {children}
    </div>
  );
}
