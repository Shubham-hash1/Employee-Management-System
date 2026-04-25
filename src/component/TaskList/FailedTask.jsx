import React from 'react'
import { motion } from 'framer-motion'

const FailedTask = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(245,158,11,0.15)' }}
      style={{
        flexShrink: 0, width: '280px', height: '100%',
        borderRadius: '20px', padding: '20px',
        background: 'rgba(245,158,11,0.06)',
        border: '1px solid rgba(245,158,11,0.2)',
        display: 'flex', flexDirection: 'column',
        cursor: 'default', transition: 'box-shadow 0.3s',
        opacity: 0.8,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          background: 'rgba(245,158,11,0.12)',
          border: '1px solid rgba(245,158,11,0.3)',
          color: '#f59e0b', fontSize: '10px', fontWeight: 600,
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
        <span style={{ fontSize: '10px', color: '#f59e0b', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          ✕ Failed
        </span>
      </div>

      <h2 style={{
        margin: '10px 0 0',
        fontFamily: "'Syne', sans-serif",
        fontSize: '18px', fontWeight: 700,
        color: 'rgba(240,240,240,0.5)',
        lineHeight: 1.3,
      }}>{data.taskTitle}</h2>

      <p style={{
        margin: '8px 0 0', flex: 1,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '12px', color: 'rgba(255,255,255,0.28)',
        lineHeight: 1.6,
      }}>{data.taskDescription}</p>

      <div style={{
        width: '100%', padding: '10px', borderRadius: '10px',
        border: '1px solid rgba(245,158,11,0.2)',
        background: 'rgba(245,158,11,0.06)',
        color: '#f59e0b', fontSize: '11px', fontWeight: 600,
        textAlign: 'center', marginTop: '16px',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        ✕ Failed
      </div>
    </motion.div>
  )
}

export default FailedTask
