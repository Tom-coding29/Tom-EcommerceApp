import './globals.css'
import { CartProvider } from '../context/CartContext'
import Link from 'next/link' // ✅ Ajout de Link

export const metadata = {
  title: 'Tom Boutique',
  description: 'Mini e-commerce Next.js simple',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <header className="bg-black text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Tom Boutique</h1>
            <nav>
              <Link href="/" className="mr-4 hover:underline">Produits</Link>
              <Link href="/cart" className="hover:underline">Panier</Link>
            </nav>
          </header>
          <main className="p-6 max-w-4xl mx-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
