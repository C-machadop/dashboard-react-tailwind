import { DashboardCards } from "./components/DashboardCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-[280px_1fr] md:grid-cols-1 md:grid-rows-[auto_1fr] lg:grid-cols-[280px_1fr] lg:grid-rows-1 bg-gray-50 transition-colors">
      <SideBar />
      <div className="min-h-screen grid grid-rows-[auto_1fr]">
        <Header />
        <main className="p-6 min-h-[calc(100vh-140px)]">
          <DashboardCards />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
