// app/error.tsx
"use client";

import { useEffect } from "react";
import ErrorMessage from "@/components/Error/ErrorMessage";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Client Error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-card-background text-text-primary p-4">
      <ErrorMessage message={error.message} reset={reset} />
    </div>
  );
}
