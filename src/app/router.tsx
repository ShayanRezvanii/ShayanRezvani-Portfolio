import { Routes, Route, Navigate } from "react-router-dom";
import Container from "../layouts/Container";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Resume = lazy(() => import("../pages/Resume"));
const Works = lazy(() => import("../pages/Works"));
const Contact = lazy(() => import("../pages/Contact"));

function LoadingSpinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="work" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
