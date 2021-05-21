export interface IGoogleResponse {
    queries: IQueries,
    searchInformation: ISearchInformation,
    items: IItem[]
}

export interface IQueries {
    request: IRequest[],
    nextPage: IRequest[]
}

export interface ISearchInformation {
    searchTime: number,
    formattedSearchTime: string,
    totalResults: string,
    formattedTotalResults: string
}

export interface IItem {
    title: string,
    htmlTitle: string,
    link: string,
    displayLink: string,
    snippet: string,
    htmlSnippet: string,
    htmlFormattedUrl: string,
    pagemap: IPagemap
}

export interface IPagemap {
    cse_thumbnail: { src: string }[],
    cse_image: { src: string }[],
    metatags: Record<string,unknown>[]
}
