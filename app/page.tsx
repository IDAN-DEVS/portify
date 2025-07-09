import React from "react";
import { AppSettingData } from "../config/app-data/appSetting";
import { AVAILABLE_TEMPLATES } from "../config/app-data/templates/config";
import BaseTemplate from "../templates/base/page";
import NeonTemplate from "../templates/neon/page";
import ShadowLayout from "../templates/shadow/page";
import LandingPage from "./landing/page";

export default function Home() {
  // Check if we're in demo mode (environment variable or query parameter)
  const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

  // If demo mode is disabled, show the configured user template
  if (!isDemoMode) {
    switch (AppSettingData.template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
      case AVAILABLE_TEMPLATES.NEON:
        return <NeonTemplate />;
      case AVAILABLE_TEMPLATES.SHADOW:
        return <ShadowLayout />;
      default:
        return <BaseTemplate />;
    }
  }

  // Default to landing page in demo mode
  return <LandingPage />;
}
