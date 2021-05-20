export interface BingResponse {
    _type: string,
    queryContext: QueryContext,
    webPages: WebPages,
    images: Images,
    relatedSearches: RelatedSearches,
    videos: Videos,
    news: News,
    spellSuggestion: SpellSuggestion,
    computation: Computation,
    timeZone: TimeZone,
    rankingResponse: RankingResponse,
    entities: Entities,
    places: Places,
    translations: Translations,
}

export interface QueryContext {
    originalQuery: string,
    alteredQuery: string
}

export interface WebPages {
    totalEstimatedMatches: number,
    value: WebPageValue[]
}

export interface WebPageValue {
    name: string,
    url: string,
    snippet: string,
    deepLinks: WebPageValue[]
}

export interface Images {
    
}

export interface RelatedSearches {
    
}

export interface Videos {
    
}

export interface News {
    
}

export interface SpellSuggestion {
    
}

export interface Computation {
    
}

export interface TimeZone {
    
}

export interface RankingResponse {
    
}

export interface Entities {
    
}

export interface Places {
    
}

export interface Translations {
    
}
