
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  // Einfaches Layout - zeigt nur den Seiteninhalt
  // Navigation wird über Links in den Seiten selbst geregelt
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
