"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="py-10 px-[clamp(1.5rem,5vw,6rem)] border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs uppercase tracking-[0.08em] font-medium text-foreground/60">
          &copy; {currentYear} NC. {t("footer.rights")}
        </p>
        <p className="text-xs uppercase tracking-[0.08em] font-medium text-foreground/60">
          {t("footer.available")}
        </p>
      </div>
    </footer>
  );
}
