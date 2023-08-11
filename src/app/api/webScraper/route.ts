// https://github.com/vercel/next.js/issues/46337#issuecomment-1478613133
import { NextResponse, NextRequest } from 'next/server';
export const runtime = 'edge'; // vercel serverless functions timeout after 10 seconds, so lets see if edge works?????

export async function GET(request: NextRequest) {
    const webScraperURL = process.env.WEBSCRAPER_URL;
    let urlToScrape = request.nextUrl.searchParams.get("page");
  
    // Handle missing URL parameter
    if (!urlToScrape) {
      console.log('Missing URL parameter');
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }
  
    console.log('URL to scrape:', webScraperURL + "?page=" + urlToScrape);
  
    try {
      const response = await fetch(webScraperURL + "?page=" + urlToScrape);
      if (!response.ok) {
        throw new Error('Server error');
      }
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      console.log('Response headers:', response.headers);
      console.log('Response URL:', response.url);
      console.log('Response redirected:', response.redirected);
      console.log('Response type:', response.type);
  
      const data = await response.text();
      console.log('Data:', data);
  
      return NextResponse.json({ data: data }, { status: 200 });
    } catch (error) {
      console.log('Error:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }