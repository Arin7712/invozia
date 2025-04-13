import { BadgeCheck, Code, Download, Lock, Settings, Shield, Zap } from "lucide-react"

export const navItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Pricing',
        href: '/pricing'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Cart',
        href: '/cart'
    }
]

export const featureItems = [
    {
        title: 'Fast and efficient',
        description: 'Risus proin et mauris utore sed lectus dictum cursusi nec lorem lacinia.',
        icon: <Zap/>
    },
    {
        title: 'Open source',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        icon:<Lock/>
    },
    {
        title: 'Reliable and Secure',
        description: 'Ut enim ad minim veniamol, quis nostrud exercitation eli ullamco laboris nisi.',
        icon: <Shield/>
    },
    {
        title: 'Always-up-to-date',
        description: 'Excepteur sint occaecat ol cupidatat non proidentertol sunt in culpa dolor si.',
        icon: <BadgeCheck/>
    }
]

export const stepItems = [
    {
        title: 'Download app',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paproident.',
        img: '/a1.png',
        icon: <Download/>
    },
    {
        title: 'Configure',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paproident.',
        img: '/a2.png',
        icon: <Settings/>
    },
    {
        title: 'Enjoy',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paproident.',
        img: '/a3.png',
        icon: <Code/>
    }
]

export  const aboutImages = [
    {
        img: '/tc1.png'
    },
    {
        img: '/tc4.png'
    },
    {
        img: '/ct3.png'
    },
    {
        img: '/ct2.png'
    },
]

export const testimonialItems = [
    {
        name: 'John Carter',
        date: 'Jan 10, 2025',
        title: 'How to use the basic commands on mac.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscin',
        img: '/pf1.png',
        tag: 'News'
    },
    {
        name: 'John Carter',
        date: 'Jan 10, 2025',
        title: 'How to use the basic commands on mac.',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: '/pf1.png',
        tag: 'News'
    },
    {
        name: 'John Carter',
        date: 'Jan 10, 2025',
        title: 'How to use the basic commands on mac.',
        description: 'Lorem ipsum  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: '/pf1.png',
        tag: 'News'
    }
]