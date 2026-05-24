import { useState, useEffect, useRef } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Service from './components/service'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Enable GPU acceleration
    if (dotRef.current && outlineRef.current) {
      dotRef.current.style.willChange = 'transform'
      outlineRef.current.style.willChange = 'transform'
    }

    const animate = () => {
      const speed = 0.15 // adjust for smoothness

      position.current.x += (mouse.current.x - position.current.x) * speed
      position.current.y += (mouse.current.y - position.current.y) * speed

      if (dotRef.current && outlineRef.current) {

        // Dot (instant follow)
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`

        // Ring (smooth follow)
        outlineRef.current.style.transform =
          `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <div className='bg-white dark:bg-black min-h-screen'>

      <Toaster />

      <Navbar theme={theme} setTheme={setTheme} />
      <div className="space-y-20">
      <Hero />
      <Trustedby />
      <Service />
      <OurWork />
      <Team />
      <ContactUs />
      </div>
      <Footer theme={theme} />

      {/* Cursor Ring */}
      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border-2 border-white pointer-events-none z-[9999] mix-blend-difference'
      ></div>

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference'
      ></div>

    </div>
  )
}

export default App