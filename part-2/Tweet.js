const Tweet=(props) => {
<h2>Tweets</h2>
  return (

    <div>

      <ul>{props.tweets.map(t => (<li>{t}</li>)
      )}</ul>
    </div>
  );
};