import {
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  Menu,
  PanelLeft,
  X,
  type LucideProps,
} from "lucide-react";
import { useState } from "react";

interface MenuItems {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  active: boolean;
}

export const SideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems: MenuItems[] = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: LayoutGrid, label: "Projects", active: false },
    { icon: LayoutList, label: "Tasks", active: false },
    { icon: PanelLeft, label: "Reports", active: false },
  ];
  return (
    <aside className="bg-white border-b lg:border-r lg:border-b-0 border-gray-200 p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4 lg:mb-8">
        <h2 className="text-xl font-bold text-gray-900">AdminGrid</h2>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`
        ${isMobileMenuOpen ? "block" : "hidden"} 
        lg:block space-y-2
      `}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600hover:bg-gray-50"
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
