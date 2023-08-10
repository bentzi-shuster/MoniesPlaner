import {NextResponse} from 'next/server';


export async function GET(page: {nextUrl: URL}){
    const webScraperURL = process.env.WEBSCRAPER_URL;
    let urlToScrape = page.nextUrl.searchParams.get("page")
    const res = await fetch( webScraperURL + "?page="+ urlToScrape);
    const data = await res.json();
    console.log(data);
    return NextResponse.json({ data });
}