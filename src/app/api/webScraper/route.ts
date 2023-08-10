import {NextResponse} from 'next/server';


export async function GET(page: string){
    const webScraperURL = process.env.WEBSCRAPER_URL;
    console.log(webScraperURL);
    const res = await fetch( webScraperURL + "?page="+ page);
    const data = await res.json();
    console.log(data);
    return NextResponse.json({ data });
}