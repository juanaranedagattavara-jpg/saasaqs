import { NextResponse } from 'next/server';
import { robotsConfig } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const robots = `User-agent: ${robotsConfig.userAgent}
Allow: ${robotsConfig.allow}
${robotsConfig.disallow.map(disallow => `Disallow: ${disallow}`).join('\n')}
Sitemap: ${robotsConfig.sitemap}

# Additional rules for specific bots
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl delay for all bots
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
