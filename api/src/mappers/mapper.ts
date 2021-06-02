import { AxiosResponse } from 'axios';
import { IBingResponse, IGoogleResponse, IDuckDuckGoResponse, ISearchPlusResponse } from '../types';
import { IWebPageValue } from '../types/bing';
import { IItem } from '../types/google';
import { IRelated, IResult, ISimplifiedResponse } from '../types/searchPlus';

export const mapResponses = 
    (responses: [AxiosResponse<IBingResponse>, AxiosResponse<IGoogleResponse>, AxiosResponse<IDuckDuckGoResponse>], durations: number[])
        : ISearchPlusResponse => {
    return {
        responses: [
            mapBing(responses[0], durations[0]),
            mapGoogle(responses[1], durations[1]), 
            //mapDuckDuckGo(responses[2], durations[2])
        ]
    };
}

const mapBing = (response: AxiosResponse<IBingResponse>, duration: number): ISimplifiedResponse => {
    const data = response.data;

    const bingResponse: ISimplifiedResponse = {
        searchEngineName: 'Bing',
        snippet: data.webPages?.value[0].snippet,
        mainUrl: data.webPages?.value[0].url,
        totalResults: data.webPages?.totalEstimatedMatches,
        searchTerms: data.queryContext?.alteredQuery
            ? data.queryContext?.alteredQuery
            : data.queryContext?.originalQuery,
        searchTime: duration,
        entity: data.entities?.value[0].name,
        results: mapBingResults(data.webPages?.value),
        related: data.relatedSearches?.value.map(related => {
            const searchPlusRelated: IRelated = {
                title: related.text
            }
            return searchPlusRelated;
        })
    }
    return bingResponse;
}

// TODO: Image and Video results
const mapBingResults = (webPages: IWebPageValue[]) => {
    const searchPlusResults: IResult[] = webPages.map(bingPage => {
        const searchPlusResult: IResult = {
            title: bingPage.name,
            link: bingPage.url,
            snippet: bingPage.snippet,
        }
        return searchPlusResult;
    });
    return searchPlusResults;
}

const mapGoogle = (response: AxiosResponse<IGoogleResponse>, duration: number): ISimplifiedResponse => {
    const data = response.data;

    const googleResponse: ISimplifiedResponse = {
        searchEngineName: 'Google',
        snippet: data.items[0]?.snippet,
        mainUrl: data.items[0]?.link,
        totalResults: parseInt(data.searchInformation?.totalResults),
        searchTerms: data.queries?.request[0]?.searchTerms,
        searchTime: duration,
        results: mapGoogleResults(data.items)
    }

    return googleResponse;
}

const mapGoogleResults = (items: IItem[]): IResult[] => {
    const searchPlusResults: IResult[] = items.map(item => {
        const searchPlusResult: IResult = {
            title: item.title,
            link: item.link,
            snippet: item.snippet,
            thumbnail: item.pagemap?.cse_thumbnail?.[0].src
        }

        return searchPlusResult;
    })
    return searchPlusResults;
}

// const mapDuckDuckGo = (response: AxiosResponse<IDuckDuckGoResponse>): ISimplifiedResponse => {
    
// }