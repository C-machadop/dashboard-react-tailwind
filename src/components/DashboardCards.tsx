import { ArrowDown, ArrowUp } from "lucide-react";
import { cards } from "../data/cardData";

export const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 auto-rows-[minmax(150px,auto)]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${
            card.size === "small"
              ? "col-span-1 row-span-1"
              : card.size === "medium"
              ? "col-span-1 row-span-2 md:row-span-1 lg:row-span-2"
              : card.size === "large"
              ? "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
              : card.size === "wide"
              ? "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1"
              : "col-span-1 row-span-1"
          } ${card.color} ${
            card.color.includes("gradient")
              ? "text-white"
              : "border border-gray-200"
          } rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-0.5`}
        >
          <div className="flex items-start justify-between mb-4">
            <h3
              className={`text-sm font-medium ${
                card.color.includes("gradient")
                  ? "text-white/90"
                  : "text-gray-600"
              }`}
            >
              {card.title}
            </h3>
            {card.change && (
              <span
                className={`flex items-center text-xs px-2 py-1 rounded-full ${
                  card.trend === "up"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {card.trend === "up" ? (
                  <ArrowUp size={12} />
                ) : (
                  <ArrowDown size={12} />
                )}
                {card.change}
              </span>
            )}
          </div>

          <div
            className={`text-2xl font-bold ${
              card.color.includes("gradient") ? "text-white" : "text-gray-900"
            }`}
          >
            {card.value}
          </div>

          {card.size === "large" && (
            <div className="mt-4 h-32 bg-gray-100  rounded-lg flex items-center justify-center">
              <span className="text-gray-500 ">Chart Placeholder</span>
            </div>
          )}

          {(card.size === "medium" || card.size === "wide") &&
            card.title.includes("Activity") && (
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Activity item {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};
