interface AdBannerProps {
  slot?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export function AdBanner({ format = "horizontal", className = "" }: AdBannerProps) {
  const hoehe = format === "horizontal" ? "h-24" : format === "rectangle" ? "h-64" : "h-96";

  return (
    <div
      className={`w-full ${hoehe} bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center ${className}`}
    >
      <div className="text-center text-gray-400 dark:text-gray-500">
        <p className="text-xs uppercase tracking-widest font-medium">Werbeanzeige</p>
        <p className="text-xs mt-1">Google AdSense</p>
        {/* In Produktion: <ins className="adsbygoogle" ... /> */}
      </div>
    </div>
  );
}
