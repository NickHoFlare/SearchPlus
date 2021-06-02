export interface ISearchPlusResponse {
    responses: ISimplifiedResponse[]
}

export interface ISimplifiedResponse{
    searchEngineName: string,
    snippet: string,
    mainUrl: string,
    totalResults: number,
    searchTerms: string,
    searchTime: number,
    entity?: string,
    results?: IResult[],
    related?: IRelated[]
}

export interface IResult {
    title: string,
    link: string,
    snippet: string,
    thumbnail?: string,
    familyFriendly?: boolean,
    language?: string
}

export interface IRelated {
    title: string,
    url?: string
}