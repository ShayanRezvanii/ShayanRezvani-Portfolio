import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "../layouts/Container";
import Navbar from "../sections/Navbar";

const Landing = lazy(() => import("../pages/Landing"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));

function LoadingSpinner() {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
