/**
 * Lazy-loaded confetti utility to reduce initial bundle size
 * Dynamically imports canvas-confetti only when needed
 */
let confettiModule: any = null;

export async function showConfetti(options?: {
  particleCount?: number;
  spread?: number;
  origin?: { x: number; y: number };
}) {
  if (!confettiModule) {
    confettiModule = await import("canvas-confetti");
  }
  
  const confetti = confettiModule.default || confettiModule;
  
  return confetti({
    particleCount: options?.particleCount ?? 150,
    spread: options?.spread ?? 70,
    origin: options?.origin,
  });
}

/**
 * Preloads confetti module for better UX (optional)
 * Can be called early in the app lifecycle to avoid loading delays
 */
export function preloadConfetti() {
  if (typeof window !== "undefined" && !confettiModule) {
    import("canvas-confetti").then(module => {
      confettiModule = module;
    });
  }
}
