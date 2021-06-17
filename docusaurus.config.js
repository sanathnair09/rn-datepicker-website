/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "React Native Date Time Picker",
  tagline: "Date Time Picker Component for React Native",
  url: "https://sanathnair09.github.io",
  baseUrl: "/rn-datepicker-website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sanathnair09", // Usually your GitHub org/user name.
  projectName: "rn-datepicker-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Date Time Picker",

      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/react-native-datetimepicker/datetimepicker",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} React Native Date Time Picker.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/react-native-datetimepicker/datetimepicker",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
