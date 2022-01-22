module.exports = {
    projects: [
        {
            displayName: 'automated',
            preset: 'jest-playwright-preset',
            transform: {
                '\\.tsx?$': 'babel-jest',
                '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
                    'jest-transform-stub'
            },
            moduleNameMapper: {
                '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
                    'jest-transform-stub'
            },
            testMatch: [
                '<rootDir>/src/**/__automated__/**/*.test.ts',
                '<rootDir>/src/**/__automated__/**/*.test.tsx'
            ]
        },
        {
            displayName: 'unit/integration',
            transform: {
                // Use babel-jest to transpile tests with the next/babel preset
                // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
                '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
            },
            moduleNameMapper: {
                '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
                    'jest-transform-stub'
            },
            testEnvironment: 'jsdom',
            globalSetup: '<rootDir>/setupEnv.ts',
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
            modulePathIgnorePatterns: ['.next'],
            testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)']
        }
    ]
};
