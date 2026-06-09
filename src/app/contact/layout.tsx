import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Caresmart. Reach us by phone, email, or visit our Atlanta office. We're here to answer your questions about our services.",
  openGraph: {
    title: "Contact Us",
    description:
      "Reach our team by phone or email. We're here to help with case management questions and service referrals.",
    url: "https://caresmart.health/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
