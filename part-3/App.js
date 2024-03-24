const App = () => {
return(
    <div>
<Person name="Eddie" age={55} hobbies={["piano','guitar"]} />


    </div>
  );
};



ReactDOM.render(<App />, document.getElementById("root"));