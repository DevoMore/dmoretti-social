import { createContext } from 'react';
import { TPost } from '../Types/typeSocial';

export interface ISocialContext {
    jsonData: TPost[] | undefined,
    setJsonData: (args: TPost[]) => void
    selectedNote: TPost | undefined,
    setSelectedNote: (args: TPost) => void
}

export const SocialContext = createContext<ISocialContext | null>(null);