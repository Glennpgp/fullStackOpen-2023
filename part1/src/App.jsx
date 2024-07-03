const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hi there, {props.welcome}</p>
    </div>
  );
};

const Description = (props) => {
  return (
    <div>
      <p>This is {props.des}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 19;
  const welcome = "Welcome";
  const des =
    "The passage you've provided appears to be a discussion of the biblical account of Job and how it relates to the role of understanding elders or individuals in the congregation in providing comfort and support to those who are going through difficult times, dealing with disquieting thoughts, or experiencing emotional turmoil.";

  const a = 20;
  const b = 40;
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Glenn" age={20 + 3} />
      <Hello name={name} age={age} />
      <Welcome welcome={welcome}></Welcome>
      <p>
        {a} + {b} is {a + b}
      </p>

      <Description des={des}></Description>

      <div>

        <p>
          {friends[0].name} {friends[0].age}
        </p>
        <p>
          {friends[1].name} {friends[1].age}
        </p>
      </div>
    </div>
  );
};
export default App;
