import React from 'react';
import { ListPoint } from '../../../../../models/common';

type ListProps = {
    icon: string;
    listItems: ListPoint[];
};

export const List: React.FC<ListProps> = ({ icon, listItems }) => {
    const renderTextWithLinks = (text: string, links?: Array<{ text: string; url: string }>) => {
        if (!links || links.length === 0) {
            return <span>{text}</span>;
        }

        let result = text;
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;

        links.forEach((link, index) => {
            const linkIndex = result.indexOf(link.text, lastIndex);
            if (linkIndex !== -1) {
                // Add text before the link
                if (linkIndex > lastIndex) {
                    parts.push(result.substring(lastIndex, linkIndex));
                }
                // Add the link
                parts.push(
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-medium underline"
                    >
                        {link.text}
                    </a>
                );
                lastIndex = linkIndex + link.text.length;
            }
        });

        // Add remaining text after the last link
        if (lastIndex < result.length) {
            parts.push(result.substring(lastIndex));
        }

        return <span>{parts}</span>;
    };

    return (
        <ul className="flex flex-col divide-y divide-[#000000] divide-opacity-10">
            {listItems.map((item, index) => (
                <li
                    key={index}
                    className={`flex items-start gap-x-3 xl:gap-x-5 ${index === listItems.length - 1 ? 'pt-2 lg:pt-3' : 'py-2 lg:py-3'}`}
                >
                    <img
                        src={icon}
                        alt="point"
                        className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 mt-1 flex-shrink-0"
                    />
                    <p className="section-body leading-relaxed">
                        {renderTextWithLinks(item.text, item.links)}
                    </p>
                </li>
            ))}
        </ul>
    );
};
