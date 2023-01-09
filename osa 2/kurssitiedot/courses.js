const Course = (props) => {

    const Total = (props) => {
      const TotalExercises = props.total.reduce((acc, item) => acc + item.exercises, 0);
      return (
         <h4>total of {TotalExercises} exercises</h4>
        
      )
    }

    const Content = (props) => {
      return (
         props.content.map(note => <p key={note.id}>{note.name} {note.exercises}</p>)
         
      )

      }
    
    
    const Header = (props) => {
      return (
      <h1>{props.name}</h1>
      )
      

    }
    
  return ( 
    <div>
     <Header name={props.course.name} />
     <Content content={props.course.parts} />
     <Total total={props.course.parts}/>
     </div> 
  )

  }

  export default Course
