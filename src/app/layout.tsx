import './globals.css'
import { CartProvider } from '../context/CartContext'

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
              <a href="/" className="mr-4 hover:underline">Produits</a>
              <a href="/cart" className="hover:underline">Panier</a>
            </nav>
          </header>
          <main className="p-6 max-w-4xl mx-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}