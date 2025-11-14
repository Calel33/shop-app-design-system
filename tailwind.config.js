/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        // Accent Colors
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        // Base Colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Card Colors
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Popover Colors
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // Muted Colors
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        // Destructive Colors
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // Border & Input Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Chart Colors
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // Sidebar Colors
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
      },
      fontFamily: {
        sans: ['Anek Latin', 'ui-sans-serif', 'sans-serif', 'system-ui'],
        serif: ['Andada Pro', 'ui-serif', 'serif'],
        mono: ['Sometype Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '40px' }],
        'h2': ['24px', { lineHeight: '32px' }],
        'h3': ['18px', { lineHeight: '24px' }],
        'body': ['16px', { lineHeight: '22px' }],
        'small': ['14px', { lineHeight: '20px' }],
      },
      borderRadius: {
        'sm': 'calc(1rem - 4px)',
        'md': 'calc(1rem - 2px)',
        'lg': '1rem',
        'xl': 'calc(1rem + 4px)',
      },
      boxShadow: {
        '2xs': '0px 0px 0px 0px hsl(0 0% 10% / 0.03)',
        'xs': '0px 0px 0px 0px hsl(0 0% 10% / 0.03)',
        'sm': '0px 0px 0px 0px hsl(0 0% 10% / 0.05), 0px 1px 2px -1px hsl(0 0% 10% / 0.05)',
        'DEFAULT': '0px 0px 0px 0px hsl(0 0% 10% / 0.05), 0px 1px 2px -1px hsl(0 0% 10% / 0.05)',
        'md': '0px 0px 0px 0px hsl(0 0% 10% / 0.05), 0px 2px 4px -1px hsl(0 0% 10% / 0.05)',
        'lg': '0px 0px 0px 0px hsl(0 0% 10% / 0.05), 0px 4px 6px -1px hsl(0 0% 10% / 0.05)',
        'xl': '0px 0px 0px 0px hsl(0 0% 10% / 0.05), 0px 8px 10px -1px hsl(0 0% 10% / 0.05)',
        '2xl': '0px 0px 0px 0px hsl(0 0% 10% / 0.13)',
      },
    },
  },
  plugins: [],
}

