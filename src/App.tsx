import { AppRouter } from "./routes/AppRouter";

import { Navbar, Footer } from "./ui/components";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};
