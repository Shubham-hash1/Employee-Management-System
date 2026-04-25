import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ changeUser }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: '32px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '48px 48px', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Emerald glow top */}
      <div style={{
        position: 'fixed', top: '-160px', left: '30%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <Header changeUser={changeUser} data={null} />

        {/* Admin badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          marginTop: '8px', padding: '4px 12px', borderRadius: '100px',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.2)',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{
            fontSize: '10px', color: '#10b981',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
          }}>Admin Dashboard</span>
        </div>

        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
