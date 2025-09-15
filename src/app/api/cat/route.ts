// import { NextResponse } from 'next/server';

// export async function GET() {
//   // Access the API key securely from environment variables
//   const apiKey = process.env.THE_CAT_API_KEY;

//   if (!apiKey) {
//     // Handle the case where the key is missing
//     return NextResponse.json(
//       { error: 'API key is missing' },
//       { status: 500 }
//     );
//   }

//   try {
//     // Use the key in a fetch request
//     const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&api_key=${apiKey}`, {
//     });

//     const data = await response.json();
//     return NextResponse.json(data);

//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch data from The Cat API' },
//       { status: 500 }
//     );
//   }
// }