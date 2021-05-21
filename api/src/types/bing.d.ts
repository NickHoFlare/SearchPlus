// Note: Some fields have been left out e.g. bing specific links 
export interface IBingResponse {
    _type: string,
    queryContext: QueryContext,
    webPages: WebPages,
    images: Images,
    relatedSearches: RelatedSearches,
    videos: Videos,
    news: News,
    computation: Computation,
    timeZone: TimeZone,
    rankingResponse: RankingResponse,
    entities: Entities,
    places: Places,
    translations: Translations,
}

export interface IQueryContext {
    originalQuery: string,
    alteredQuery: string
}

export interface IWebPages {
    totalEstimatedMatches: number,
    value: WebPageValue[]
}

export interface IWebPageValue {
    name: string,
    url: string,
    snippet: string,
    deepLinks: WebPageValue[]
}

export interface IImages {
    isFamilyFriendly: boolean,
    value: IImagesValue[]
}

export interface IImagesValue {
    name: string,
    thumbnailUrl: string,
    datePublished: Date,
    contentUrl: string,
    encodingFormat: string,
    hostPageDisplayUrl: string
}

export interface IRelatedSearches {
    value: { text: string }[]
}

export interface IVideos {
    isFamilyFriendly: boolean,
    value: IImagesValue[]
} 

export interface IVideosValue {
    name: string,
    description: string,
    thumbnailUrl: string,
    datePublished: Date,
    publisher: { name: string }[],
    contentUrl: string,
    encodingFormat: string,
    hostPageDisplayUrl: string,
    viewCount: number
}

export interface INews {
    readLink: string,

}

export interface INewsValue {
    name: string,
    url: string,
    image: { contentUrl: string, thumbNail: { contentUrl: string } },
    description: string,
    provider: INewsProvider,
    datePublished: Date,
    category: string
}

export interface INewsProvider {
    _type: string,
    name: string
}

export interface IComputation {
    expression: string,
    value: string
}

export interface ITimeZone {
    primaryCityTime: ICityTime,
    otherCityTimes: ICityTime[]
}

export interface ICityTime {
    location: string,
    time: Date,
    utcOffset: string
}

export interface IEntities {
    value: IEntityValue[]
}

export interface IEntityValue {
    name: string,
    entityPresentationInfo: IEntityPresentationInfo
}

export interface IEntityPresentationInfo {
    entityScenario: string,
    entityTypeHints: string[]
}

export interface IPlaces {
    _type: string,
    name: string,
    url: string,
    entityPresentationInfo: { entityTypeHints: string[] },
    address: IAddress
}

export interface IAddress {
    addressLocality: string,
    addressRegion: string,
    postalCode: string,
    addressCountry: string,
    neighborhood: string
}

export interface ITranslations {
    originalText: string,
    translatedText: string,
    translatedLanguageName: string,
    inLanguage: string
}
