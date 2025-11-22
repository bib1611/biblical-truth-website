import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try to fetch metadata from RadioBoss stream
    // Note: This may fail due to CORS, so we'll provide a fallback

    // Attempt to get stream metadata
    const streamUrl = 'https://c13.radioboss.fm:8639/stats?json=1';

    try {
      const response = await fetch(streamUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Extract current track from response
        if (data.songtitle || data.current_song || data.title) {
          return NextResponse.json({
            track: data.songtitle || data.current_song || data.title,
            listeners: data.listeners || null,
          });
        }
      }
    } catch (streamError) {
      console.log('Stream metadata fetch failed, using fallback');
    }

    // Fallback response with generic info
    // You can update this with a schedule-based approach
    const hour = new Date().getHours();
    let programName = 'Live Biblical Teaching';

    // Simple time-based programming (customize based on actual schedule)
    if (hour >= 6 && hour < 12) {
      programName = 'Morning Bible Teaching';
    } else if (hour >= 12 && hour < 18) {
      programName = 'Afternoon Preaching';
    } else if (hour >= 18 && hour < 22) {
      programName = 'Evening Ministry';
    } else {
      programName = 'Late Night Bible Study';
    }

    return NextResponse.json({
      track: programName,
      listeners: null,
    });
  } catch (error) {
    return NextResponse.json({
      track: 'Final Fight Bible Radio - Live 24/7',
      listeners: null,
    });
  }
}
