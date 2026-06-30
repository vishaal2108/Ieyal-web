/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // IEYAL Brand Colors — Deep Navy + Electric Blue + Gold system
        ieyal: {
          primary:   '#0F2B5B', // Deep Navy
          secondary: '#1A6FDB', // Electric Blue
          accent:    '#F59E0B', // Amber Gold
          dark:      '#060E1F', // Near Black
          darker:    '#030914', // Deepest Dark
        },
        // Design Token Aliases
        primary: {
          50:  '#EEF4FF',
          100: '#D9E8FF',
          200: '#B3D1FF',
          300: '#7DB3FF',
          400: '#4090FF',
          500: '#1A6FDB', // brand secondary / interactive
          600: '#1359B5',
          700: '#0F4490',
          800: '#0F2B5B', // brand primary / dark headers
          900: '#091B3F',
          950: '#060E1F',
        },
        accent: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // brand accent
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle:  '#F8FAFC',
          muted:   '#F1F5F9',
          border:  '#E2E8F0',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error:   '#EF4444',
        info:    '#3B82F6',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '6xl': ['3.75rem',  { lineHeight: '1.1' }],
        '7xl': ['4.5rem',   { lineHeight: '1.05' }],
        '8xl': ['6rem',     { lineHeight: '1' }],
        '9xl': ['8rem',     { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft-xs': '0 1px 3px 0 rgba(15, 43, 91, 0.06)',
        'soft-sm': '0 2px 8px 0 rgba(15, 43, 91, 0.08)',
        'soft':    '0 4px 16px 0 rgba(15, 43, 91, 0.10)',
        'soft-md': '0 8px 24px 0 rgba(15, 43, 91, 0.12)',
        'soft-lg': '0 16px 40px 0 rgba(15, 43, 91, 0.14)',
        'soft-xl': '0 24px 64px 0 rgba(15, 43, 91, 0.16)',
        'glow-blue': '0 0 40px 0 rgba(26, 111, 219, 0.25)',
        'glow-gold': '0 0 40px 0 rgba(245, 158, 11, 0.20)',
        'card':    '0 2px 8px 0 rgba(15,43,91,0.08), 0 8px 32px 0 rgba(15,43,91,0.06)',
        'card-hover': '0 8px 24px 0 rgba(15,43,91,0.14), 0 24px 64px 0 rgba(15,43,91,0.10)',
        'glass':   '0 8px 32px 0 rgba(15, 43, 91, 0.12)',
        'navbar':  '0 2px 24px 0 rgba(15, 43, 91, 0.08)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #060E1F 0%, #0F2B5B 50%, #0D1F47 100%)',
        'hero-radial':      'radial-gradient(ellipse at 70% 50%, rgba(26,111,219,0.18) 0%, transparent 70%)',
        'section-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0F2B5B 0%, #1A6FDB 100%)',
        'accent-gradient':  'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'glass-gradient':   'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
        'grid-pattern':     'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A6FDB\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      animation: {
        'marquee':        'marquee 35s linear infinite',
        'marquee-pause':  'marquee 35s linear infinite paused',
        'fade-in':        'fadeIn 0.6s ease-out forwards',
        'fade-in-up':     'fadeInUp 0.7s ease-out forwards',
        'fade-in-down':   'fadeInDown 0.7s ease-out forwards',
        'slide-in-left':  'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scale-in':       'scaleIn 0.5s ease-out forwards',
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'pulse-soft':     'pulseSoft 3s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'spin-slow':      'spin 8s linear infinite',
        'bounce-soft':    'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.90)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
