interface ProjectThumbProps {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  icon?: string;
  className?: string;
}

export default function ProjectThumb({
  title,
  gradientFrom,
  gradientTo,
  icon,
  className = "",
}: ProjectThumbProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-3 ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
    >
      {/* decorative circles */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-6 w-44 h-44 rounded-full bg-white/10" />

      {icon ? (
        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-lg overflow-hidden flex items-center justify-center p-2">
          <img
            src={icon}
            alt={`${title} logo`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <span
          className="relative z-10 text-white font-bold text-center px-4 drop-shadow-md"
          style={{ fontSize: "clamp(1.1rem, 4vw, 1.6rem)", letterSpacing: "0.01em" }}
        >
          {title}
        </span>
      )}

      {/* live badge */}
      <span className="relative z-10 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white text-xs font-bold tracking-wider">LIVE</span>
      </span>
    </div>
  );
}
