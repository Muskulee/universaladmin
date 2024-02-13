const blogs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Blog details for catch {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  }
  if (params.slug?.length === 1) {
    return <h1>Viewing Blog details for catch {params.slug[0]}</h1>;
  } else {
    return <h1>Viewing Blog details </h1>;
  }
};

export default blogs;
