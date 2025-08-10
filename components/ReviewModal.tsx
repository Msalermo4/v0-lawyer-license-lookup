"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, Send } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
  lawyer: any
  onSubmit: (review: ReviewData) => void
}

interface ReviewData {
  rating: number
  title: string
  content: string
  practiceArea: string
  anonymous: boolean
  clientName?: string
}

export function ReviewModal({ isOpen, onClose, lawyer, onSubmit }: ReviewModalProps) {
  const { language } = useLanguage()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [practiceArea, setPracticeArea] = useState("")
  const [anonymous, setAnonymous] = useState(false)
  const [clientName, setClientName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const reviewData: ReviewData = {
      rating,
      title,
      content,
      practiceArea,
      anonymous,
      clientName: anonymous ? undefined : clientName,
    }

    onSubmit(reviewData)

    // Reset form
    setRating(0)
    setTitle("")
    setContent("")
    setPracticeArea("")
    setAnonymous(false)
    setClientName("")

    onClose()
  }

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1
      return (
        <button
          key={i}
          type="button"
          className="focus:outline-none"
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(starValue)}
        >
          <Star
            className={`w-8 h-8 ${
              starValue <= (hoveredRating || rating) ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        </button>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{language === "es" ? "Escribir Reseña" : "Write Review"}</DialogTitle>
          <p className="text-sm text-gray-600">
            {language === "es" ? "Para" : "For"} {lawyer?.name}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <div>
            <Label className="text-sm font-medium">{language === "es" ? "Calificación" : "Rating"}</Label>
            <div className="flex gap-1 mt-1">{renderStars()}</div>
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title" className="text-sm font-medium">
              {language === "es" ? "Título de la reseña" : "Review title"}
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={language === "es" ? "Resumen de tu experiencia..." : "Summary of your experience..."}
              required
            />
          </div>

          {/* Practice Area */}
          <div>
            <Label htmlFor="practiceArea" className="text-sm font-medium">
              {language === "es" ? "Área de práctica" : "Practice area"}
            </Label>
            <Input
              id="practiceArea"
              value={practiceArea}
              onChange={(e) => setPracticeArea(e.target.value)}
              placeholder={language === "es" ? "¿En qué te ayudó?" : "What did they help you with?"}
              required
            />
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content" className="text-sm font-medium">
              {language === "es" ? "Tu experiencia" : "Your experience"}
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                language === "es"
                  ? "Comparte los detalles de tu experiencia con este abogado..."
                  : "Share details about your experience with this attorney..."
              }
              rows={4}
              required
            />
          </div>

          {/* Client Name (if not anonymous) */}
          {!anonymous && (
            <div>
              <Label htmlFor="clientName" className="text-sm font-medium">
                {language === "es" ? "Tu nombre" : "Your name"}
              </Label>
              <Input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={language === "es" ? "Nombre completo" : "Full name"}
                required
              />
            </div>
          )}

          {/* Anonymous Option */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="rounded border-gray-300"
            />
            <Label htmlFor="anonymous" className="text-sm">
              {language === "es" ? "Publicar como anónimo" : "Post anonymously"}
            </Label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              {language === "es" ? "Cancelar" : "Cancel"}
            </Button>
            <Button type="submit" className="flex-1" disabled={rating === 0}>
              <Send className="w-4 h-4 mr-2" />
              {language === "es" ? "Publicar" : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
