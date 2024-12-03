import { Suspense } from "react";
import ErrorPage from "./ErrorPage"; // Import komponen ErrorPage

export default function ErrorWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-[#18181B] text-white">
          <p className="text-lg">Memuat halaman...</p>
        </div>
      }
    >
      <ErrorPage />
    </Suspense>
  );
}
