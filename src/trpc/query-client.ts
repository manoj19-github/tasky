import {
    defaultShouldDehydrateQuery,
    QueryClient,
} from "@tanstack/react-query";
import superjson from "superjson";
export function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: 60 * 1000
            },
            dehydrate: {
                shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending"
            },
            hydrate: {}
        },
    });
}
