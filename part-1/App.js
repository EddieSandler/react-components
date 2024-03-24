const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name='Eddie' />
    </div>

  );
};


ReactDOM.render(<App />, document.getElementById("root"));