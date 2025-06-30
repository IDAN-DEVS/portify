import React from "react";
import { AppSettingData } from "../../config/app-data/appSetting";
import { AVAILABLE_TEMPLATES } from "../../config/app-data/templates/config";
import BaseTemplate from "../../templates/base/page";
import NeonTemplate from "../../templates/neon/page";
import ShadowLayout from "../../templates/shadow/page";

export default function TemplatesPage() {
  return (() => {
    switch (AppSettingData.template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
      case AVAILABLE_TEMPLATES.NEON:
        return <NeonTemplate />;
      case AVAILABLE_TEMPLATES.SHADOW:
        return <ShadowLayout />;
    }
  })();
}
