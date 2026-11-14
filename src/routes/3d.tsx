import { createFileRoute, redirect } from "@tanstack/react-router";

// The 3D tour is a prebuilt static app in public/3d/.
export const Route = createFileRoute("/3d")({
  beforeLoad: () => {
    throw redirect({ href: "/3d/index.html" });
  },
  head: () => ({
    meta: [
      { title: "گالری دیجیتال | علی" },
      { name: "description", content: "تور سه‌بعدی پورتفولیوی علی." },
      { property: "og:title", content: "گالری دیجیتال | علی" },
      { property: "og:description", content: "تور سه‌بعدی پورتفولیوی علی." },
    ],
  }),
});
