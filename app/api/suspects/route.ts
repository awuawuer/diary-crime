// import { NextRequest, NextResponse } from "next/server";

// const API_BASE = "http://localhost/crime_api"; // Change if your PHP backend runs elsewhere

// export async function GET(req: NextRequest) {
//   const searchParams = req.nextUrl.searchParams;
//   const searchTerm = searchParams.get("search");

//   const url = `${API_BASE}/suspects?search=${encodeURIComponent(searchTerm || "")}`;

//   try {
//     const res = await fetch(url, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = await res.json();
//     return NextResponse.json({ suspects: data });
//   } catch (err) {
//     console.error("Error fetching suspects:", err);
//     return NextResponse.json({ error: "Failed to fetch suspects" }, { status: 500 });
//   }
// }



// /app/api/suspects/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("search");

  if (!query) {
    return NextResponse.json({ error: "Search query required" }, { status: 400 });
  }

  const res = await fetch(`http://localhost/crime_api/suspects?search=${encodeURIComponent(query)}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
