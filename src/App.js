import Dashboard from "./Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#d3d3d3" }}>
      <nav className="text-bg-dark p-3 mb-4">Status Dashboard</nav>
      <Dashboard />
    </div>
  );
}

export default App;
