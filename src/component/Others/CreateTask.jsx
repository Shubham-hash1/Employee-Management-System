import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../../context/AuthProvider'

const inputStyle = (focused, name) => ({
  width: '100%', padding: '10px 14px',
  borderRadius: '10px', boxSizing: 'border-box',
  border: focused === name ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.04)',
  color: '#f0f0f0', fontSize: '13px', outline: 'none',
  fontFamily: "'DM Sans', sans-serif",
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxShadow: focused === name ? '0 0 0 3px rgba(16,185,129,0.08)' : 'none',
})

const labelStyle = {
  display: 'block', fontSize: '10px', fontWeight: 500,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '6px',
  fontFamily: "'DM Sans', sans-serif",
}

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [focused, setFocused] = useState(null)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [success, setSuccess] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const newTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
    const data = [...userData]
    data.forEach(elem => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask += 1
      }
    })
    setUserData(data)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
    setTaskTitle(''); setCategory(''); setAsignTo(''); setTaskDate(''); setTaskDescription('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      style={{
        marginTop: '24px', padding: '24px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Syne', sans-serif",
          fontSize: '18px', fontWeight: 700,
          color: '#f0f0f0',
        }}>Create New Task</h2>
        {success && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              fontSize: '12px', color: '#10b981',
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              padding: '4px 12px', borderRadius: '100px',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >✓ Task created!</motion.span>
        )}
      </div>

      <form onSubmit={submitHandler} style={{ display: 'flex', gap: '24px' }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: 'Task Title', value: taskTitle, set: setTaskTitle, name: 'title', type: 'text', ph: 'e.g. Design new landing page' },
            { label: 'Due Date', value: taskDate, set: setTaskDate, name: 'date', type: 'date', ph: '' },
            { label: 'Assign To', value: asignTo, set: setAsignTo, name: 'assign', type: 'text', ph: 'Employee first name' },
            { label: 'Category', value: category, set: setCategory, name: 'cat', type: 'text', ph: 'Design, Dev, QA...' },
          ].map(field => (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <input
                type={field.type} value={field.value} required placeholder={field.ph}
                onChange={e => field.set(e.target.value)}
                onFocus={() => setFocused(field.name)}
                onBlur={() => setFocused(null)}
                style={inputStyle(focused, field.name)}
              />
            </div>
          ))}
        </div>

        {/* Right */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Description</label>
          <textarea
            value={taskDescription} required
            onChange={e => setTaskDescription(e.target.value)}
            onFocus={() => setFocused('desc')}
            onBlur={() => setFocused(null)}
            placeholder="Describe the task in detail..."
            style={{
              ...inputStyle(focused, 'desc'),
              flex: 1, resize: 'none', minHeight: '140px',
              lineHeight: 1.6,
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(16,185,129,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '14px', padding: '12px',
              borderRadius: '12px', border: 'none',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#fff', fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.02em',
            }}
          >
            + Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

export default CreateTask
