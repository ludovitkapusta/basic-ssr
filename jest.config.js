module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@server/(.*)$': '<rootDir>/server/$1',
  },
}
