export interface IDuckDuckGoResponse {
    Abstract: string,
    AbstractSource: string,
    AbstractUrl: string,
    Entity: string,
    Image: string,
    Infobox: IInfobox,
    RelatedTopics: ICategorisedRelatedTopic[]
}

export interface IInfobox {
    content: IContent[]
}

export interface IContent {
    data_type: string,
    label: string,
    value: string | Record<string,unknown>
}

export interface IRelatedTopic {
    FirstURL: string,
    Result: string,
    Text: string
}

export interface ICategorisedRelatedTopic extends IRelatedTopic {
    Name: string,
    Topics: IRelatedTopic[]
}