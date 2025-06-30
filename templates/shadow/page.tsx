"use client";

import { ShadowNav } from "../../components/ShadowTemplate/nav";
import { ShadowHero } from "../../components/ShadowTemplate/hero";
import { ShadowExperience } from "../../components/ShadowTemplate/experience";
import { ShadowSkills } from "../../components/ShadowTemplate/skills";
import { ShadowProjects } from "../../components/ShadowTemplate/project";
import { ShadowLayout } from "../../components/ShadowTemplate/layout";
import { ShadowFooter } from "@/components/ShadowTemplate/footer";

export default function ShadowTemplatePage() {
  return (
    <ShadowLayout>
      <ShadowNav />
      <ShadowHero />
      <ShadowExperience />
      <ShadowSkills />
      <ShadowProjects />
      <ShadowFooter />
    </ShadowLayout>
  );
}
