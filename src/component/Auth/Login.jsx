import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [focused, setFocused] = useState(null)
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    const success = handleLogin(email, password)
    if (success === false) setError('Invalid email or password. Try again.')
    setLoading(false)
    setEmail('')
    setPassword('')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        input::placeholder { color: rgba(255,255,255,0.25); }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #141414 inset !important; -webkit-text-fill-color: #f0f0f0 !important; }
      `}</style>

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Emerald glow */}
      <div style={{
        position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          width: '100%', maxWidth: '420px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '48px 40px',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <div style={{
            width: '44px', height: '44px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 0 24px rgba(16,185,129,0.4)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '28px', fontWeight: 800,
            color: '#f0f0f0', margin: 0, letterSpacing: '-0.02em',
          }}>
            TaskFlow
          </h1>
          <p style={{
            margin: '6px 0 0', fontSize: '13px',
            color: 'rgba(255,255,255,0.38)', fontWeight: 300,
          }}>
            Sign in to manage your tasks
          </p>
        </motion.div>

        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label style={{
              display: 'block', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: focused === 'email' ? '#10b981' : 'rgba(255,255,255,0.35)',
              marginBottom: '8px', transition: 'color 0.2s',
            }}>Email</label>
            <input
              type="email" value={email} required
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              placeholder="admin@me.com"
              style={{
                width: '100%', padding: '12px 16px',
                borderRadius: '12px', boxSizing: 'border-box',
                border: focused === 'email' ? '1px solid rgba(16,185,129,0.6)' : '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#f0f0f0', fontSize: '14px', outline: 'none',
                transition: 'border-color 0.25s, box-shadow 0.25s',
                boxShadow: focused === 'email' ? '0 0 0 3px rgba(16,185,129,0.1)' : 'none',
              }}
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label style={{
              display: 'block', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: focused === 'password' ? '#10b981' : 'rgba(255,255,255,0.35)',
              marginBottom: '8px', transition: 'color 0.2s',
            }}>Password</label>
            <input
              type="password" value={password} required
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setFocused('password')}
              onBlur={() => setFocused(null)}
              placeholder="••••••••"
              style={{
                width: '100%', padding: '12px 16px',
                borderRadius: '12px', boxSizing: 'border-box',
                border: focused === 'password' ? '1px solid rgba(16,185,129,0.6)' : '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#f0f0f0', fontSize: '14px', outline: 'none',
                transition: 'border-color 0.25s, box-shadow 0.25s',
                boxShadow: focused === 'password' ? '0 0 0 3px rgba(16,185,129,0.1)' : 'none',
              }}
            />
          </motion.div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{
                  margin: 0, fontSize: '12px',
                  color: '#f87171', textAlign: 'center',
                  padding: '8px 12px', borderRadius: '8px',
                  background: 'rgba(248,113,113,0.1)',
                  border: '1px solid rgba(248,113,113,0.2)',
                }}
              >{error}</motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(16,185,129,0.5)' }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              style={{
                width: '100%', padding: '14px',
                borderRadius: '12px', border: 'none',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#fff', fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, letterSpacing: '0.03em',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                marginTop: '4px', position: 'relative', overflow: 'hidden',
              }}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                    style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                  />
                  Signing in...
                </span>
              ) : 'Sign In'}
            </motion.button>
          </motion.div>
        </form>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center', marginTop: '24px',
            fontSize: '11px', color: 'rgba(255,255,255,0.2)',
          }}
        >
          Admin: admin@me.com · Employee: e@e.com · Pass: 123
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Login
