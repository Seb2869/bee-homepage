import { MenuItem } from '../models/menu-item';

export const Pages = {
    ROOT: '/',
    HOME: '/',
    ABOUT_US: '/about-us',
    BUILD: '/build',
};

// TODO: Vaibhav Maheshwari please update this URL
export const LAUNCH_APP_URL = '/';

// TODO: Vaibhav Maheshwari please update these URLs
export const SocialHandleLinks = {
    LINKEDIN: '/',
    INSTAGRAM: '/',
    FACEBOOK: '/',
};

export const BEE_AGENT_PIP_PACKAGE_URL = 'https://pypi.org/project/bee-agent/';
export const COMMAND_HIVE_VIDEO_URL = 'https://www.youtube.com/watch?v=2Ne0waOZFmc';
export const COMMAND_HIVE_X_URL = 'https://x.com/commandhive';
export const COMMAND_HIVE_WEBSITE_URL = 'https://commandhive.xyz';
export const COMMAND_HIVE_GITHUB_URL = 'https://github.com/CommandHive';

export const menuItems: MenuItem[] = [
    {
        link: Pages.HOME,
        title: 'Home',
    },
    {
        link: Pages.ABOUT_US,
        title: 'About Us',
    },
    {
        link: Pages.BUILD,
        title: 'Build',
    },
    {
        link: COMMAND_HIVE_X_URL,
        title: 'Twitter',
        isOutsideLink: true,
        hideInFooter: true,
    },
    {
        link: COMMAND_HIVE_GITHUB_URL,
        title: 'GitHub',
        isOutsideLink: true,
        hideInFooter: true,
    },
    {
        link: LAUNCH_APP_URL,
        title: 'Launch App',
        isOutsideLink: true,
    },
];

// TODO: Vaibhav Maheshwari please update this
export const ZAPPER_ID = '0x86b06319b906e61631f7edbe5a3fe2edb95a3fae';
export const ZAPPER_URL = '';

// TODO: Vaibhav Maheshwari please update the video id here once we've demo video ready
export const APP_DEMO_YT_VIDEO = 'kFoXEwyOlbE';

// TODO: Vaibhav Maheshwari please update this URL
export const DISCORD_URL = '';
