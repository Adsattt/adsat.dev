import { defineConfig, presetIcons, presetWind, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    fontFamily: {
      sans: '"Inter", system-ui, -apple-system, sans-serif',
    },
    colors: {
      gray: {
        150: '#EEEFF2',
        1000: '#050505',
      },
      lotion: '#fafafa',
      erie: '#1C1C1E',
      surfaceLight: '#f3f4f6',
      surfaceDark: '#111827',
      accentCyan: '#69E5FE',
    },
    animation: {
      keyframes: {
        marquee: '{0% { transform: translateX(0%); } 100% { transform: translateX(-50%); }}',
        'ping-slow': '{75%, 100% { transform: scale(2); opacity: 0; }}',
        'slide-enter': '{0% { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; }}',
        'fade-in': '{from { opacity: 0; } to { opacity: 1; }}',
        'fade-out': '{from { opacity: 1; } to { opacity: 0; }}',
      },
      durations: {
        marquee: '25s',
        'ping-slow': '2s',
        'slide-enter': '0.6s',
        'fade-in': '0.3s',
        'fade-out': '0.3s',
      },
      timingFns: {
        marquee: 'linear',
        'ping-slow': 'cubic-bezier(0, 0, 0.2, 1)',
        'fade-in': 'forwards',
        'fade-out': 'forwards',
      },
      counts: {
        marquee: 'infinite',
        'ping-slow': 'infinite',
      }
    }
  },
  rules: [
    [/^slide-enter$/, () => ({ 
      'animation': 'slide-enter 0.6s both 1',
      'animation-delay': 'calc(var(--enter-initial, 0ms) + var(--enter-step, 60ms) * var(--enter-stage, 0))'
    })]
  ]
})
