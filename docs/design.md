# Design Decisions

## Visual Style: Miximalist
- Bold, large typography (hero text: 80-120px)
- Generous whitespace (sections: 100vh minimum)
- Subtle 3D depth via shadows, layers, parallax
- Dark background (#0a0a0f) with electric blue accent (#2563EB)

## Background: World-Class Animated Canvas
### Core Elements
- **3D Floating Spheres** — Multi-layered particle spheres with varying sizes (small, medium, large), subtle glow, depth-of-field blur
- **Mouse Parallax** — Background layers respond to cursor position (X/Y axis)
- **Scroll Animation** — Spheres drift/rotate as user scrolls through sections
- **Gradient Orbs** — Soft glowing gradient blobs that morph and pulse
- **Grid Lines** — Subtle perspective grid fading into distance
- **Noise Texture** — Film grain overlay for premium feel
- **Light Rays** — Subtle volumetric light beams that shift

### Animation Properties
- Spheres: continuous float (sine wave), random drift, gentle rotation
- Glow: pulsing opacity (0.3-0.7), color shift within accent palette
- Parallax: smooth lerp (0.05-0.1 factor), 3-4 depth layers
- Performance: requestAnimationFrame, throttled mouse events

### Responsive Behavior
- **Desktop (>1024px):** Full 3D canvas, all effects, 200+ particles
- **Tablet (768-1024px):** Reduced particles (100), simplified shaders
- **Mobile (<768px):** CSS animations only, 50 particles max, GPU-optimized

### Color Palette
```
Background:    #0a0a0f (near black)
Surface:       #111118 (cards)
Primary:       #2563EB (electric blue)
Accent:        #60A5FA (light blue glow)
Secondary:     #1e40af (deep blue)
Text Primary:  #ffffff
Text Secondary: #94a3b8
Border:        #1e293b
```

## Typography
- Headlines: Inter / Space Grotesk (bold)
- Body: Inter (regular)
- Code: JetBrains Mono

## 3D Elements
- Floating particle spheres (react-three-fiber)
- Mouse-interactive parallax
- Smooth scroll-driven camera movement

## UI Components
- Glassmorphism cards (blur, transparency)
- Custom cursor (dot + ring, morphs on hover)
- Smooth page transitions (GSAP)
- Hover states with subtle scale/shadow

## Animations
- Entrance: Staggered fade-up
- Scroll: Parallax layers
- Hover: Scale + glow effects
- Avatar: Subtle idle animation