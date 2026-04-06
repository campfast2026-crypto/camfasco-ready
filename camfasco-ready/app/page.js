"use client";
import { useState } from "react";

const products = Array.from({ length: 500 }).map((_, i) => ({
  sku: `SKU-${i}`,
  name: `Hex Bolt ${i}`,
  price: (Math.random() * 10 + 1).toFixed(2)
}));

export default function Page() {
  const [q, setQ] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Camfasco Catalog</h2>

      <input
        placeholder="Search parts..."
        value={q}
        onChange={e => setQ(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 10 }}
      />

      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.sku}>
              <td>{p.sku}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}