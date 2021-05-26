// Note: Some fields have been left out e.g. bing specific links 
export interface IBingResponse {
    _type: string,
    queryContext: IQueryContext,
    webPages: IWebPages,
    images: IImages,
    relatedSearches: IRelatedSearches,
    videos: IVideos,
    news: INews,
    computation: IComputation,
    timeZone: ITimeZone,
    rankingResponse: IRankingResponse,
    entities: IEntities,
    places: IPlaces,
    translations: ITranslations,
}

// QueryContext
export interface IQueryContext {
    originalQuery: string,
    alteredQuery: string
}

// WebPages
export interface IWebPages {
    totalEstimatedMatches: number,
    value: IWebPageValue[]
}

export interface IWebPageValue {
    name: string,
    url: string,
    snippet: string,
    deepLinks: IWebPageValue[]
}

// Images
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

// RelatedSearches
export interface IRelatedSearches {
    value: { text: string }[]
}

// Videos
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

// News
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

// Computation
export interface IComputation {
    expression: string,
    value: string
}

// TimeZone
export interface ITimeZone {
    primaryCityTime: ICityTime,
    otherCityTimes: ICityTime[]
}

export interface ICityTime {
    location: string,
    time: Date,
    utcOffset: string
}

// Entities
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

// Places
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

// Translations
export interface ITranslations {
    originalText: string,
    translatedText: string,
    translatedLanguageName: string,
    inLanguage: string
}
