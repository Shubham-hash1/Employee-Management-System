import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      style={{
        marginTop: '20px', padding: '20px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
      }}
    >
      <h2 style={{
        margin: '0 0 16px',
        fontFamily: "'Syne', sans-serif",
        fontSize: '18px', fontWeight: 700, color: '#f0f0f0',
      }}>Team Overview</h2>

      {/* Header row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        padding: '10px 16px', borderRadius: '10px',
        background: 'rgba(255,255,255,0.05)',
        marginBottom: '8px',
      }}>
        {['Employee', 'New', 'Active', 'Completed', 'Failed'].map((h, i) => (
          <span key={h} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px', fontWeight: 600,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textAlign: i > 0 ? 'center' : 'left',
          }}>{h}</span>
        ))}
      </div>

      {/* Data rows */}
      {userData.map((emp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.07 + 0.4, duration: 0.5 }}
          whileHover={{ background: 'rgba(255,255,255,0.04)' }}
          style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            padding: '12px 16px', borderRadius: '10px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            transition: 'background 0.2s',
            cursor: 'default',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '30px', height: '30px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: 700, color: '#fff',
              fontFamily: "'Syne', sans-serif", flexShrink: 0,
            }}>{emp.firstName[0]}</div>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px', fontWeight: 500, color: '#f0f0f0',
            }}>{emp.firstName}</span>
          </div>

          {[
            { val: emp.taskCounts.newTask,   color: '#60a5fa' },
            { val: emp.taskCounts.active,    color: '#f59e0b' },
            { val: emp.taskCounts.completed, color: '#10b981' },
            { val: emp.taskCounts.failed,    color: '#f87171' },
          ].map((item, i) => (
            <span key={i} style={{
              textAlign: 'center',
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px', fontWeight: 700, color: item.color,
            }}>{item.val}</span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AllTask
