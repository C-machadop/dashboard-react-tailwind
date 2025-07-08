import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div className="dashboard-container min-h-screen bg-gray-50 transition-colors">
      <SideBar />
      <div className="main-content">
        <Header />
        <main className="content p-6"></main>
      </div>
    </div>
  );
}

export default App;
