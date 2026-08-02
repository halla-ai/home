/**
 * Shared motion presets — single source of truth for every animated value.
 *
 * Apple's damping/response model (Designing Fluid Interfaces, WWDC 2018)
 * mapped to Motion's bounce/duration spring API:
 *   - damping 1.0 (critically damped, no overshoot)  → bounce: 0
 *   - damping ~0.8 (slight bounce, momentum only)    → bounce: 0.2
 */

export const SPRING = {
  /** Default UI spring — no overshoot. */
  ui: { type: 'spring', bounce: 0, duration: 0.4 },
  /** Momentum spring — only after a flick/drag carried velocity. */
  momentum: { type: 'spring', bounce: 0.2, duration: 0.4 },
  /** Drawer/sheet spring. */
  drawer: { type: 'spring', bounce: 0.2, duration: 0.3 },
} as const;

export const reduced = (): boolean =>
  matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Apple's momentum projection (exponential decay), NOT the physics-textbook
 * v²/2a. Given a release velocity in px/s, returns the traveled distance in px.
 */
export const project = (v: number, d = 0.998): number =>
  (v / 1000) * d / (1 - d);

/**
 * Rubber-band resistance for dragging past a boundary.
 * The further past the bound, the less the element follows.
 */
export const rubberband = (
  overshoot: number,
  dimension: number,
  constant = 0.55,
): number =>
  (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
