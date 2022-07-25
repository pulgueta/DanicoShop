import { Routes, Route } from "react-router-dom";

import { Landing } from "../views";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
