import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'QSP SpA';
    const description = searchParams.get('description') || 'Inteligencia de Comercio Exterior';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0b0f14',
            backgroundImage: 'linear-gradient(45deg, #0b0f14 0%, #1a2332 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: '#00c2b8',
                marginBottom: 20,
              }}
            >
              QSP SpA
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: '600',
                color: '#f8fafc',
                marginBottom: 20,
                maxWidth: 800,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                color: '#94a3b8',
                maxWidth: 600,
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
