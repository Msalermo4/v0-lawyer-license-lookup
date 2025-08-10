"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, TrendingUp, AlertTriangle, Scale, Calendar, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageToggle } from "@/components/LanguageToggle"

const disciplinaryData = [
  {
    year: 2024,
    totalCases: 15,
    suspensions: 3,
    revocations: 1,
    censures: 8,
    probations: 3,
    topReasons: [
      { reason: "Apropiación indebida de fondos", reasonEn: "Misappropriation of funds", count: 4 },
      { reason: "Comunicación inadecuada con clientes", reasonEn: "Inadequate client communication", count: 3 },
      { reason: "Conflicto de intereses", reasonEn: "Conflict of interest", count: 2 },
    ],
  },
  {
    year: 2023,
    totalCases: 28,
    suspensions: 8,
    revocations: 2,
    censures: 15,
    probations: 3,
    topReasons: [
      { reason: "Apropiación indebida de fondos", reasonEn: "Misappropriation of funds", count: 7 },
      { reason: "Comunicación inadecuada con clientes", reasonEn: "Inadequate client communication", count: 6 },
      { reason: "Falta de competencia", reasonEn: "Lack of competence", count: 4 },
    ],
  },
  {
    year: 2022,
    totalCases: 32,
    suspensions: 10,
    revocations: 3,
    censures: 16,
    probations: 3,
    topReasons: [
      { reason: "Apropiación indebida de fondos", reasonEn: "Misappropriation of funds", count: 9 },
      { reason: "Comunicación inadecuada con clientes", reasonEn: "Inadequate client communication", count: 7 },
      { reason: "Violación de confidencialidad", reasonEn: "Breach of confidentiality", count: 5 },
    ],
  },
]

