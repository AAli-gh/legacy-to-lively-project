import { createFileRoute, redirect } from "@tanstack/react-router";

// The portfolio is a static site served from public/; send "/" to its home page.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
  head: () => ({
    meta: [
      { title: "علی | AI Engineer & Python Developer" },
      { name: "description", content: "پورتفولیوی شخصی یک مهندس هوش مصنوعی و توسعه‌دهنده پایتون." },
      { property: "og:title", content: "علی | AI Engineer & Python Developer" },
      { property: "og:description", content: "پروژه‌های هوش مصنوعی، یادگیری ماشین و توسعه پایتون." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
