export type UserReview = {
    name: string;
    location: string;
    profilePicture: string;
    review: string;
    date: string;
};

export type Feature = {
    title: string;
    description: string;
    image: string;
};

export type Question = {
    question: string;
    description: string;
};

export type AboutStatsItem = {
    icon: string;
    title: string;
    count: number;
};

export type WorkingProcessStep = {
    icon: string;
    title: string;
    description: string;
};

export type TreasuryStatsItem = {
    icon: string;
    title: string;
    amount: number;
};

export type FundingSource = {
    name: string;
    type: string;
    amount: number;
};

export type Expense = {
    type: string;
    amount: number;
    color: string;
    icon: string;
};

export type FundingData = {
    sources: FundingSource[];
    expenses: Expense[];
};

export enum SocialPlatform {
    LINKEDIN = 'linkedin',
    PORTFOLIO = 'portfolio',
}

export type SocialLink = {
    platform: SocialPlatform;
    url: string;
};

export type TeamMember = {
    name: string;
    position: string;
    image: string;
    description: string;
    socialLinks: SocialLink[];
};

export enum UpdateItemType {
    LIST = 'list',
    CARDS = 'cards',
}

export type ListPoint = {
    id: number;
    text: string;
};

export type CardsItem = {
    icon: string;
    title: string;
    number: number;
    isCurrency?: boolean;
    change: number;
};

export type UpdateItem = {
    type: UpdateItemType;
    title: string;
    icon?: string;
    points?: ListPoint[];
    cards?: CardsItem[];
};

export type Update = {
    date: string;
    items: UpdateItem[];
};

export type RoadMapItem = {
    date: string;
    title: string;
    description: string;
    isCompleted: boolean;
};
