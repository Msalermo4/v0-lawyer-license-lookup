"use client"

import { Wifi, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wifi className="w-8 h-8 text-gray-400" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sin Conexión</h1>

          <p className="text-gray-600 mb-6">
            No tienes conexión a internet. Algunas funciones pueden no estar disponibles.
          </p>

          <Button onClick={() => window.location.reload()} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Intentar de Nuevo
          </Button>

          <div className="mt-6 text-sm text-gray-500">
            <p>Funciones disponibles offline:</p>
            <ul className="mt-2 space-y-1">
              <li>• Ver abogados guardados</li>
              <li>• Leer reseñas descargadas</li>
              <li>• Acceder a favoritos</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
