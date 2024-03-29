import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/react";

export default function createEmotionCache(): EmotionCache {
  return createCache({ key: "css", prepend: true });
}
