import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontFamily: 'serif', fontSize: '4rem', margin: 0 }}>404</h1>
        <p style={{ color: '#54605b', marginBottom: '1.5rem' }}>Page not found. Let's get you back to Parlance.</p>
        <Link href="/" style={{ padding: '0.75rem 1.5rem', background: '#172020', color: '#f5f1e9', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
          Go home
        </Link>
      </div>
    </main>
  )
}