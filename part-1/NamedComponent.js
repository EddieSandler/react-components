const NamedComponent = (props) => {
  let name = props.name;
  return <p> My Name is {name}</p>;

};


ReactDOM.render(<NamedComponent name="eddie" />, document.getElementById("root"));