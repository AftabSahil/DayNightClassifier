// eslint-disable react/jsx-no-undef
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route element={<NotFound/>} />
    </Routes>
   </BrowserRouter>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;