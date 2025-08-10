import { type NextRequest, NextResponse } from "next/server"
import { PoderJudicialScraper, DataConsolidator } from "@/lib/data-scraper"

export async function POST(request: NextRequest) {
  try {
    const scraper = new PoderJudicialScraper()
    const consolidator = new DataConsolidator()

    // Scrape latest data
    const decisions = await scraper.scrapeDecisions()
    const barData = await scraper.getBarAssociationData()

    // Consolidate all data
    const consolidatedData = await consolidator.consolidateAllData()

    // Here you would save to your database
    // await saveToDatabase(consolidatedData)

    return NextResponse.json({
      success: true,
      message: "Data synchronized successfully",
      recordsProcessed: consolidatedData.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Sync error:", error)
    return NextResponse.json({ success: false, error: "Failed to sync data" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    status: "Data sync API is running",
    endpoints: {
      sync: "POST /api/sync-data",
      status: "GET /api/sync-data",
    },
  })
}
