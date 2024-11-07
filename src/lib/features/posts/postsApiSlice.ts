import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Post_of_Json_PlaceHolder_interface} from "@/types/Post";


export const postsApiSlice = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => {
        return {
            getPosts: builder.query<Post_of_Json_PlaceHolder_interface[],
                { limit: number; offset: number }>(
                {
                    query: ({limit, offset}) =>
                        `/posts?_limit=${limit}&_offset=${offset}`,
                }
            ),
            createPost: builder.mutation<Post_of_Json_PlaceHolder_interface,
                Omit<Post_of_Json_PlaceHolder_interface, "id">>(
                {
                    query: (post) => (
                        {
                            url: "/posts",
                            method: "POST",
                            body: post,
                        }
                    ),
                }
            ),
        };
    },
});

export const {useGetPostsQuery, useCreatePostMutation} = postsApiSlice;
