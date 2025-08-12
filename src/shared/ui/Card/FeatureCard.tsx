import React from "react";
import clsx from "clsx";

type HeightProp = number | string | undefined;

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  /** HEX یا نام رنگ واکنشی مثل #FFEBD1 */
  bg?: string; // light color (dynamic)
  /** کلاس Tailwind برای دارک */
  darkBgClass?: string; // e.g. "dark:bg-gray-700"
  height?: HeightProp;
  className?: string;
  worksCard?: boolean | string;
  link?: string;
}

const pxHeight = (h: HeightProp) =>
  typeof h === "number" ? `${h}px` : undefined;

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  bg = "#FFEBD1",
  darkBgClass = "dark:bg-gray-700",
  height = 169,
  worksCard,
  link,
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-full p-6 flex flex-col justify-between gap-3 rounded-[20px]",
        "bg-[var(--card-bg)]", // لایت از CSS var
        darkBgClass, // دارک با Tailwind
        className
      )}
      style={{ ["--card-bg" as any]: bg, minHeight: pxHeight(height) }}
    >
      <div className="flex flex-col gap-3 items-start">
        <div className="flex gap-3">
          <div className="shrink-0">
            {icon ? (
              <span className="text-neutral-700 dark:text-neutral-200">
                {icon}
              </span>
            ) : null}
          </div>
          <div className="font-bold text-neutral-900 dark:text-neutral-100">
            {title}
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-light text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      {worksCard ? (
        <div className="w-fit cursor-pointer group">
          <div className="bg-neutral-400 dark:bg-gray-500 group-hover:bg-white dark:group-hover:bg-neutral-600 duration-200 px-2 rounded-lg">
            <a
              href={link}
              className="font-bold text-white dark:text-neutral-100 group-hover:text-neutral-400 dark:group-hover:text-white"
            >
              Link
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FeatureCard;
