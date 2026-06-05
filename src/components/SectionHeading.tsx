interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  underline?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-8"}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {title}
        {underline && (
          <span className="block h-1 w-16 bg-gradient-to-r from-[#1C93D1] to-green-500 mt-4 mx-auto" />
        )}
      </h2>
      {subtitle && <p className="text-lg text-gray-600 mt-4">{subtitle}</p>}
    </div>
  );
}
