import { QueryClient } from 'react-query'
import { request, RequestDocument } from 'graphql-request'


type AnyOBJ = { [key: string]: any } 
export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        // 캐시처리
        if (!client) client = new QueryClient({
            defaultOptions: {
                queries: {
                    //나중에 필요한거만 stale, cache 설정해두자.
                    cacheTime: Infinity,
                    staleTime: Infinity,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    refetchOnWindowFocus: false, 
                },   
            },
        });
        return client
    }
})();
const BASE_URL = '/';

export const restFetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body ?: AnyOBJ;
    params ?: AnyOBJ;
}) => {
    try {
        let url = `${BASE_URL}${path}`
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL,
            },
        }
        //파람이 있다면 파람처리
        if (params) {
            const searchParams  = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }
        //바디가 있다면 바디처리!
        if (body) fetchOptions.body = JSON.stringify(body);

        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

// export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
//   request(BASE_URL, query, variables);


export const graphqlFetcher = <T>(query: RequestDocument, variables = {}) =>
  request<T>(BASE_URL, query, variables);

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
  CART: "CART",
};