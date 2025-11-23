import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'The Biblical Man - War Room',
        short_name: 'Biblical Man',
        description: 'Biblical masculinity, marriage, and truth for men. Join 12,000+ warriors.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#FFD700',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
