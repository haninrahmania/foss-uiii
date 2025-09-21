import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  const { key } = params

  // Build the R2 URL
  const r2Url = `${process.env.R2_PUBLIC_URL}/${key}`

  try {
    const res = await fetch(r2Url)

    if (!res.ok) {
      return new NextResponse(`File not found: ${key}`, { status: 404 })
    }

    // Forward headers like Content-Type so images display correctly
    const headers = new Headers(res.headers)
    return new NextResponse(res.body, { status: 200, headers })
  } catch (err) {
    console.error(err)
    return new NextResponse('Error fetching file', { status: 500 })
  }
}
