module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        light: "8px 8px 0px -3px #0D1117",
        dark: "8px 8px 0px -3px #FFFFFF",
        progress: "0 0 10px #29d, 0 0 5px #29d",
      },
      colors: {
        azure: "#EFFFFD",
        red: "#F84B3E",
        "base-0": "#0D1117",
        "base-1": "#161B22",
        "base-2": "#21262D",
        "base-3": "#89929B",
        "base-4": "#C6CDD5",
        "base-5": "#ECF2F8",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
      },
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              pre: {
                code: {
                  padding: "0 !important",
                  fontSize: theme("fontSize.base")[0],
                },
              },
              code: {
                borderRadius: theme("borderRadius.sm"),
                paddingTop: theme("spacing.1"),
                paddingBottom: theme("spacing.1"),
                paddingLeft: theme("spacing.1"),
                paddingRight: theme("spacing.1"),
                fontFamily: "inherit !important",
                fontWeight: "500 !important",
                color: "#0D1117",
                backgroundColor: theme("colors.gray.300"),
              },
              "pre, pre code": {
                borderRadius: theme("borderRadius.sm"),
                color: theme("colors.gray.200"),
                backgroundColor: "#161B22",
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
              hr: {
                borderColor: theme("colors.gray.300"),
              },
              ul: {
                marginTop: "0 !important",
                marginBottom: "0 !important",
              },
              li: {
                marginTop: "0 !important",
                marginBottom: "0 !important",
              },
              img: {
                marginLeft: "auto",
                marginRight: "auto",
              },
              "h1,h2,h3,h4,h5,h6": {
                width: "fit-content",
                a: {
                  color: "inherit",
                  textDecoration: "none",
                },
              },
              a: {
                textUnderlineOffset: "5px",
                textDecorationStyle: "dashed",
                "&:hover": {
                  color: "#3B82F6",
                  textDecorationColor: "#3B82F6",
                },
              },
            },
          },
          lg: {
            css: {
              h1: {
                fontSize: theme("fontSize.4xl")[0],
              },
              "pre, pre code": {
                borderRadius: theme("borderRadius.sm"),
              },
              pre: {
                code: {
                  fontSize: theme("fontSize.lg")[0],
                },
              },
            },
          },
          invert: {
            css: {
              hr: {
                borderColor: theme("colors.gray.700"),
              },
              code: {
                color: theme("colors.gray.300"),
                backgroundColor: "#161B22",
              },
              "a code": {
                color: theme("colors.white"),
              },
              "pre, pre code": {
                color: theme("colors.gray.200"),
                backgroundColor: "#0D1117",
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
