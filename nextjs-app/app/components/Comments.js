export default async function Comments({ promise }) {
  const comments = await promise;
  //   console.log(comments);
  return (
    <div className="mt-10">
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li className="md-2" key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
