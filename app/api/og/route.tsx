import { AUTHOR } from '../../../lib/shared';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const type = searchParams.get('type') || 'website';

    // Create SVG for OG image
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="black"/>
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
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
    });
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
