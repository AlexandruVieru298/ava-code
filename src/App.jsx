import Hero from "./components/Hero/Hero.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TopbarMobile from "./components/TopbarMobile/TopbarMobile.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <TopbarMobile />
      <main className="page">
        <Hero />
      </main>
    </div>
  );
}
