import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {
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

      {/* Blue glow */}
      <div style={{
        position: 'fixed', top: '-160px', right: '20%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <Header changeUser={changeUser} data={data} />

        {/* Employee badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          marginTop: '8px', padding: '4px 12px', borderRadius: '100px',
          background: 'rgba(96,165,250,0.08)',
          border: '1px solid rgba(96,165,250,0.2)',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa' }} />
          <span style={{
            fontSize: '10px', color: '#60a5fa',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
          }}>Employee Dashboard</span>
        </div>

        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
