export type TPost = {
    userID: string,
    id: number,
    title: string,
    body: string,
    tags: string,
    reactions: {likes: number},
    views: number
}