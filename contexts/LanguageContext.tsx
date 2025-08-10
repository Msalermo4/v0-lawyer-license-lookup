"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.directory": "Directorio",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.reviews": "Reseñas",
    "nav.data": "Datos",

    // Homepage
    "home.title": "Encuentra los Mejores Abogados de Puerto Rico",
    "home.subtitle":
      "Directorio completo de profesionales legales licenciados en Puerto Rico. Verifica credenciales, revisa acciones disciplinarias, y encuentra representación legal calificada.",
    "home.search.placeholder": "Buscar abogados, firmas, o números de colegiación...",
    "home.search.button": "Buscar Ahora",
    "home.stats.attorneys": "Abogados Licenciados",
    "home.stats.active": "Licencias Activas",
    "home.stats.municipalities": "Municipios Cubiertos",
    "home.stats.areas": "Áreas de Práctica",
    "home.results": "Resultados Encontrados",

    // Filters
    "filter.status": "Estado de Licencia",
    "filter.status.all": "Todos los Estados",
    "filter.status.active": "Activo",
    "filter.status.suspended": "Suspendido",
    "filter.status.revoked": "Revocado",
    "filter.status.probation": "Probatoria",
    "filter.municipality": "Municipio",
    "filter.municipality.all": "Todos los Municipios",
    "filter.area": "Área de Práctica",
    "filter.area.all": "Todas las Áreas",
    "filter.clear": "Limpiar Filtros",

    // Attorney Profile
    "profile.contact": "Información de Contacto",
    "profile.areas": "Áreas de Práctica",
    "profile.experience": "Años de Experiencia",
    "profile.disciplinary": "Acciones Disciplinarias",
    "profile.complaints": "Quejas Éticas",
    "profile.languages": "Idiomas",
    "profile.education": "Educación",
    "profile.admissions": "Admisiones al Foro",
    "profile.reviews": "Reseñas",
    "profile.rating": "Calificación",
    "profile.write_review": "Escribir Reseña",

    // Status
    "status.active": "Activo",
    "status.suspended": "Suspendido",
    "status.revoked": "Revocado",
    "status.probation": "Probatoria",
    "status.not_authorized": "No autorizado para ejercer",

    // Common
    "common.phone": "Teléfono",
    "common.email": "Correo",
    "common.website": "Sitio Web",
    "common.address": "Dirección",
    "common.view_profile": "Ver Perfil Completo",
    "common.contact_attorney": "Contactar Abogado",
    "common.call_now": "Llamar Ahora",
    "common.send_email": "Enviar Correo",
    "common.visit_website": "Visitar Sitio Web",
    "common.back": "Volver",
    "common.loading": "Cargando...",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.clear": "Limpiar",
    "common.submit": "Enviar",
    "common.cancel": "Cancelar",
  },
  en: {
    // Navigation
    "nav.directory": "Directory",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.reviews": "Reviews",
    "nav.data": "Data",

    // Homepage
    "home.title": "Find Puerto Rico's Top Attorneys",
    "home.subtitle":
      "Comprehensive directory of licensed legal professionals in Puerto Rico. Verify credentials, check disciplinary records, and find qualified legal representation.",
    "home.search.placeholder": "Search attorneys, firms, or bar numbers...",
    "home.search.button": "Search Now",
    "home.stats.attorneys": "Licensed Attorneys",
    "home.stats.active": "Active Licenses",
    "home.stats.municipalities": "Municipalities Covered",
    "home.stats.areas": "Practice Areas",
    "home.results": "Results Found",

    // Filters
    "filter.status": "License Status",
    "filter.status.all": "All Statuses",
    "filter.status.active": "Active",
    "filter.status.suspended": "Suspended",
    "filter.status.revoked": "Revoked",
    "filter.status.probation": "Probation",
    "filter.municipality": "Municipality",
    "filter.municipality.all": "All Municipalities",
    "filter.area": "Practice Area",
    "filter.area.all": "All Areas",
    "filter.clear": "Clear Filters",

    // Attorney Profile
    "profile.contact": "Contact Information",
    "profile.areas": "Practice Areas",
    "profile.experience": "Years Experience",
    "profile.disciplinary": "Disciplinary Actions",
    "profile.complaints": "Ethical Complaints",
    "profile.languages": "Languages",
    "profile.education": "Education",
    "profile.admissions": "Bar Admissions",
    "profile.reviews": "Reviews",
    "profile.rating": "Rating",
    "profile.write_review": "Write Review",

    // Status
    "status.active": "Active",
    "status.suspended": "Suspended",
    "status.revoked": "Revoked",
    "status.probation": "Probation",
    "status.not_authorized": "Not authorized to practice",

    // Common
    "common.phone": "Phone",
    "common.email": "Email",
    "common.website": "Website",
    "common.address": "Address",
    "common.view_profile": "View Full Profile",
    "common.contact_attorney": "Contact Attorney",
    "common.call_now": "Call Now",
    "common.send_email": "Send Email",
    "common.visit_website": "Visit Website",
    "common.back": "Back",
    "common.loading": "Loading...",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.clear": "Clear",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lexii-language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("lexii-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
