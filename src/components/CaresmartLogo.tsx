export default function CaresmartLogo({ size = "default" }: { size?: "default" | "small" }) {
  const logoSize = size === "small" ? "w-8 h-8" : "w-12 h-12";
  const textSize = size === "small" ? "text-lg" : "text-2xl";

  return (
    <div className="flex items-center gap-3">
      <div className={`${logoSize} bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex flex-col justify-center items-center gap-1.5 flex-shrink-0`}>
        <div className="w-6 h-1 bg-black rounded-full" />
        <div className="w-6 h-1 bg-black rounded-full" />
        <div className="w-6 h-1 bg-black rounded-full" />
      </div>
      <span className={`font-bold text-gray-900 ${textSize}`}>caresmart</span>
    </div>
  );
}
