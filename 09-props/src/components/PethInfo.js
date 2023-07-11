function PethInfo(props) {
  const {animal, age} = props
  return (
    <>
      <h1>My {animal} is 3 years old</h1>
      <h1>The dog is {age} years old</h1>
    </>
  );
}

export default PethInfo;
