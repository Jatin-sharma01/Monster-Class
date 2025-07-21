import useFetch from './useFetch';

const BlogPosts = () => {
  const { data: blogs, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      {isLoading && <div>Loading blog posts...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
