"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  RefreshCw,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Globe,
  FileText,
  Settings,
} from "lucide-react"
import { DataConsolidator, PoderJudicialScraper } from "@/lib/data-scraper"

interface DataSource {
  name: string
  status: "active" | "error" | "syncing"
  lastSync: string
  recordCount: number
  url: string
}

export default function DataManagementPage() {
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      name: "Poder Judicial PR - Decisiones 2025",
      status: "active",
      lastSync: "2024-01-15 10:30:00",
      recordCount: 15,
      url: "https://poderjudicial.pr/tribunal-supremo/decisiones-del-tribunal-supremo/decisiones-del-tribunal-supremo-2025/",
    },
    {
      name: "Poder Judicial PR - Decisiones 2024",
      status: "active",
      lastSync: "2024-01-15 10:25:00",
      recordCount: 28,
      url: "https://poderjudicial.pr/tribunal-supremo/decisiones-del-tribunal-supremo/decisiones-del-tribunal-supremo-2024/",
    },
    {
      name: "Colegio de Abogados PR",
      status: "error",
      lastSync: "2024-01-14 15:20:00",
      recordCount: 0,
      url: "https://capr.org/directorio-de-miembros/",
    },
    {
      name: "Oficina de Inspección de Notarías",
      status: "syncing",
      lastSync: "2024-01-15 11:00:00",
      recordCount: 8,
      url: "https://oin.pr.gov/",
    },
  ])

  const [isConsolidating, setIsConsolidating] = useState(false)
  const [consolidationLog, setConsolidationLog] = useState<string[]>([])

  const scraper = new PoderJudicialScraper()
  const consolidator = new DataConsolidator()

  const handleSyncSource = async (sourceName: string) => {
    setDataSources((prev) =>
      prev.map((source) => (source.name === sourceName ? { ...source, status: "syncing" } : source)),
    )

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))

      setDataSources((prev) =>
        prev.map((source) =>
          source.name === sourceName
            ? {
                ...source,
                status: "active",
                lastSync: new Date().toISOString().replace("T", " ").slice(0, 19),
                recordCount: source.recordCount + Math.floor(Math.random() * 5),
              }
            : source,
        ),
      )
    } catch (error) {
      setDataSources((prev) =>
        prev.map((source) => (source.name === sourceName ? { ...source, status: "error" } : source)),
      )
    }
  }

  const handleConsolidateData = async () => {
    setIsConsolidating(true)
    setConsolidationLog([])

    const steps = [
      "Iniciando consolidación de datos...",
      "Extrayendo datos del Poder Judicial PR...",
      "Procesando casos In Re 2024-2025...",
      "Verificando números de colegiación...",
      "Consolidando información disciplinaria...",
      "Actualizando base de datos...",
      "Consolidación completada.",
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setConsolidationLog((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${steps[i]}`])
    }

    setIsConsolidating(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "error":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case "syncing":
        return <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "syncing":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Datos - LEXII</h1>
          <p className="text-gray-600">Sistema de consolidación y mantenimiento de datos legales de Puerto Rico</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {dataSources.reduce((sum, source) => sum + source.recordCount, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Records</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {dataSources.filter((s) => s.status === "active").length}
              </div>
              <div className="text-sm text-gray-600">Active Sources</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <RefreshCw className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {dataSources.filter((s) => s.status === "syncing").length}
              </div>
              <div className="text-sm text-gray-600">Syncing</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {dataSources.filter((s) => s.status === "error").length}
              </div>
              <div className="text-sm text-gray-600">Errors</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Data Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Fuentes de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{source.name}</h3>
                        <p className="text-sm text-gray-600 truncate">{source.url}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(source.status)}>
                          {getStatusIcon(source.status)}
                          {source.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <span>Records: {source.recordCount}</span>
                      <span>Last sync: {source.lastSync}</span>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSyncSource(source.name)}
                      disabled={source.status === "syncing"}
                      className="w-full"
                    >
                      <RefreshCw className={`w-4 h-4 mr-2 ${source.status === "syncing" ? "animate-spin" : ""}`} />
                      Sync Now
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Consolidation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Consolidación de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2">Proceso de Consolidación</h3>
                  <p className="text-sm text-blue-800 mb-4">
                    Combina datos de múltiples fuentes, elimina duplicados y verifica la integridad de la información.
                  </p>
                  <Button onClick={handleConsolidateData} disabled={isConsolidating} className="w-full">
                    <Database className={`w-4 h-4 mr-2 ${isConsolidating ? "animate-pulse" : ""}`} />
                    {isConsolidating ? "Consolidando..." : "Iniciar Consolidación"}
                  </Button>
                </div>

                {/* Consolidation Log */}
                {consolidationLog.length > 0 && (
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Log de Consolidación</h4>
                    <div className="space-y-1 max-h-48 overflow-y-auto">
                      {consolidationLog.map((log, index) => (
                        <div key={index} className="text-sm text-gray-600 font-mono">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Export Options */}
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Exportar Datos</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      JSON
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Excel
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Import
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">Nuevos casos In Re procesados</p>
                  <p className="text-xs text-green-700">
                    3 nuevos casos disciplinarios agregados desde Poder Judicial PR
                  </p>
                </div>
                <span className="text-xs text-green-600">Hace 2 horas</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <RefreshCw className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Sincronización completada</p>
                  <p className="text-xs text-blue-700">Base de datos actualizada con información de licencias</p>
                </div>
                <span className="text-xs text-blue-600">Hace 4 horas</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">Error en fuente de datos</p>
                  <p className="text-xs text-red-700">No se pudo acceder al directorio del Colegio de Abogados</p>
                </div>
                <span className="text-xs text-red-600">Hace 6 horas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
