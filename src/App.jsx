import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NevadaPage from "./pages/Nevada";
import SouthTexasPage from "./pages/SouthTexas";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<NevadaPage />} />
        <Route path="/south-texas" element={<SouthTexasPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
