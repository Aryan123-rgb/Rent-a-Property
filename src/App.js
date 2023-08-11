import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CardLayout from "./components/CardLayout";
import { PropertyProvider } from "./Context/PropertyProvider";

function App() {
  return (
    <div style={{ background: "#f5f6fa" }}>
      <PropertyProvider>
        <Navbar />
        <SearchBar />
        <Filters />
        <CardLayout />
      </PropertyProvider>
    </div>
  );
}

export default App;
