import { AUTHOR } from '../../../lib/shared';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const type = searchParams.get('type') || 'website';

    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="black"/>
        <rect width="1200" height="630" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
            <stop stop-color="#000000" />
            <stop offset="1" stop-color="#111111" />
          </linearGradient>
        </defs>
        <text 
          x="80" 
          y="200" 
          font-size="60" 
          font-weight="800" 
          fill="white" 
          font-family="system-ui, -apple-system, sans-serif"
        >
          ${title || AUTHOR.name}
        </text>
        <text 
          x="80" 
          y="300" 
          font-size="32" 
          fill="rgb(156 163 175)" 
          font-family="system-ui, -apple-system, sans-serif"
        >
          ${type === 'article' ? 'Blog Post by ' : ''}${AUTHOR.name}
        </text>
      </svg>
    `;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'x-content-type-options': 'nosniff'
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
