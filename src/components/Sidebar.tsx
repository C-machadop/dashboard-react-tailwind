import {
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  PanelLeft,
  type LucideProps,
} from "lucide-react";

interface MenuItems {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  active: boolean;
}

export const SideBar = () => {
  const menuItems: MenuItems[] = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: LayoutGrid, label: "Projects", active: false },
    { icon: LayoutList, label: "Tasks", active: false },
    { icon: PanelLeft, label: "Reports", active: false },
  ];
  return (
    <aside className="sidebar bg-white  border-r border-gray-200  p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold">AdminGrid</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer
              ${
                item.active
                  ? "bg-blue-50  text-blue-600 "
                  : "text-gray-600  hover:bg-gray-50"
              }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
