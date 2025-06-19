const products = [
  { id: 1, name: "Produit A", price: "29,90€" },
  { id: 2, name: "Produit B", price: "39,90€" },
  { id: 3, name: "Produit C", price: "19,90€" },
  { id: 4, name: "Produit D", price: "49,90€" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Boutique Tom</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Ajouter</button>
          </div>
        ))}
      </div>
    </main>
  );
}