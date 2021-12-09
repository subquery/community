import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { glob } from "glob";

export default defineUserConfig<DefaultThemeOptions>({
  locales: {
    "/": {
      lang: "en-UK",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!",
    },
    "/bg/": {
      lang: "bg",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/de/": {
      lang: "de",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/es/": {
      lang: "es",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/fr/": {
      lang: "fr",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/id/": {
      lang: "id",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/it/": {
      lang: "it",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/ja/": {
      lang: "ja",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/ko/": {
      lang: "ko",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/ru/": {
      lang: "ru",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/th/": {
      lang: "th",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/tr/": {
      lang: "tr",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/uk/": {
      lang: "uk",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/vi/": {
      lang: "vi",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SubQuery Blog Posts",
      description:
        "Explore and transform your chain data to build intuitive dApps faster!.",
    },
  },
  themeConfig: {
    logo: "/assets/img/logo.png",
    logoLink: "https://subquery.network",
    lastUpdated: true,
    navbar: [
      {
        text: "Explorer",
        link: "https://explorer.subquery.network/",
        target: "_blank",
        rel: "",
      },
      {
        text: "Projects",
        link: "https://project.subquery.network/",
        target: "_blank",
        rel: "",
      },
      { text: "Documentation", link: "/" },
      {
        text: "GitHub",
        link: "https://github.com/subquery/subql",
        target: "_blank",
        rel: "",
      },
    ],
    sidebarDepth: 0,
    locales: {
      "/": {
        selectLanguageName: "English",
        sidebar: [
          {
            text: "Blogs",
            link: "/blogs/",
            children: glob
              .sync("docs/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/customer_announcements/",
            children: glob
              .sync("docs/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/recaps/",
            children: glob
              .sync("docs/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/bg/": {
        selectLanguageName: "Bulgarian",
        sidebar: [
          {
            text: "Blogs",
            link: "/bg/blogs/",
            children: glob
              .sync("docs/bg/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/bg/customer_announcements/",
            children: glob
              .sync("docs/bg/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "bg/recaps/",
            children: glob
              .sync("docs/bg/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/de/": {
        selectLanguageName: "German",
        sidebar: [
          {
            text: "Blogs",
            link: "/de/blogs/",
            children: glob
              .sync("docs/de/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/de/customer_announcements/",
            children: glob
              .sync("docs/de/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/de/recaps/",
            children: glob
              .sync("docs/de/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/es/": {
        selectLanguageName: "Spanish",
        sidebar: [
          {
            text: "Blogs",
            link: "/es/blogs/",
            children: glob
              .sync("docs/es/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/es/customer_announcements/",
            children: glob
              .sync("docs/es/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/es/recaps/",
            children: glob
              .sync("docs/es/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/fr/": {
        selectLanguageName: "Indonesian",
        sidebar: [
          {
            text: "Blogs",
            link: "/fr/blogs/",
            children: glob
              .sync("docs/fr/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/fr/customer_announcements/",
            children: glob
              .sync("docs/fr/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/fr/recaps/",
            children: glob
              .sync("docs/fr/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/id/": {
        selectLanguageName: "Indonesian",
        sidebar: [
          {
            text: "Blogs",
            link: "/id/blogs/",
            children: glob
              .sync("docs/id/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/id/customer_announcements/",
            children: glob
              .sync("docs/id/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/id/recaps/",
            children: glob
              .sync("docs/id/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/it/": {
        selectLanguageName: "Italian",
        sidebar: [
          {
            text: "Blogs",
            link: "/it/blogs/",
            children: glob
              .sync("docs/it/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/it/customer_announcements/",
            children: glob
              .sync("docs/it/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/it/recaps/",
            children: glob
              .sync("docs/it/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/ja/": {
        selectLanguageName: "Japanese",
        sidebar: [
          {
            text: "Blogs",
            link: "/ja/blogs/",
            children: glob
              .sync("docs/ja/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/ja/customer_announcements/",
            children: glob
              .sync("docs/ja/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/ja/recaps/",
            children: glob
              .sync("docs/ja/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/ko/": {
        selectLanguageName: "Korean",
        sidebar: [
          {
            text: "Blogs",
            link: "/ko/blogs/",
            children: glob
              .sync("docs/ko/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/ko/customer_announcements/",
            children: glob
              .sync("docs/ko/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/ko/recaps/",
            children: glob
              .sync("docs/ko/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/ru/": {
        selectLanguageName: "Russian",
        sidebar: [
          {
            text: "Blogs",
            link: "/ru/blogs/",
            children: glob
              .sync("docs/ru/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/ru/customer_announcements/",
            children: glob
              .sync("docs/ru/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/ru/recaps/",
            children: glob
              .sync("docs/ru/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/th/": {
        selectLanguageName: "Thai",
        sidebar: [
          {
            text: "Blogs",
            link: "/th/blogs/",
            children: glob
              .sync("docs/th/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/th/customer_announcements/",
            children: glob
              .sync("docs/th/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/th/recaps/",
            children: glob
              .sync("docs/th/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/tr/": {
        selectLanguageName: "Turkish",
        sidebar: [
          {
            text: "Blogs",
            link: "/tr/blogs/",
            children: glob
              .sync("docs/tr/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/tr/customer_announcements/",
            children: glob
              .sync("docs/tr/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/tr/recaps/",
            children: glob
              .sync("docs/tr/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/uk/": {
        selectLanguageName: "Ukranian",
        sidebar: [
          {
            text: "Blogs",
            link: "/uk/blogs/",
            children: glob
              .sync("docs/uk/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/uk/customer_announcements/",
            children: glob
              .sync("docs/uk/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/uk/recaps/",
            children: glob
              .sync("docs/uk/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/vi/": {
        selectLanguageName: "Vietnamese",
        sidebar: [
          {
            text: "Blogs",
            link: "/vi/blogs/",
            children: glob
              .sync("docs/vi/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/vi/customer_announcements/",
            children: glob
              .sync("docs/vi/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/vi/recaps/",
            children: glob
              .sync("docs/vi/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
      "/zh/": {
        selectLanguageName: "Chinese",
        sidebar: [
          {
            text: "Blogs",
            link: "/zh/blogs/",
            children: glob
              .sync("docs/zh/blogs/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Customer Announcements",
            link: "/zh/customer_announcements/",
            children: glob
              .sync("docs/zh/customer_announcements/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
          {
            text: "Recaps",
            link: "/zh/recaps/",
            children: glob
              .sync("docs/zh/recaps/*.md")
              .map((f: string) => f.substr(f.indexOf("/")))
              .sort((a, b) => (a > b ? -1 : 1)),
          },
        ],
      },
    },
    nav: [
      {
        text: "Explorer",
        link: "https://explorer.subquery.network/",
        target: "_blank",
        rel: "",
      },
      {
        text: "Projects",
        link: "https://project.subquery.network/",
        target: "_blank",
        rel: "",
      },
      { text: "Documentation", link: "/" },
      {
        text: "GitHub",
        link: "https://github.com/subquery/subql",
        target: "_blank",
        rel: "",
      },
    ],
  },
});
