//create Person component
const MAX_NAME_LENGTH_TO_SHOW = 6;
function  Person ({name, age, hobbies})  {
  const ageCheck = age >= 18 ? "Please Go Vote" : "you must be 18";

  const personHobbies=hobbies.map(hobby =>
    <li>{hobby}</li>);


  return(

    <div>
      <p>Learn some information about this person.</p>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
      <ul>
        Hobbies:
        {personHobbies}
      </ul>
    </ul>

<h3>{ageCheck}</h3>

    </div>
  );
};
