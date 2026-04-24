import { useMemo, useState } from 'react'
import locationsSeed from '../../data/locations.json'
import badges from '../../data/badges.json'

type Location = {
  id: string
  name: string
  city: string
  state: string
  visited: boolean
}

type Badge = {
  id: string
  name: string
  requiredVisits: number
  description: string
}

export default function App() {
  const [locations, setLocations] = useState<Location[]>(locationsSeed as Location[])

  const visitedCount = useMemo(
    () => locations.filter((location) => location.visited).length,
    [locations],
  )

  const unlockedBadges = (badges as Badge[]).filter((badge) => visitedCount >= badge.requiredVisits)
  const nextBadge = (badges as Badge[]).find((badge) => visitedCount < badge.requiredVisits)

  function toggleVisited(id: string) {
    setLocations((current) =>
      current.map((location) =>
        location.id === id ? { ...location, visited: !location.visited } : location,
      ),
    )
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">OpenClaw Dev Days</p>
        <h1>Beaver Badges</h1>
        <p className="subtitle">
          Track your road trip stops, unlock achievement badges, and build a fun fan-style app with a startup team of AI agents.
        </p>
        <div className="stats">
          <div className="stat-card">
            <span className="stat-label">Visited</span>
            <strong>{visitedCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Unlocked Badges</span>
            <strong>{unlockedBadges.length}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Next Badge</span>
            <strong>{nextBadge ? nextBadge.name : 'All unlocked'}</strong>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="panel">
          <h2>Locations</h2>
          <ul className="location-list">
            {locations.map((location) => (
              <li key={location.id} className={location.visited ? 'visited' : ''}>
                <label>
                  <input
                    type="checkbox"
                    checked={location.visited}
                    onChange={() => toggleVisited(location.id)}
                  />
                  <span>
                    <strong>{location.name}</strong>
                    <small>{location.city}, {location.state}</small>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2>Badges</h2>
          <ul className="badge-list">
            {(badges as Badge[]).map((badge) => {
              const unlocked = visitedCount >= badge.requiredVisits
              return (
                <li key={badge.id} className={unlocked ? 'badge unlocked' : 'badge'}>
                  <div>
                    <strong>{badge.name}</strong>
                    <p>{badge.description}</p>
                  </div>
                  <span>{badge.requiredVisits}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
