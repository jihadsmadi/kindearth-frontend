"use client"

import { GetCSRF } from "@/services/api/auth/authService";
import { useEffect } from "react";

export function CSRFProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const fetchCSRF = async () => {
      try {
        await GetCSRF();
      } catch (error) {
        console.error("CSRF fetch error:", error);
      }
    };
    fetchCSRF();
  }, []);

  return <>{children}</>;
} 