import '../styles/pages.css'

export default function Login() {
  return (
    <main className="page page-auth">
      <form className="card form-card">
        <h2>Welcome back</h2>
        <label>
          Email
          <input placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••" />
        </label>
        <button className="btn primary">Login</button>
      </form>
    </main>
  )
}
