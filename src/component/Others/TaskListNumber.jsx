import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { key: 'newTask',   label: 'New Tasks',      icon: '✦', color: '#60a5fa', glow: 'rgba(96,165,250,0.2)',  bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.2)'  },
  { key: 'completed', label: 'Completed',       icon: '✓', color: '#10b981', glow: 'rgba(16,185,129,0.2)', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
  { key: 'active',    label: 'Active Tasks',    icon: '◎', color: '#f59e0b', glow: 'rgba(245,158,11,0.2)', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  { key: 'failed',    label: 'Failed',          icon: '✕', color: '#f87171', glow: 'rgba(248,113,113,0.2)',bg: 'rgba(248,113,113,0.08)',border: 'rgba(248,113,113,0.2)' },
]

const TaskListNumbers = ({ data }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '14px',
      marginTop: '24px',
    }}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.08 + 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ y: -4, boxShadow: `0 16px 40px ${stat.glow}` }}
          style={{
            borderRadius: '16px',
            padding: '20px',
            background: stat.bg,
            border: `1px solid ${stat.border}`,
            cursor: 'default',
            transition: 'box-shadow 0.3s',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', marginBottom: '12px',
          }}>
            <span style={{
              fontSize: '18px', color: stat.color,
              fontWeight: 700, lineHeight: 1,
            }}>{stat.icon}</span>
            <span style={{
              fontSize: '10px', color: stat.color,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.1em', textTransform: 'uppercase',
              opacity: 0.8,
            }}>Tasks</span>
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 + 0.4 }}
            style={{
              margin: 0,
              fontFamily: "'Syne', sans-serif",
              fontSize: '36px', fontWeight: 800,
              color: stat.color, lineHeight: 1,
            }}
          >
            {data.taskCounts[stat.key]}
          </motion.h2>
          <p style={{
            margin: '6px 0 0',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px', color: 'rgba(255,255,255,0.45)',
            fontWeight: 400,
          }}>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default TaskListNumbers
