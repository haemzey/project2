import '../styles/pages.css'

export default function Profile() {
  return (
    <main className="page page-profile">
      <div className="profile-card">
        <div className="avatar" />
        <h2>Jamie Doe</h2>
        <p className="muted">Joined: 2024</p>
        <div className="profile-actions">
          <button className="btn">Edit Profile</button>
          <button className="btn ghost">Logout</button>
        </div>
      </div>
    </main>
  )
}
