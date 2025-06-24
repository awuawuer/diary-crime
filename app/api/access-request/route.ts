// import { NextRequest, NextResponse } from "next/server";

// const API_BASE = "http://localhost/crime_api";

// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   try {
//     const res = await fetch(`${API_BASE}/access-request`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       return NextResponse.json({ error: data.error || "Failed to submit request" }, { status: res.status });
//     }

//     return NextResponse.json(data);
//   } catch (err) {
//     console.error("Error submitting access request:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }


// /app/api/access-request/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch("http://localhost/crime_api/access-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
