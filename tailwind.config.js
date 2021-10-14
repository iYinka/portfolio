const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                red: "#fd3433",
            },
            fontFamily: {
                gemunu: "Gemunu Libre",
                raleway: "Raleway:ital",
                shadows: "Shadows Into Light Two",
            },
            fontSize: {
                title: "9xl",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
