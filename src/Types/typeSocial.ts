export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: { likes: number },
    views: number
}