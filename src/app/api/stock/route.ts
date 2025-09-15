import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.THE_STOCK_API_KEY;

    try { 
        const response = await fetch(`https://api.marketaux.com/v1/news/all?symbols=AAPL,TSLA&filter_entities=true&api_token=${apiKey}`);

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch data from The Stock API' },
            { status: 500 }
        );
    }
}
