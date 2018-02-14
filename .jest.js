module.exports = {
    setupFiles: [
        './tests/setup.js'
    ],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "<rootDir>/tests/__mocks__/styleMock.js"
    },
    "moduleFileExtensions": [
        "js",
        "jsx"
    ]
}