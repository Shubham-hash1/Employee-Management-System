import React from 'react'
import { motion } from 'framer-motion'

const Header = ({ changeUser, data }) => {
  const username = data ? data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Avatar */}
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontWeight: 700, color: '#fff',
          fontFamily: "'Syne', sans-serif",
          boxShadow: '0 0 16px rgba(16,185,129,0.3)',
        }}>
          {username[0].toUpperCase()}
        </div>
        <div>
          <p style={{
            margin: 0, fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            Welcome back
          </p>
          <h1 style={{
            margin: 0,
            fontFamily: "'Syne', sans-serif",
            fontSize: '22px', fontWeight: 800,
            color: '#f0f0f0', letterSpacing: '-0.01em',
          }}>
            {username} 👋
          </h1>
        </div>
      </div>

      <motion.button
        onClick={logOutUser}
        whileHover={{ scale: 1.04, background: 'rgba(248,113,113,0.2)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '9px 20px', borderRadius: '10px',
          border: '1px solid rgba(248,113,113,0.3)',
          background: 'rgba(248,113,113,0.1)',
          color: '#f87171', fontSize: '13px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '6px',
          transition: 'background 0.2s',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Log Out
      </motion.button>
    </motion.div>
  )
}

export default Header
