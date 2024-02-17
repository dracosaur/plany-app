'use client'
import { useState } from "react";
import HomePage from "@/containers/HomePage";
import LoginPage from "@/containers/LoginPage";

export default function Home() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(true)
  
  return (
    <main>
      {
        isAuthenticated ? <HomePage /> : <LoginPage />
      }
    </main>
  );
}
