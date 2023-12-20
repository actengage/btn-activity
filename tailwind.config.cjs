module.exports = {
    content: [
        './index.html',
        './src/*.vue',
        './node_modules/@vue-interface/btn/src/*.{vue,ts,js}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vue-interface/btn/tailwindcss')()
    ]
};