function PethInfo(props) {
  const { animal, age, hasPeth } = props;

  return hasPeth ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h1>I don't have an animal</h1>
  );
}
h1  


export default PethInfo;