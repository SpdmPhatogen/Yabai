import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'japanese': ['Zen Kaku Gothic New', 'Noto Sans JP', 'sans-serif'],
				'sans': ['Zen Kaku Gothic New', 'Noto Sans JP', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-bg': 'var(--gradient-bg)'
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-secondary': 'var(--glow-secondary)',
				'glow-accent': 'var(--glow-accent)'
			},
			transitionTimingFunction: {
				'anime': 'var(--anime-ease)',
				'bounce': 'var(--bounce-ease)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: 'var(--glow-primary)'
					},
					'50%': {
						boxShadow: 'var(--glow-secondary)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'particles': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px) scale(0)'
					},
					'50%': {
						opacity: '1',
						transform: 'translateY(-50px) scale(1)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-200px) scale(0)'
					}
				},
				'sakura-fall': {
					'0%': {
						transform: 'translateY(-100px) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(360deg)',
						opacity: '0'
					}
				},
				'glow-yellow': {
					'0%': {
						textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00'
					},
					'100%': {
						textShadow: '0 0 20px #ffff00, 0 0 30px #ffff00, 0 0 40px #ffff00, 0 0 50px #ffff00'
					}
				},
				'glow-red': {
					'0%': {
						textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000'
					},
					'100%': {
						textShadow: '0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000'
					}
				},
				'glow-purple': {
					'0%': {
						textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6'
					},
					'100%': {
						textShadow: '0 0 20px #8b5cf6, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6, 0 0 50px #8b5cf6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s var(--anime-ease)',
				'float': 'float 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.6s var(--bounce-ease)',
				'particles': 'particles 4s linear infinite',
				'sakura-fall': 'sakura-fall 15s linear infinite',
				'glow-yellow': 'glow-yellow 2s ease-in-out infinite alternate',
				'glow-red': 'glow-red 2s ease-in-out infinite alternate',
				'glow-purple': 'glow-purple 2s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
