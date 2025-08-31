import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      {/* TEMP: containerul de pagină ca să vezi offset-ul de 240px */}
      <main className="page">
        <h1>Test layout</h1>
        <p>
          Dacă vezi textul ăsta la dreapta, înseamnă că offset-ul de
          <strong> 240px</strong> funcționează și sidebar-ul nu acoperă conținutul.
        </p>
      </main>
    </div>
  );
}
