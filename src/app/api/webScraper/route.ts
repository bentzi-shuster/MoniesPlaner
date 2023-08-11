import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const webScraperURL = process.env.WEBSCRAPER_URL;
    let urlToScrape = request.nextUrl.searchParams.get("page")
    console.log(webScraperURL + "?page=" + urlToScrape)
    const data = await fetch(webScraperURL + "?page=" + urlToScrape)
    .then((res) => {
        console.log(res)
        return res.text();
    })
    .catch((e) => {
        console.log(e)
    });
    console.log(data);
    return NextResponse.json({ data: data }, { status: 200 });
}