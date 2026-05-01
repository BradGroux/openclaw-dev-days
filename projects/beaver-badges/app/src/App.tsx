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
    visitedCount === 0 ? 'Ready for your first stop' : visitedCount === locations.length ? 'All demo stops visited' : 'Road trip in progress'
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
            <span>Buc-ee’s trip tracker</span>
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
          <p className="sidebar-label">Next stops</p>
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
            <p className="sidebar-copy">Every demo location has been visited. Add more stops to keep the trip going.</p>
          )}
        </section>
      </aside>

      <div className="main-shell">
        <section id="overview" className="hero-shell">
          <div className="hero-copy-block">
            <p className="eyebrow">Buc-ee’s Badge Tracker</p>
            <div className="hero-title-row"><img src="/beaver-badges-logo-256.png" alt="" aria-hidden="true" /><h1>Track your Buc-ee’s stops and earn badges.</h1></div>
            <p className="hero-copy">
              Mark the Buc-ee’s locations you’ve visited, see how close you are to the next badge, and pick the next stop for your Texas road trip.
            </p>
            <div className="hero-actions">
              <a href="#locations" className="hero-action primary">Choose stops</a>
              <a href="#badges" className="hero-action secondary">See badges</a>
            </div>
          </div>

          <div className="hero-highlight-card">
            <div className="hero-highlight-header">
              <span className="pill">Trip snapshot</span>
              <span className="hero-highlight-state">{completionState}</span>
            </div>
            <div className="hero-stat-row">
              <div>
                <span>Stops visited</span>
                <strong>{progressPercent.toFixed(0)}%</strong>
              </div>
              <div>
                <span>Badges earned</span>
                <strong>{unlockedBadges.length}</strong>
              </div>
            </div>
            <div className="progress-meter large">
              <div className="progress-meter-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="hero-highlight-copy">
              {nextBadge
                ? `${remainingForNextBadge} more Buc-ee’s stop${remainingForNextBadge === 1 ? '' : 's'} to earn ${nextBadge.name}.`
                : 'You’ve earned every badge in this demo route.'}
            </p>
          </div>
        </section>

        <section className="summary-grid" aria-label="Progress summary">
          <article className="summary-card emphasis-card">
            <div className="summary-topline">
              <span className="summary-label">Buc-ee’s stops visited</span>
              <span className="summary-trend positive">{visitedCount === 0 ? 'First stop' : `+${visitedCount} visited`}</span>
            </div>
            <strong>{visitedCount}</strong>
            <p>Mark each location as visited and watch your badge count grow.</p>
          </article>

          <article className="summary-card">
            <div className="summary-topline">
              <span className="summary-label">Next badge</span>
              <span className="summary-trend">{nextBadge ? `${nextBadge.requiredVisits} stop${nextBadge.requiredVisits === 1 ? '' : 's'} needed` : 'Complete'}</span>
            </div>
            <strong>{nextBadge ? nextBadge.name : 'Trip complete'}</strong>
            <div className="progress-meter compact">
              <div className="progress-meter-fill warm" style={{ width: `${nextBadgeProgress}%` }} />
            </div>
            <p>
              {nextBadge
                ? `${remainingForNextBadge} more Buc-ee’s stop${remainingForNextBadge === 1 ? '' : 's'} until you earn this badge.`
                : 'You’ve completed every badge in this demo route.'}
            </p>
          </article>

          <article className="summary-card">
            <div className="summary-topline">
              <span className="summary-label">Showing region</span>
              <span className="summary-trend">{selectedRegion}</span>
            </div>
            <strong>{filteredLocations.length}</strong>
            <p>Filter the Buc-ee’s list by region when you want to plan one part of the trip at a time.</p>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel progress-panel">
            <div className="panel-header with-kicker">
              <div>
                <p className="panel-kicker">Current badge goal</p>
                <h2>Buc-ee’s road trip</h2>
              </div>
              <span>{visitedCount} / {locations.length} stops</span>
            </div>
            <div className="progress-callout">
              <div className="progress-copy-block">
                <strong>{nextBadge ? nextBadge.name : 'Every badge earned'}</strong>
                <p>
                  {nextBadge
                    ? `Visit ${nextBadge.requiredVisits} Buc-ee’s location${nextBadge.requiredVisits === 1 ? '' : 's'} to earn this badge.`
                    : 'You’ve cleared every badge in the current demo.'}
                </p>
              </div>
              <div className="progress-ring-card">
                <span>{progressPercent.toFixed(0)}%</span>
                <small>stops visited</small>
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
