"use client"

import { GetCSRF } from "@/services/api/auth/authService";
import { useEffect, useState } from "react";

export function CSRFProvider({ children }: { children: React.ReactNode }) {
  const [csrfLoaded, setCsrfLoaded] = useState(false);
  const [csrfError, setCsrfError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCSRF = async () => {
      try {
        const result = await GetCSRF();
        if (result.success) {
          setCsrfLoaded(true);
          setCsrfError(null);
        } else {
          setCsrfError(result.error || 'CSRF fetch error');
          console.error("CSRF fetch error:", result.error);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setCsrfError(errorMessage);
        console.error("CSRF fetch error:", error);
      }
    };

    // Retry logic for CSRF token
    const retryFetch = async (attempts = 3) => {
      for (let i = 0; i < attempts; i++) {
        await fetchCSRF();
        if (csrfLoaded) break;
        
        if (i < attempts - 1) {
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        }
      }
    };

    retryFetch();
  }, []);

  // Show error state if CSRF fails after retries
  if (csrfError && !csrfLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Connection Error</h1>
          <p className="text-gray-600 mb-4">
            Unable to establish secure connection. Please check your internet connection and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 