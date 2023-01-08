const Header = (props) => {
  return (
    <div>
     <h1>{props.course}</h1>
    </div>
  );
};

const Parts = (props) => {
  return (
    <div>
      {props.part.map(value => (
        <p>{value.name}: {value.exercises}</p>
      ))}
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Parts part={props.part}/>   
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises }</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts}/>
      <Total part={course.parts}/>
    </div>
   )
  }
  export default App
