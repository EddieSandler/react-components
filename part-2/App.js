const App = () => (
<div>
  <Tweet tweets={["username : esandler","name: Eddie Sandler", "date: March 24,2024", "tweet:Dude this is tweet 1"]} />
  <Tweet tweets={["username : esandler","name: Eddie Sandler", "date: March 24,2024", "tweet:Dude this is tweet 2"]} />
  <Tweet tweets={["username : esandler","name: Eddie Sandler", "date: March 24,2024", "tweet:Dude this is tweet 3"]} />
</div>
  );




ReactDOM.render(<App />, document.getElementById("root"));