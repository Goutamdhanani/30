import './style.css'
import { createButtonGallery } from './components/ButtonGallery.js'
import { createTabSystem } from './components/TabSystem.js'
import { createAnimatedCards } from './components/AnimatedCards.js'

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">Themed Button Gallery</h1>
      <p class="app-subtitle">Beautiful buttons with smooth animations</p>
    </header>
    
    <main class="main-content">
      ${createTabSystem()}
    </main>
  </div>
`

// Initialize interactive components
document.addEventListener('DOMContentLoaded', () => {
  initializeTabSystem()
  initializeButtons()
  initializeCards()
})

function initializeTabSystem() {
  const tabs = document.querySelectorAll('.tab-button')
  const panels = document.querySelectorAll('.tab-panel')
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.dataset.tab
      
      // Remove active states
      tabs.forEach(t => t.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      
      // Add active states
      tab.classList.add('active')
      document.getElementById(targetPanel).classList.add('active')
    })
  })
}

function initializeButtons() {
  const buttons = document.querySelectorAll('.btn')
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Create ripple effect
      const ripple = document.createElement('span')
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      
      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.classList.add('ripple')
      
      button.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
}

function initializeCards() {
  const cards = document.querySelectorAll('.animated-card')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  cards.forEach(card => observer.observe(card))
}