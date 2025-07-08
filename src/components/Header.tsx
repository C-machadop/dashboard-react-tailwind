import { useState } from "react";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const onToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="row-start-1 bg-white  border-b border-gray-200  px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 ">Dashboard</h1>
          <p className="text-sm text-gray-500 d">Welcome back, John!</p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-gray-100  hover:bg-gray-200  transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <UserMenu />
        </div>
      </div>
    </header>
  );
};
