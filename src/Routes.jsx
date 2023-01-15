import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Links() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>Routes</div>} />
      </Routes>
    </main>
  );
}
