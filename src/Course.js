const Header = (props) => (
  <h1>{props.title}</h1>
);

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = (props) => {
  const exercisesArray = props.parts.map((part) => part.exercises);
  const total = exercisesArray.reduce((previousValue, currentValue) => previousValue + currentValue);

  return <p>Number of exercises {total}</p>
};

const Course = (props) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {props.courses.map((course) => {
        return (
          <div key={course.id}>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      })}
    </div>
  )
};

export default Course