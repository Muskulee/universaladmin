const userDetails = ({ params }: { params: { userId: string } }) => {
  return <h1>User details goes in here. {params.userId}</h1>;
};

export default userDetails;
