import React from 'react';

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors}) => {
    if(graphQLErrors) {
        graphQLErrors.map(({message,locations,path})=>{
            console.log(message, locations, path); 
        })
    }
})
const link = from([errorLink, new HttpLink({
    uri: 'https://api.blocktap.io/graphql'
})])
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})


interface AppProps {
    children: any
}
const  App = (props: AppProps)=>{
    return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default App; 