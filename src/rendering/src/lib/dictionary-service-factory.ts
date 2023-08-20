import {
  DictionaryService,
  RestDictionaryService,
  GraphQLDictionaryService,
  constants,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

/**
 * Factory responsible for creating a DictionaryService instance
 */
export class DictionaryServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {DictionaryService} service instance
   */
  create(siteName: string): DictionaryService {
    return process.env.FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLDictionaryService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
          rootItemId: "{47783B3B-F04F-5186-8175-A473B23BFE37}"
          /*
            The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current app. 
            When not provided, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
            For SXA site(s) and multisite setup there's no need to specify it - it will be autoresolved.
            Otherwise, if your Sitecore instance only has 1 JSS App (i.e. in a Sitecore XP setup), you can specify the root item ID here.
            rootItemId: '{GUID}'
          */
        })
      : new RestDictionaryService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName,
        });
  }
}

/** DictionaryServiceFactory singleton */
export const dictionaryServiceFactory = new DictionaryServiceFactory();
