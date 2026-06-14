import '../styles/pages.css'

export default function Signup() {
  return (
    <main className="page page-auth">
      <form className="card form-card">
        <h2>Create account</h2>
        <label>
          Name
          <input placeholder="Your name" />
        </label>
        <label>
          Email
          <input placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="btn primary">Sign up</button>
      </form>
    </main>
  )
}
