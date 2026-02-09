import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'EternalPlush - Saint Valentin',
        short_name: 'EternalPlush',
        description: 'Le cadeau inoubliable pour la Saint-Valentin.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff0f5',
        theme_color: '#ee2b4b',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
