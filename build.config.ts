import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/templates/',
      outDir: './dist/templates',
      ext: 'js',
      declaration: false,
    },
    {
      builder: 'mkdist',
      input: './src/types/',
      outDir: './dist/types',
    },
  ],
  externals: [
    '@nuxt/types',
    '@sentry/browser',
    '@sentry/cli',
    '@sentry/core',
    '@sentry/node',
    '@sentry/tracing',
    '@sentry/types',
    '@sentry/webpack-plugin',
    'webpack',
    'vuex',
  ],
})
