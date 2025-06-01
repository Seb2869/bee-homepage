export const updatePageSEO = (title: string, description: string, url?: string) => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', description);
    }
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
    }
    
    if (url) {
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', url);
        }
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', url);
        }
        
        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', url);
        }
    }
};

export const SEO_DATA = {
    home: {
        title: 'CommandHive - AI-Powered Command Line Automation Platform',
        description: 'CommandHive revolutionizes command line productivity with AI-powered automation, intelligent workflows, and seamless integration. Boost your development efficiency today.',
        url: 'https://commandhive.com/'
    },
    about: {
        title: 'About CommandHive - Meet Our AI Automation Team & Vision',
        description: 'Learn about CommandHive\'s mission to transform developer productivity through AI-powered automation. Meet our team and discover our roadmap for the future.',
        url: 'https://commandhive.com/about'
    }
};