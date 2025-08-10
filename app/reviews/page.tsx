"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, Flag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageToggle } from "@/components/LanguageToggle"

const reviews = [
  {
    id: 1,
    attorneyId: 1,
    attorneyName: "María Elena Rodríguez Santos",
    rating: 5,
    title: "Excelente servicio en compra de propiedad",
    titleEn: "Excellent service in property purchase",
    content:
      "La Lcda. Rodríguez me ayudó con la compra de mi primera casa. Su conocimiento del proceso y atención al detalle fueron excepcionales. Altamente recomendada.",
    contentEn:
      "Attorney Rodríguez helped me with purchasing my first home. Her knowledge of the process and attention to detail were exceptional. Highly recommended.",
    author: "Carlos M.",
    date: "2024-01-10",
    verified: true,
    helpful: 12,
    notHelpful: 1,
    practiceArea: "Derecho Inmobiliario",
    practiceAreaEn: "Real Estate Law",
  },
  {
    id: 2,
    attorneyId: 3,
    attorneyName: "Ana Isabel Torres Vega",
    rating: 5,
    title: "Profesional y compasiva en caso de divorcio",
    titleEn: "Professional and compassionate in divorce case",
    content:
      "Durante mi proceso de divorcio, la Lcda. Torres fue muy profesional y comprensiva. Me mantuvo informado en todo momento y logró un acuerdo justo para ambas partes.",
    contentEn:
      "During my divorce process, Attorney Torres was very professional and understanding. She kept me informed at all times and achieved a fair agreement for both parties.",
    author: "María L.",
    date: "2024-01-08",
    verified: true,
    helpful: 18,
    notHelpful: 0,
    practiceArea: "Derecho Familiar",
    practiceAreaEn: "Family Law",
  },
  {
    id: 3,
    attorneyId: 4,
    attorneyName: "Roberto José Fernández Cruz",
    rating: 1,
    title: "Experiencia muy negativa - evitar",
    titleEn: "Very negative experience - avoid",
    content:
      "No recomiendo este abogado. Hubo problemas con la comunicación y el manejo de fondos. Tuve que buscar otro abogado para resolver los problemas que él causó.",
    contentEn:
      "I do not recommend this attorney. There were problems with communication and handling of funds. I had to find another attorney to resolve the problems he caused.",
    author: "José R.",
    date: "2023-12-15",
    verified: true,
    helpful: 25,
    notHelpful: 3,
    practiceArea: "Derecho Corporativo",
    practiceAreaEn: "Corporate Law",
  },
  {
    id: 4,
    attorneyId: 7,
    attorneyName: "Sofía Esperanza Ruiz Colón",
    rating: 5,
    title: "Experta en inmigración - muy recomendada",
    titleEn: "Immigration expert - highly recommended",
    content:
      "La Lcda. Ruiz me ayudó con mi proceso de ciudadanía. Su conocimiento de las leyes de inmigración es impresionante y siempre estuvo disponible para responder mis preguntas.",
    contentEn:
      "Attorney Ruiz helped me with my citizenship process. Her knowledge of immigration laws is impressive and she was always available to answer my questions.",
    author: "Pedro S.",
    date: "2024-01-05",
    verified: true,
    helpful: 15,
    notHelpful: 0,
    practiceArea: "Derecho de Inmigración",
    practiceAreaEn: "Immigration Law",
  },
  {
    id: 5,
    attorneyId: 9,
    attorneyName: "Isabella María Santos Rivera",
    rating: 4,
    title: "Muy conocedora en propiedad intelectual",
    titleEn: "Very knowledgeable in intellectual property",
    content:
      "Me ayudó a registrar mi marca comercial. El proceso fue más rápido de lo esperado y su explicación de los derechos de propiedad intelectual fue muy clara.",
    contentEn:
      "She helped me register my trademark. The process was faster than expected and her explanation of intellectual property rights was very clear.",
    author: "Ana C.",
    date: "2024-01-03",
    verified: true,
    helpful: 8,
    notHelpful: 1,
    practiceArea: "Derecho de Propiedad Intelectual",
    practiceAreaEn: "Intellectual Property Law",
  },
]

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
  ))
}

