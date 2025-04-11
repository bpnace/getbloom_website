import { NextResponse } from 'next/server';

// Route Handlers export functions named after HTTP methods
export async function GET(request: Request) {
  // The incoming request is a standard Web API Request object
  // We can directly return JSON using NextResponse
  return NextResponse.json({ name: 'John Doe' });
}

// You can add other methods like POST, PUT, DELETE etc. as needed
// export async function POST(request: Request) { ... } 