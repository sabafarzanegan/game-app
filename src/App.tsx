import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { AppProvider } from "./context/Themeprovider";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
