import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Case Management & EDWP Support",
  description:
    "Explore Caresmart's case management, assessment, family support, and community resource services for Georgia's EDWP participants.",
  openGraph: {
    title: "Our Services | Caresmart",
    description:
      "Case management, assessments, family support, and community resources for Georgia's elderly and disabled populations.",
    url: "https://caresmartllc.net/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
