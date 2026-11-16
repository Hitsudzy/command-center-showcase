/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** `1` в демо-сборке (`.env.demo`): приложение работает только на подставном API. */
  readonly VITE_DEMO?: string;
}