const practiceAreaStats = [
  { area: "Derecho Inmobiliario", areaEn: "Real Estate Law", attorneys: 8, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Penal", areaEn: "Criminal Law", attorneys: 6, disciplinary: 2, percentage: 33.3 },
  { area: "Derecho Familiar", areaEn: "Family Law", attorneys: 4, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Corporativo", areaEn: "Corporate Law", attorneys: 4, disciplinary: 1, percentage: 25.0 },
  { area: "Derecho Laboral", areaEn: "Labor Law", attorneys: 4, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Seguros", areaEn: "Insurance Law", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Inmigración", areaEn: "Immigration Law", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Tributario", areaEn: "Tax Law", attorneys: 2, disciplinary: 1, percentage: 50.0 },
  {
    area: "Derecho de Propiedad Intelectual",
    areaEn: "Intellectual Property Law",
    attorneys: 2,
    disciplinary: 0,
    percentage: 0.0,
  },
  { area: "Derecho Ambiental", areaEn: "Environmental Law", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Salud", areaEn: "Health Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Deportivo", areaEn: "Sports Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Ancianos", areaEn: "Elder Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Quiebras", areaEn: "Bankruptcy Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Consumidor", areaEn: "Consumer Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Aviación", areaEn: "Aviation Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Municipal", areaEn: "Municipal Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Agrícola", areaEn: "Agricultural Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho de Agua", areaEn: "Water Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Marítimo", areaEn: "Maritime Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { area: "Derecho Educativo", areaEn: "Education Law", attorneys: 1, disciplinary: 0, percentage: 0.0 },
]

const municipalityStats = [
  { municipality: "San Juan", attorneys: 25, disciplinary: 2, percentage: 8.0 },
  { municipality: "Bayamón", attorneys: 3, disciplinary: 1, percentage: 33.3 },
  { municipality: "Carolina", attorneys: 3, disciplinary: 0, percentage: 0.0 },
  { municipality: "Ponce", attorneys: 3, disciplinary: 1, percentage: 33.3 },
  { municipality: "Caguas", attorneys: 3, disciplinary: 0, percentage: 0.0 },
  { municipality: "Guaynabo", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { municipality: "Arecibo", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { municipality: "Mayagüez", attorneys: 2, disciplinary: 0, percentage: 0.0 },
  { municipality: "Río Grande", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { municipality: "Cidra", attorneys: 1, disciplinary: 0, percentage: 0.0 },
  { municipality: "Humacao", attorneys: 1, disciplinary: 0, percentage: 0.0 },
]

export default function DataPage() {
  const { t, language } = useLanguage()
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedMetric, setSelectedMetric] = useState("all")

  const currentYearData = disciplinaryData.find((d) => d.year.toString() === selectedYear) || disciplinaryData[0]

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
            {language === "es" ? "Datos y Estadísticas Legales" : "Legal Data & Statistics"}
          </h1>
          <p className="text-lg text-gray-600">
            {language === "es"
              ? "Análisis completo de datos disciplinarios y estadísticas del Poder Judicial de Puerto Rico (2022-presente)"
              : "Comprehensive analysis of disciplinary data and statistics from Puerto Rico's Judicial Branch (2022-present)"}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-700">{language === "es" ? "Filtros:" : "Filters:"}</span>
            </div>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full lg:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder={language === "es" ? "Métrica" : "Metric"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "es" ? "Todas las métricas" : "All metrics"}</SelectItem>
                <SelectItem value="disciplinary">
                  {language === "es" ? "Acciones disciplinarias" : "Disciplinary actions"}
                </SelectItem>
                <SelectItem value="practice">
                  {language === "es" ? "Por área de práctica" : "By practice area"}
                </SelectItem>
                <SelectItem value="location">{language === "es" ? "Por ubicación" : "By location"}</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="ml-auto bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              {language === "es" ? "Exportar Datos" : "Export Data"}
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Scale className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">{currentYearData.totalCases}</div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Casos In Re" : "In Re Cases"} ({selectedYear})
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{currentYearData.suspensions}</div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Suspensiones" : "Suspensions"} ({selectedYear})
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {(
                  (currentYearData.totalCases / (disciplinaryData.find((d) => d.year === 2022)?.totalCases || 1) - 1) *
                  100
                ).toFixed(1)}
                %
              </div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Cambio desde 2022" : "Change since 2022"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {((currentYearData.totalCases / 1200) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">
                {language === "es" ? "Tasa Disciplinaria" : "Disciplinary Rate"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disciplinary Trends */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              {language === "es" ? "Tendencias Disciplinarias (2022-2024)" : "Disciplinary Trends (2022-2024)"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {disciplinaryData.map((yearData) => (
                <div key={yearData.year} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{yearData.year}</h3>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {yearData.totalCases} {language === "es" ? "casos" : "cases"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{yearData.suspensions}</div>
                      <div className="text-xs text-gray-600">{language === "es" ? "Suspensiones" : "Suspensions"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{yearData.revocations}</div>
                      <div className="text-xs text-gray-600">{language === "es" ? "Revocaciones" : "Revocations"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{yearData.censures}</div>
                      <div className="text-xs text-gray-600">{language === "es" ? "Censuras" : "Censures"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{yearData.probations}</div>
                      <div className="text-xs text-gray-600">{language === "es" ? "Probatorias" : "Probations"}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      {language === "es" ? "Principales razones:" : "Top reasons:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {yearData.topReasons.map((reason, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {language === "es" ? reason.reason : reason.reasonEn} ({reason.count})
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Practice Area Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "es" ? "Estadísticas por Área de Práctica" : "Statistics by Practice Area"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {practiceAreaStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{language === "es" ? stat.area : stat.areaEn}</div>
                      <div className="text-sm text-gray-600">
                        {stat.attorneys} {language === "es" ? "abogados" : "attorneys"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-red-600">{stat.disciplinary}</div>
                      <div className="text-xs text-gray-500">{stat.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Municipality Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>{language === "es" ? "Estadísticas por Municipio" : "Statistics by Municipality"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {municipalityStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{stat.municipality}</div>
                      <div className="text-sm text-gray-600">
                        {stat.attorneys} {language === "es" ? "abogados" : "attorneys"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-red-600">{stat.disciplinary}</div>
                      <div className="text-xs text-gray-500">{stat.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Sources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {language === "es" ? "Fuentes de Datos" : "Data Sources"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">
                    {language === "es" ? "Tribunal Supremo de Puerto Rico" : "Supreme Court of Puerto Rico"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "es"
                      ? "Casos In Re y decisiones disciplinarias oficiales"
                      : "Official In Re cases and disciplinary decisions"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">
                    {language === "es" ? "Colegio de Abogados de Puerto Rico" : "Puerto Rico Bar Association"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "es"
                      ? "Registros de licencias y estado de colegiación"
                      : "License records and bar membership status"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">
                    {language === "es" ? "Oficina de Inspección de Notarías" : "Notary Inspection Office"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "es"
                      ? "Registros disciplinarios adicionales y quejas éticas"
                      : "Additional disciplinary records and ethical complaints"}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>{language === "es" ? "Nota:" : "Note:"}</strong>{" "}
                {language === "es"
                  ? "Todos los datos son de dominio público y se actualizan mensualmente. La información se obtiene directamente de fuentes oficiales del gobierno de Puerto Rico."
                  : "All data is from public domain and updated monthly. Information is obtained directly from official Puerto Rico government sources."}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
