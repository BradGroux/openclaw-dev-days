import { useMemo, useState } from 'react'
import locationsSeed from '../../data/locations.json'
import badges from '../../data/badges.json'

type Region = 'All' | 'Central Texas' | 'Gulf Coast' | 'North Texas'

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

type LocationWithRegion = Location & {
  region: Exclude<Region, 'All'>
}

const allBadges = badges as Badge[]
const allRegions: Region[] = ['All', 'Central Texas', 'Gulf Coast', 'North Texas']

function getRegion(city: string): Exclude<Region, 'All'> {
  if (city === 'Bastrop' || city === 'New Braunfels') return 'Central Texas'
  if (city === 'Wharton') return 'Gulf Coast'
  return 'North Texas'
}

export default function App() {
  const [locations, setLocations] = useState<Location[]>(locationsSeed as Location[])
  const [selectedRegion, setSelectedRegion] = useState<Region>('All')

  const locationsWithRegions = useMemo<LocationWithRegion[]>(
    () =>
      locations.map((location) => ({
        ...location,
        region: getRegion(location.city),
      })),
    [locations],
  )

  const filteredLocations = useMemo(
    () =>
      selectedRegion === 'All'
        ? locationsWithRegions
        : locationsWithRegions.filter((location) => location.region === selectedRegion),
    [locationsWithRegions, selectedRegion],
  )

  const visitedCount = useMemo(
    () => locations.filter((location) => location.visited).length,
    [locations],
  )

  const lockedBadges = allBadges.filter((badge) => visitedCount < badge.requiredVisits)
  const unlockedBadges = allBadges.filter((badge) => visitedCount >= badge.requiredVisits)
  const nextBadge = lockedBadges[0]
  const progressPercent = Math.min((visitedCount / locations.length) * 100, 100)
  const nextBadgeProgress = nextBadge
    ? Math.min((visitedCount / nextBadge.requiredVisits) * 100, 100)
    : 100
  const remainingForNextBadge = nextBadge ? nextBadge.requiredVisits - visitedCount : 0
  const completionState =
    visitedCount === 0 ? 'Just getting started' : visitedCount === locations.length ? 'Texas tour complete' : 'Momentum building'
  const featuredLocations = locationsWithRegions.filter((location) => !location.visited).slice(0, 3)

  function toggleVisited(id: string) {
    setLocations((current) =>
      current.map((location) =>
        location.id === id ? { ...location, visited: !location.visited } : location,
      ),
    )
  }

  return (
    <main className="app-shell">
      <aside className="sidebar-shell">
        <div className="sidebar-brand">
          <img className="brand-mark" src="/beaver-badges-logo-128.png" alt="Beaver Badges logo" />
          <div>
            <p>Beaver Badges</p>
            <span>Workshop dashboard</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Dashboard sections">
          <a href="#overview" className="nav-item active">Overview</a>
          <a href="#locations" className="nav-item">Locations</a>
          <a href="#badges" className="nav-item">Badge cabinet</a>
        </nav>

        <section className="sidebar-card status-card">
          <p className="sidebar-label">Trip status</p>
          <strong>{completionState}</strong>
          <span>
            {visitedCount} of {locations.length} stops visited
          </span>
          <div className="mini-progress">
            <div className="mini-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </section>

        <section className="sidebar-card spotlight-card">
          <p className="sidebar-label">Up next</p>
          {featuredLocations.length > 0 ? (
            <ul>
              {featuredLocations.map((location) => (
                <li key={location.id}>
                  <strong>{location.city}</strong>
                  <span>{location.region}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="sidebar-copy">Every seeded location has been visited. Time to add the roadmap map view.</p>
          )}
        </section>
      </aside>

      <div className="main-shell">
        <section id="overview" className="hero-shell">
          <div className="hero-copy-block">
            <p className="eyebrow">OpenClaw Dev Days • TAMU Edition</p>
            <div className="hero-title-row"><img src="/beaver-badges-logo-256.png" alt="" aria-hidden="true" /><h1>Turn each stop into visible momentum.</h1></div>
            <p className="hero-copy">
              Beaver Badges tracks Texas stops, celebrates the milestones, and gives the workshop app a stronger dashboard feel without changing the core product story.
            </p>
            <div className="hero-actions">
              <a href="#locations" className="hero-action primary">Review locations</a>
              <a href="#badges" className="hero-action secondary">View badge path</a>
            </div>
          </div>

          <div className="hero-highlight-card">
            <div className="hero-highlight-header">
              <span className="pill">Progress snapshot</span>
              <span className="hero-highlight-state">{completionState}</span>
            </div>
            <div className="hero-stat-row">
              <div>
                <span>Total completion</span>
                <strong>{progressPercent.toFixed(0)}%</strong>
              </div>
              <div>
                <span>Unlocked badges</span>
                <strong>{unlockedBadges.length}</strong>
              </div>
            </div>
            <div className="progress-meter large">
              <div className="progress-meter-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="hero-highlight-copy">
              {nextBadge
                ? `${remainingForNextBadge} more stop${remainingForNextBadge === 1 ? '' : 's'} to unlock ${nextBadge.name}.`
                : 'You have unlocked every seeded badge. Legendary behavior.'}
            </p>
          </div>
        </section>

        <section className="summary-grid" aria-label="Progress summary">
          <article className="summary-card emphasis-card">
            <div className="summary-topline">
              <span className="summary-label">Visited stops</span>
              <span className="summary-trend positive">{visitedCount === 0 ? 'Start here' : `+${visitedCount} tracked`}</span>
            </div>
            <strong>{visitedCount}</strong>
            <p>Track progress across the seeded Texas route and make the completion state immediately legible.</p>
          </article>

          <article className="summary-card">
            <div className="summary-topline">
              <span className="summary-label">Next unlock</span>
              <span className="summary-trend">{nextBadge ? `${nextBadge.requiredVisits} stop goal` : 'All badges earned'}</span>
            </div>
            <strong>{nextBadge ? nextBadge.name : 'Legend status'}</strong>
            <div className="progress-meter compact">
              <div className="progress-meter-fill warm" style={{ width: `${nextBadgeProgress}%` }} />
            </div>
            <p>
              {nextBadge
                ? `${remainingForNextBadge} stop${remainingForNextBadge === 1 ? '' : 's'} remaining until the next milestone.`
                : 'No milestones left in the seed set.'}
            </p>
          </article>

          <article className="summary-card">
            <div className="summary-topline">
              <span className="summary-label">Filter focus</span>
              <span className="summary-trend">{selectedRegion}</span>
            </div>
            <strong>{filteredLocations.length}</strong>
            <p>Use regional filtering to keep the list tidy during demos and show future expansion points.</p>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel progress-panel">
            <div className="panel-header with-kicker">
              <div>
                <p className="panel-kicker">Current milestone</p>
                <h2>Road trip progress</h2>
              </div>
              <span>{visitedCount} / {locations.length} stops</span>
            </div>
            <div className="progress-callout">
              <div className="progress-copy-block">
                <strong>{nextBadge ? nextBadge.name : 'All badges complete'}</strong>
                <p>
                  {nextBadge
                    ? `Your next badge unlocks at ${nextBadge.requiredVisits} visits, with a clearer state treatment for workshop demos.`
                    : 'Every milestone in the current badge ladder has been cleared.'}
                </p>
              </div>
              <div className="progress-ring-card">
                <span>{progressPercent.toFixed(0)}%</span>
                <small>route complete</small>
              </div>
            </div>
            <div className="progress-meter large">
              <div className="progress-meter-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </article>

          <article className="panel filters-panel">
            <div className="panel-header with-kicker">
              <div>
                <p className="panel-kicker">Browse the route</p>
                <h2>Filter by region</h2>
              </div>
              <span>{selectedRegion}</span>
            </div>
            <div className="filter-group">
              {allRegions.map((region) => (
                <button
                  key={region}
                  className={selectedRegion === region ? 'filter active' : 'filter'}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </article>
        </section>

        <section className="content-grid">
          <article id="locations" className="panel">
            <div className="panel-header with-kicker">
              <div>
                <p className="panel-kicker">Checkpoint list</p>
                <h2>Locations</h2>
              </div>
              <span>{filteredLocations.length} showing</span>
            </div>
            <div className="cards-grid">
              {filteredLocations.map((location) => (
                <article key={location.id} className={location.visited ? 'location-card visited' : 'location-card'}>
                  <div className="location-main">
                    <div className="location-copy-block">
                      <div className="location-title-row">
                        <h3>{location.name}</h3>
                        <span className="region-chip">{location.region}</span>
                      </div>
                      <p>
                        {location.city}, {location.state}
                      </p>
                    </div>

                    <label className={location.visited ? 'toggle checked' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={location.visited}
                        onChange={() => toggleVisited(location.id)}
                      />
                      <span>{location.visited ? 'Visited' : 'Mark visited'}</span>
                    </label>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article id="badges" className="panel">
            <div className="panel-header with-kicker">
              <div>
                <p className="panel-kicker">Milestone ladder</p>
                <h2>Badge cabinet</h2>
              </div>
              <span>{unlockedBadges.length} unlocked</span>
            </div>
            <div className="badge-stack">
              {allBadges.map((badge) => {
                const unlocked = visitedCount >= badge.requiredVisits
                return (
                  <article key={badge.id} className={unlocked ? 'badge-card unlocked' : 'badge-card'}>
                    <div className="badge-icon">{unlocked ? '★' : '◎'}</div>
                    <div className="badge-content">
                      <div className="badge-title-row">
                        <h3>{badge.name}</h3>
                        <span>{badge.requiredVisits} stops</span>
                      </div>
                      <p>{badge.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
