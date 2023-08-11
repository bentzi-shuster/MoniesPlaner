import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
    const webScraperURL = process.env.WEBSCRAPER_URL;
    let urlToScrape = request.nextUrl.searchParams.get("page")
    const res = await fetch(webScraperURL + "?page=" + urlToScrape);
    const data = await res.json();
    console.log(data);
    return NextResponse.json({ data });
}