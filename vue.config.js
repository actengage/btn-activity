module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-nested'),
                    require('tailwindcss')
                ]
            }
        }
    }
};