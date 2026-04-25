import React from 'react'
import { motion } from 'framer-motion'

const AcceptTask = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(248,113,113,0.2)' }}
      style={{
        flexShrink: 0, width: '280px', height: '100%',
        borderRadius: '20px', padding: '20px',
        background: 'rgba(248,113,113,0.08)',
        border: '1px solid rgba(248,113,113,0.25)',
        display: 'flex', flexDirection: 'column',
        cursor: 'default', transition: 'box-shadow 0.3s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          background: 'rgba(248,113,113,0.2)',
          border: '1px solid rgba(248,113,113,0.4)',
          color: '#f87171', fontSize: '10px', fontWeight: 600,
          padding: '4px 10px', borderRadius: '100px',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {data.category}
        </span>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Sans', sans-serif" }}>
          {data.taskDate}
        </span>
      </div>

      {/* Active indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f87171', flexShrink: 0 }}
        />
        <span style={{ fontSize: '10px', color: '#f87171', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Active
        </span>
      </div>

      <h2 style={{
        margin: '10px 0 0',
        fontFamily: "'Syne', sans-serif",
        fontSize: '18px', fontWeight: 700,
        color: '#f0f0f0', lineHeight: 1.3,
      }}>{data.taskTitle}</h2>

      <p style={{
        margin: '8px 0 0', flex: 1,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '12px', color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.6,
      }}>{data.taskDescription}</p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}
          style={{
            flex: 1, padding: '9px', borderRadius: '10px', border: 'none',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: '#fff', fontSize: '11px', fontWeight: 600,
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
          }}
        >✓ Completed</motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}
          style={{
            flex: 1, padding: '9px', borderRadius: '10px',
            border: '1px solid rgba(248,113,113,0.4)',
            background: 'rgba(248,113,113,0.12)',
            color: '#f87171', fontSize: '11px', fontWeight: 600,
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
          }}
        >✕ Failed</motion.button>
      </div>
    </motion.div>
  )
}

export default AcceptTask
