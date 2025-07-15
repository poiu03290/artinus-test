import { BrowserRouter } from "react-router-dom";

import ProductListPage from "./components/ProductListPage";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ProductListPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
