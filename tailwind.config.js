/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        slide_in_bottom: {
          '0%': { transform: 'translateY(1000px)' , opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },

        slide_in_left:{
          '0%': { transform: 'translateX(0)' ,  },
          '100%': { transform: 'translateX(-500px)',},
        },
        slide_in_right:{
          '0%': { transform: 'translateX(0)' ,  },
          '100%': { transform: 'translateX(500px)',},
        }
      },
      animation: {
        'slide-in-bottom':'slide_in_bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-left': 'slide_in_left 1.5s ease-in reverse forwards',
        'slide-in-right': 'slide_in_right 1.5s ease-in reverse forwards'
      },  
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))',
      }                                              
    },
  },
  plugins: [],
}