export default function ReviewsPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [practiceAreaFilter, setPracticeAreaFilter] = useState("all")

  const practiceAreas = [
    ...new Set(reviews.map((review) => (language === "es" ? review.practiceArea : review.practiceAreaEn))),
  ].sort()

  const filteredReviews = reviews.filter((review) => {
    const searchFields = [
      review.attorneyName,
      language === "es" ? review.title : review.titleEn,
      language === "es" ? review.content : review.contentEn,
      language === "es" ? review.practiceArea : review.practiceAreaEn,
    ]
      .join(" ")
      .toLowerCase()

    const matchesSearch = searchFields.includes(searchTerm.toLowerCase())
    const matchesRating = ratingFilter === "all" || review.rating.toString() === ratingFilter
    const matchesPracticeArea =
      practiceAreaFilter === "all" ||
      (language === "es" ? review.practiceArea : review.practiceAreaEn) === practiceAreaFilter

    return matchesSearch && matchesRating && matchesPracticeArea
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("common.back")}
                </Button>
              </Link>
              <div>
                <Link href="/">
                  <h1 className="text-2xl font-bold text-blue-900">LEXII</h1>
                  <p className="text-sm text-gray-600">
                    {language === "es" ? "Directorio Legal de Puerto Rico" : "Puerto Rico Legal Directory"}
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {language === "es" ? "Reseñas de Abogados" : "Attorney Reviews"}
          </h1>
          <p className="text-lg text-gray-600">
            {language === "es"
              ? "Lee reseñas reales de clientes sobre abogados de Puerto Rico. Comparte tu experiencia para ayudar a otros."
              : "Read real client reviews about Puerto Rico attorneys. Share your experience to help others."}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={language === "es" ? "Buscar reseñas..." : "Search reviews..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder={language === "es" ? "Calificación" : "Rating"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "es" ? "Todas las calificaciones" : "All ratings"}</SelectItem>
                <SelectItem value="5">5 {language === "es" ? "estrellas" : "stars"}</SelectItem>
                <SelectItem value="4">4 {language === "es" ? "estrellas" : "stars"}</SelectItem>
                <SelectItem value="3">3 {language === "es" ? "estrellas" : "stars"}</SelectItem>
                <SelectItem value="2">2 {language === "es" ? "estrellas" : "stars"}</SelectItem>
                <SelectItem value="1">1 {language === "es" ? "estrella" : "star"}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={practiceAreaFilter} onValueChange={setPracticeAreaFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder={language === "es" ? "Área de práctica" : "Practice area"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "es" ? "Todas las áreas" : "All areas"}</SelectItem>
                {practiceAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setRatingFilter("all")
                setPracticeAreaFilter("all")
              }}
            >
              {t("filter.clear")}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{reviews.length}</div>
              <div className="text-sm text-gray-600">{language === "es" ? "Total de Reseñas" : "Total Reviews"}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Calificación Promedio" : "Average Rating"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2">
                {reviews.filter((review) => review.verified).length}
              </div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Reseñas Verificadas" : "Verified Reviews"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">{practiceAreas.length}</div>
              <div className="text-sm text-gray-600">{language === "es" ? "Áreas de Práctica" : "Practice Areas"}</div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Link
                        href={`/attorney/${review.attorneyId}`}
                        className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                      >
                        {review.attorneyName}
                      </Link>
                      {review.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {language === "es" ? "Verificada" : "Verified"}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">{renderStars(review.rating)}</div>
                      <Badge variant="outline">{language === "es" ? review.practiceArea : review.practiceAreaEn}</Badge>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {language === "es" ? review.title : review.titleEn}
                    </h3>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{new Date(review.date).toLocaleDateString()}</div>
                    <div>
                      {language === "es" ? "por" : "by"} {review.author}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {language === "es" ? review.content : review.contentEn}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span>
                        {language === "es" ? "Útil" : "Helpful"} ({review.helpful})
                      </span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                      <ThumbsDown className="w-4 h-4" />
                      <span>
                        {language === "es" ? "No útil" : "Not helpful"} ({review.notHelpful})
                      </span>
                    </button>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                    <Flag className="w-4 h-4" />
                    <span>{language === "es" ? "Reportar" : "Report"}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === "es" ? "No se encontraron reseñas" : "No reviews found"}
            </h3>
            <p className="text-gray-500 mb-4">
              {language === "es"
                ? "Intenta ajustar tus criterios de búsqueda o filtros."
                : "Try adjusting your search criteria or filters."}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setRatingFilter("all")
                setPracticeAreaFilter("all")
              }}
            >
              {t("filter.clear")}
            </Button>
          </div>
        )}

        {/* Write Review CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            {language === "es" ? "¿Has trabajado con un abogado?" : "Have you worked with an attorney?"}
          </h2>
          <p className="text-blue-700 mb-6">
            {language === "es"
              ? "Comparte tu experiencia para ayudar a otros a tomar decisiones informadas."
              : "Share your experience to help others make informed decisions."}
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {language === "es" ? "Escribir Reseña" : "Write a Review"}
          </Button>
        </div>
      </main>
    </div>
  )
}
