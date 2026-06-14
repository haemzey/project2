import '../styles/pages.css'

const sample = [
  { id: 1, name: 'La Petite Table', cuisine: 'French' },
  { id: 2, name: 'Sakura Bento', cuisine: 'Japanese' },
  { id: 3, name: 'El Asador', cuisine: 'Argentinian' },
]

export default function Restaurant() {
  return (
    <main className="page page-restaurants">
      <h2>Restaurants</h2>
      <div className="cards">
        {sample.map((r) => (
          <article key={r.id} className="card">
            <div className="card-media" />
            <div className="card-body">
              <h3>{r.name}</h3>
              <p className="muted">{r.cuisine}</p>
              <button className="btn">View Menu</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
