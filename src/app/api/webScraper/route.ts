// https://github.com/vercel/next.js/issues/46337#issuecomment-1478613133
export const runtime = 'edge'; // vercel serverless functions timeout after 10 seconds, so lets see if edge works?????
import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
    const webScraperURL = process.env.WEBSCRAPER_URL;
    let urlToScrape = request.nextUrl.searchParams.get("page")
    const res = await fetch(webScraperURL + "?page=" + urlToScrape)
    const data = await res.text();
    console.log(data);
    return NextResponse.json({ data: data }, { status: 200 });
}