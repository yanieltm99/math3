import useSound from "use-sound";
import successSound from "@/assets/sounds/success.mp3";
import errorSound from "@/assets/sounds/error.mp3";
import resultSound from "@/assets/sounds/result-sound.mp3";

/**
 * Hook for managing audio feedback in exercises
 * Returns functions to play success, error, and result sounds
 */
export function useAudioFeedback() {
  const [playSuccess] = useSound(successSound);
  const [playError] = useSound(errorSound);
  const [playResult] = useSound(resultSound);

  return {
    playSuccess,
    playError,
    playResult,
  };
}
