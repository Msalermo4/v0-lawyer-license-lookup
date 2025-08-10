"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}
