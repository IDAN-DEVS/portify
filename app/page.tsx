import React from "react";
import { AppSetting } from "../data/appSetting";
import { AVAILABLE_TEMPLATES } from "../data/templates/config";
import BaseTemplate from "../templates/base/page";
import NeonTemplate from "../templates/neon/page";

export default function Home() {
  return (() => {
    switch (AppSetting.template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
      case AVAILABLE_TEMPLATES.NEON:
        return <NeonTemplate />;
    }
  })();
}
