
import {Post_of_Json_PlaceHolder_interface} from "@/types/Post";
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "@/lib/features/posts/postsApiSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading: is_Post_Loading,
    isError:post_load_Error,
  } = useGetPostsQuery({
    limit: 5,
    offset: 1,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (is_Post_Loading) {
    return <div>Loading...</div>;
  }

  if (post_load_Error) {
    return <div>Error...</div>;
  }


    return (
    <div>
      <button
        onClick={() => {
          const post = {
            title: "My new post",
            userId: 999,
            id: 222,
            body: "sss",


          };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "Creating..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((
            post:Post_of_Json_PlaceHolder_interface,
            index:number) => (

            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
