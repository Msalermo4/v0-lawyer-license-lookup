"use client"

import { useState, useEffect } from "react"
import { LawyerCard } from "@/components/LawyerCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Filter, Heart, Star, MessageCircle, ArrowLeft, Shuffle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageToggle } from "@/components/LanguageToggle"
import Link from "next/link"

// Sample lawyers data (would come from API)
const lawyers = [
  {
    id: 1,
    name: "María Elena Rodríguez Santos",
    barNumber: "PR15234",
    status: "Active",
    licenseDate: "2018-03-15",
    practiceAreas: ["Derecho Inmobiliario", "Desarrollo de Propiedades", "Bienes Raíces Comerciales"],
    practiceAreasEn: ["Real Estate Law", "Property Development", "Commercial Real Estate"],
    firm: "Bufete Rodríguez Santos",
    firmEn: "Rodríguez Santos Law Firm",
    phone: "(787) 555-0123",
    email: "maria.rodriguez@rslaw.pr",
    disciplinaryActions: 0,
    municipality: "San Juan",
    languages: ["Español", "Inglés"],
    rating: 4.8,
    reviewCount: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Carlos Alberto Méndez Rivera",
    barNumber: "PR12890",
    status: "Active",
    licenseDate: "2015-06-22",
    practiceAreas: ["Derecho Penal", "Defensa Criminal", "DUI"],
    practiceAreasEn: ["Criminal Law", "Criminal Defense", "DUI"],
    firm: "Méndez Rivera & Asociados",
    firmEn: "Méndez Rivera & Associates",
    phone: "(787) 555-0456",
    email: "carlos.mendez@mrlaw.pr",
    disciplinaryActions: 0,
    municipality: "San Juan",
    languages: ["Español", "Inglés"],
    rating: 4.6,
    reviewCount: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Roberto José Fernández Cruz",
    barNumber: "PR09876",
    status: "Suspended",
    licenseDate: "2008-01-18",
    practiceAreas: ["Derecho Corporativo", "Fusiones y Adquisiciones"],
    practiceAreasEn: ["Corporate Law", "Mergers & Acquisitions"],
    firm: "Anterior: Oficina Legal Fernández Cruz",
    firmEn: "Former: Fernández Cruz Law Office",
    phone: "(787) 555-0321",
    disciplinaryActions: 2,
    municipality: "Bayamón",
    languages: ["Español", "Inglés"],
    rating: 2.1,
    reviewCount: 8,
    verified: true,
  },
]

export default function DiscoverPage() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedLawyers, setLikedLawyers] = useState<number[]>([])
  const [passedLawyers, setPassedLawyers] = useState<number[]>([])
  const [superLikedLawyers, setSuperLikedLawyers] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const currentLawyer = lawyers[currentIndex]

  const handleLike = (id: number) => {
    setLikedLawyers([...likedLawyers, id])
    nextLawyer()
  }

  const handlePass = (id: number) => {
    setPassedLawyers([...passedLawyers, id])
    nextLawyer()
  }

  const handleSuperLike = (id: number) => {
    setSuperLikedLawyers([...superLikedLawyers, id])
    nextLawyer()
  }

  const nextLawyer = () => {
    if (currentIndex < lawyers.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Reset or load more lawyers
      setCurrentIndex(0)
    }
  }

  const resetStack = () => {
    setCurrentIndex(0)
    setLikedLawyers([])
    setPassedLawyers([])
    setSuperLikedLawyers([])
  }

  // Add keyboard event listeners
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (currentLawyer) {
        switch (event.key) {
          case "ArrowLeft":
            handlePass(currentLawyer.id)
            break
          case "ArrowRight":
            handleLike(currentLawyer.id)
            break
          case "ArrowUp":
            handleSuperLike(currentLawyer.id)
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentLawyer])

  if (!currentLawyer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-sm mx-auto p-8 text-center">
          <CardContent>
            <div className="mb-6">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {language === "es" ? "¡No hay más abogados!" : "No more lawyers!"}
              </h2>
              <p className="text-gray-600">
                {language === "es"
                  ? "Has revisado todos los abogados disponibles."
                  : "You've reviewed all available lawyers."}
              </p>
            </div>
            <Button onClick={resetStack} className="w-full">
              <Shuffle className="w-4 h-4 mr-2" />
              {language === "es" ? "Reiniciar" : "Reset"}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("common.back")}
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">LEXII</h1>
                <p className="text-sm text-gray-600">{language === "es" ? "Descubre Abogados" : "Discover Lawyers"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="w-4 h-4" />
              </Button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-sm mx-auto">
            <h3 className="font-medium text-gray-900 mb-3">{language === "es" ? "Filtros" : "Filters"}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                {language === "es" ? "Solo Activos" : "Active Only"}
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                San Juan
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                {language === "es" ? "Derecho Penal" : "Criminal Law"}
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                4+ ⭐
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Progress Indicator */}
          <div className="mb-4 text-center">
            <div className="flex justify-center gap-2 mb-2">
              {lawyers.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-blue-600" : index < currentIndex ? "bg-gray-400" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              {currentIndex + 1} {language === "es" ? "de" : "of"} {lawyers.length}
            </p>
          </div>

          {/* Lawyer Card */}
          <LawyerCard lawyer={currentLawyer} onLike={handleLike} onPass={handlePass} onSuperLike={handleSuperLike} />

          {/* Keyboard Shortcuts */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-2">
              {language === "es" ? "Atajos de teclado:" : "Keyboard shortcuts:"}
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-400">
              <span>← {language === "es" ? "Pasar" : "Pass"}</span>
              <span>↑ {language === "es" ? "Super Like" : "Super Like"}</span>
              <span>→ {language === "es" ? "Me Gusta" : "Like"}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-sm mx-auto flex justify-around">
          <Link href="/discover">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <Heart className="w-5 h-5" />
              <span className="text-xs">{language === "es" ? "Descubrir" : "Discover"}</span>
            </Button>
          </Link>
          <Link href="/matches">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs">{language === "es" ? "Matches" : "Matches"}</span>
              {likedLawyers.length > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 text-xs">
                  {likedLawyers.length}
                </Badge>
              )}
            </Button>
          </Link>
          <Link href="/favorites">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <Star className="w-5 h-5" />
              <span className="text-xs">{language === "es" ? "Favoritos" : "Favorites"}</span>
              {superLikedLawyers.length > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 text-xs">
                  {superLikedLawyers.length}
                </Badge>
              )}
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
              <Settings className="w-5 h-5" />
              <span className="text-xs">{language === "es" ? "Perfil" : "Profile"}</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
