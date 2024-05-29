import { createContext } from 'react';
import { TPost } from '../Types/typeSocial';

export interface ISocialContext {
    jsonData: TPost[] | undefined,
    setJsonData: (args: TPost[]) => void
    selectedPost: TPost | undefined,
    setSelectedPost: (args: TPost) => void
}

export const SocialContext = createContext<ISocialContext | null>(null);