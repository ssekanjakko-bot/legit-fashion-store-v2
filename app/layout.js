import './globals.css'

export const metadata = {
          title: 'LEGIT FASHION | Premium Streetwear Kampala, Uganda',
          description: 'Shop LEGIT FASHION collections. Premium hoodies, tees, streetwear. Free delivery in Kampala on orders over 100,000 UGX.',
          keywords: 'fashion, streetwear, Kampala, Uganda, hoodies, legit fashion, clothing store',
          openGraph: {
                    title: 'LEGIT FASHION',
                    description: 'Premium streetwear from Kampala, Uganda',
                    url: 'https://legitfashion.ug',
                    siteName: 'LEGIT FASHION',
                    images: ['https://via.placeholder.com/1200x630/000000/FFFFFF?text=LEGIT+FASHION'],
                    locale: 'en_US',
                    type: 'website',
          },
          twitter: {
                    card: 'summary_large_image',
                    title: 'LEGIT FASHION Kampala',
                    description: 'Premium streetwear and fashion',
          },
}

export default function RootLayout({ children }) {
          return (
                    <html lang="en">
                              <body>{children}</body>
                    </html>
          )
}