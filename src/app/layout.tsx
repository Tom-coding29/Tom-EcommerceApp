import './globals.css'
import { CartProvider } from '../context/CartContext'
import Link from 'next/link'
import CartPopup from '../components/CartPopup'

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
            <nav className="flex gap-4 items-center">
              <Link href="/" className="hover:underline">Produits</Link>

              {/* ✅ Intégré ici pour que le menu s’ouvre sous "Panier" */}
              <div className="relative">
                <CartPopup />
              </div>
            </nav>
          </header>

          <main className="p-6 max-w-4xl mx-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
