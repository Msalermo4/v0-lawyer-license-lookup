"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, X, Star, MapPin, Phone, Mail, Scale, AlertTriangle, CheckCircle, Clock, XCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface LawyerCardProps {
  lawyer: any
  onLike: (id: number) => void
  onPass: (id: number) => void
  onSuperLike: (id: number) => void
  showActions?: boolean
}

export function LawyerCard({ lawyer, onLike, onPass, onSuperLike, showActions = true }: LawyerCardProps) {
  const { language } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "Suspended":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "Revoked":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "Probation":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Suspended":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Revoked":
        return "bg-red-100 text-red-800 border-red-200"
      case "Probation":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <Card className="w-full max-w-sm mx-auto h-[600px] relative overflow-hidden shadow-xl">
      {/* Profile Image/Header */}
      <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Scale className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold mb-1">{lawyer.name}</h2>
          <p className="text-blue-100 text-sm">{language === "es" ? lawyer.firm : lawyer.firmEn}</p>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={`${getStatusColor(lawyer.status)} flex items-center gap-1`}>
            {getStatusIcon(lawyer.status)}
            {lawyer.status === "Active" ? (language === "es" ? "Activo" : "Active") : lawyer.status}
          </Badge>
        </div>

        {/* Verification Badge */}
        {lawyer.verified && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-100 text-blue-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              {language === "es" ? "Verificado" : "Verified"}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6 h-[336px] flex flex-col">
        {/* Basic Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              {renderStars(lawyer.rating)}
              <span className="text-sm font-medium text-gray-700 ml-1">{lawyer.rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-gray-500">
              ({lawyer.reviewCount} {language === "es" ? "reseñas" : "reviews"})
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {lawyer.municipality}
            </span>
            <span>Bar #{lawyer.barNumber}</span>
          </div>
        </div>

        {/* Practice Areas */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            {language === "es" ? "Áreas de Práctica" : "Practice Areas"}
          </h3>
          <div className="flex flex-wrap gap-1">
            {(language === "es" ? lawyer.practiceAreas : lawyer.practiceAreasEn)
              .slice(0, 3)
              .map((area: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {area}
                </Badge>
              ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-lg font-semibold text-gray-900">
              {new Date().getFullYear() - new Date(lawyer.licenseDate).getFullYear()}
            </div>
            <div className="text-xs text-gray-500">{language === "es" ? "Años" : "Years"}</div>
          </div>
          <div>
            <div
              className={`text-lg font-semibold ${lawyer.disciplinaryActions > 0 ? "text-red-600" : "text-green-600"}`}
            >
              {lawyer.disciplinaryActions}
            </div>
            <div className="text-xs text-gray-500">{language === "es" ? "Discipl." : "Discipl."}</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-blue-600">{lawyer.languages.length}</div>
            <div className="text-xs text-gray-500">{language === "es" ? "Idiomas" : "Languages"}</div>
          </div>
        </div>

        {/* Warning for suspended/revoked */}
        {(lawyer.status === "Suspended" || lawyer.status === "Revoked") && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-4">
            <div className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-medium">
                {language === "es" ? "No autorizado para ejercer" : "Not authorized to practice"}
              </span>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{lawyer.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="truncate max-w-[120px]">{lawyer.email}</span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Action Buttons */}
      {showActions && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-red-300 hover:bg-red-50 bg-transparent"
            onClick={() => onPass(lawyer.id)}
          >
            <X className="w-6 h-6 text-red-500" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-full border-2 border-blue-300 hover:bg-blue-50 bg-transparent"
            onClick={() => onSuperLike(lawyer.id)}
          >
            <Star className="w-5 h-5 text-blue-500" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-green-300 hover:bg-green-50 bg-transparent"
            onClick={() => onLike(lawyer.id)}
          >
            <Heart className="w-6 h-6 text-green-500" />
          </Button>
        </div>
      )}
    </Card>
  )
}
