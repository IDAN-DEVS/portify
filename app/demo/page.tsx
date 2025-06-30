"use client";

import { AVAILABLE_TEMPLATES } from "@/config/app-data/templates/config";
import BaseTemplate from "@/templates/base/page";
import ShadowTemplate from "@/templates/shadow/page";
import { useEffect } from "react";
import Link from "next/link";

const DemoPage = () => {
  let template = "";
  if (typeof window !== "undefined") {
    template = new URLSearchParams(window?.location?.search).get("template") || "";
  }

  useEffect(() => {
    // Reset scroll position when template changes
    window.scrollTo(0, 0);
  }, [template]);

  const renderTemplate = () => {
    switch (template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
      case AVAILABLE_TEMPLATES.SHADOW:
        return <ShadowTemplate />;
      default:
        return <BaseTemplate />;
    }
  };

  return (
    <div>
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="bg-blue-500 text-xs font-medium px-2.5 py-1 rounded">
              DEMO
            </span>
            <span className="text-sm">
              Viewing the {template || "Base"} template
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/IDAN-DEVS/portify"
              target="_blank"
              className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Use Template
            </Link>
            <Link
              href="/#templates"
              className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              ← Back to Templates
            </Link>
          </div>
        </div>
      </div>

      {/* Add padding to account for the demo banner */}
      <div className="pt-14">{renderTemplate()}</div>
    </div>
  );
};

export default DemoPage;
