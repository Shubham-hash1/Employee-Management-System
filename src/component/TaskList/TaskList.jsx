import React from 'react'
import { motion } from 'framer-motion'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div style={{ marginTop: '28px' }}>
      <motion.h3
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          margin: '0 0 14px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px', fontWeight: 500,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}
      >
        Your Tasks — {data.tasks.length} total
      </motion.h3>

      <div style={{
        display: 'flex', gap: '14px',
        overflowX: 'auto', paddingBottom: '12px',
        height: '280px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.1) transparent',
      }}>
        {data.tasks.map((elem, idx) => {
          if (elem.active)     return <AcceptTask   key={idx} data={elem} />
          if (elem.newTask)    return <NewTask       key={idx} data={elem} />
          if (elem.completed)  return <CompleteTask  key={idx} data={elem} />
          if (elem.failed)     return <FailedTask    key={idx} data={elem} />
          return null
        })}
      </div>
    </div>
  )
}

export default TaskList
