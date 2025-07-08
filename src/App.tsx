import { DashboardCards } from "./components/DashboardCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[280px_1fr] min-h-screen bg-gray-50 transition-colors">
      <SideBar />
      <div className="grid grid-rows-[auto_1fr] min-h-screen">
        <Header />
        <main className="p-6 row-start-2">
          <DashboardCards />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
