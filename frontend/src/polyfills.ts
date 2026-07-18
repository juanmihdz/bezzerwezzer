// sockjs-client uses the Node-style `global` name internally even in its
// browser build. Expose the browser global before Angular loads the app bundle.
(globalThis as typeof globalThis & { global: typeof globalThis }).global = globalThis;
