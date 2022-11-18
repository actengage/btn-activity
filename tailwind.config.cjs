module.exports = {
    content: [
        "./index.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vue-interface/btn/tailwindcss')
    ],
    safelist: [
        ...require('@vue-interface/btn/tailwindcss/safelist')()
    ]
};