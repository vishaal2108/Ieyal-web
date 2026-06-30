/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // IEYAL Brand Colors — Light theme inspired
        ieyal: {
          primary:   '#d70029', // Brand Red
          secondary: '#162f62', // Navy Blue
          accent:    '#ce0037', // Button Red
          dark:      '#212529', // Charcoal Black
          darker:    '#162f62', // Navy Blue (Footer/Heading)
          light:     '#f4f6fc', // Light BG
          border:    '#E5E7EB', // Border Gray
        },
        // Design Token Aliases
        primary: {
          50:  '#FDF2F8',
          100: '#FCDAE8',
          200: '#FAB5D0',
          300: '#F591B8',
          400: '#EE6CA4',
          500: '#E6017F', // brand primary
          600: '#D60070',
          700: '#C6005F',
          800: '#A00050',
          900: '#7A003D',
          950: '#5A002A',
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
        sans:    ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
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
        'soft-xs': '0 1px 3px 0 rgba(31, 41, 55, 0.06)',
        'soft-sm': '0 2px 8px 0 rgba(31, 41, 55, 0.08)',
        'soft':    '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'soft-md': '0 8px 16px 0 rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 12px 24px 0 rgba(0, 0, 0, 0.15)',
        'soft-xl': '0 20px 40px 0 rgba(0, 0, 0, 0.18)',
        'card':    '0 4px 6px 0 rgba(0, 0, 0, 0.10)',
        'card-hover': '0 8px 16px 0 rgba(0, 0, 0, 0.12)',
        'glass':   '0 8px 32px 0 rgba(0, 0, 0, 0.10)',
        'navbar':  '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        'section-y': '100px',
        'section-x': '40px',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #162f62 0%, #1a3a78 100%)',
        'hero-radial':      'radial-gradient(ellipse at 70% 50%, rgba(215,0,41,0.08) 0%, transparent 70%)',
        'section-gradient': 'linear-gradient(180deg, #f4f6fc 0%, #ffffff 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        'primary-gradient': 'linear-gradient(to right, #de001d, #910094)',
        'accent-gradient':  'linear-gradient(to right, #de001d, #ce0037)',
        'glass-gradient':   'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
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
      /* Professional Utility Classes */
      content: {
        'empty': '""',
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
      dropShadow: {
        'soft': '0 4px 12px rgba(15, 43, 91, 0.08)',
        'soft-md': '0 8px 20px rgba(15, 43, 91, 0.10)',
        'soft-lg': '0 12px 32px rgba(15, 43, 91, 0.12)',
      },
      /* Text and Typography Utilities */
      textDecoration: {
        'none': 'none',
        'underline': 'underline',
      },
      /* Border and Divider Utilities */
      borderOpacity: {
        '5': '0.05',
        '10': '0.10',
      },
      /* Transform and Animation Utilities */
      skew: {
        '-2': '-2deg',
        '-1': '-1deg',
        '1': '1deg',
        '2': '2deg',
      },
      /* Filters */
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(100%)',
        'sepia': 'sepia(100%)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
};
