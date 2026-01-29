import { defineConfig } from 'vite';
import { extensions, /*classicEmberSupport,*/ ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    //classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  optimizeDeps: {
    noDiscovery: true,
    include: ['ember-source > backburner.js', '@embroider/macros'],
  },
});
