export interface AddBlogPost{
    title: string,
    shortDescription: string,
    urlHandle: string,
    content: string,
    featuredImageUrl: string,
    publishedDate: Date,
    author: string,
    isVisible: boolean
}