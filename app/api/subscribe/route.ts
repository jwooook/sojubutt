import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("new transmission:", body.email)

    return NextResponse.json({
      success: true,
    })
  } catch (err) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}
