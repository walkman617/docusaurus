const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: '软件工程',
    tagline: '南开大学软件学院《软件工程》课程平台',
    url: 'https://se.nkugame.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'walkman617', // Usually your GitHub org/user name.
    projectName: 'SE2022', // Usually your repo name.
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"]
    },
    themeConfig: {
        navbar: {
            title: '课程首页',
            logo: {
                alt: '南开大学软件学院《软件工程》课程平台',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '课程资源',
                },
                { to: '/blog', label: '作业与要求', position: 'left' },
                {
                    href: 'https://github.com/walkman617/SE2022',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '教学',
                    items: [{
                            label: '课程资源',
                            to: '/docs/intro',
                        },
                        {
                            label: '教材链接',
                            href: 'https://www.mheducation.com/highered/product/software-engineering-practitioner-s-approach-pressman-maxim/M9781259872976.html',
                        },
                        {
                            label: '教材购买',
                            href: 'http://product.dangdang.com/29274797.html',
                        },
                    ],
                },
                {
                    title: '实践',
                    items: [{
                            label: '腾讯TAPD',
                            href: 'https://www.tapd.cn',
                        },
                        {
                            label: '腾讯工蜂',
                            href: 'https://code.tencent.com/',
                        },
                        {
                            label: '腾讯CloudBase',
                            href: 'https://cloudbase.net/',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [{
                            label: '作业与要求',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/walkman617/SE2022',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 南开大学, 软件学院. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/walkman617/docusaurus/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/walkman617/docusaurus/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};