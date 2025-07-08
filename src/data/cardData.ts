interface CardData {
  title: string;
  value: string;
  change?: string;
  trend?: string;
  size: string;
  color: string;
}

export const cards: CardData[] = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+12.5%",
    trend: "up",
    size: "small",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  {
    title: "Active Users",
    value: "2,345",
    change: "+5.2%",
    trend: "up",
    size: "small",
    color: "bg-gradient-to-r from-green-500 to-green-600",
  },
  {
    title: "Conversion Rate",
    value: "3.45%",
    change: "-2.1%",
    trend: "down",
    size: "small",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
  },
  {
    title: "Monthly Growth",
    value: "12.5%",
    change: "+8.3%",
    trend: "up",
    size: "small",
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
  },
  {
    title: "Sales Analytics",
    value: "Interactive Chart",
    size: "large",
    color: "bg-white dark:bg-gray-800",
  },
  {
    title: "Recent Activity",
    value: "Activity Feed",
    size: "medium",
    color: "bg-white dark:bg-gray-800",
  },
  {
    title: "Top Products",
    value: "Product List",
    size: "medium",
    color: "bg-white dark:bg-gray-800",
  },
  {
    title: "System Status",
    value: "All Systems Operational",
    size: "wide",
    color: "bg-gradient-to-r from-emerald-500 to-emerald-600",
  },
];
