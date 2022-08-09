import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./icons/style.css";
import HomePage from "./homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./routes/secondPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/secondPage" element={<SecondPage />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
