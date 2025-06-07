import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';

type PageSEO = {
    title: string;
    description: string;
    url: string;
};

export const usePageSEO = (pageSEO: PageSEO) => {
    useEffect(() => {
        const { title, description, url } = pageSEO;
        updatePageSEO(title, description, url);
    }, []);
};
