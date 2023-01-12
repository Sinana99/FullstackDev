import { useState } from 'react'

const SearchFilter = () => {
  const [filter, setFilter] = useState("")
  return (
    <form>
      filter shown with <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </form>
  )
}
const AddPersonForm = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const handleInputChange = (event) => {
    setNewName(event.target.value);
  } 
  const handleInputChange2 = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  } 
  const Submit = (event) => {
    event.preventDefault()
  }
  return (
    <form>
      <div>
        <h2>add a new</h2>
        name: <input value={newName} onChange={handleInputChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleInputChange2}/>
      </div>
      <div>
        <button onClick={(event) => Submit(event)} type="submit">add</button>
      </div>
    </form>
  )
}
const PhonebookList = (props) => {
  const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
  return ( 
  <div>
    { filteredPersons.map(person => (
      <div key={person.name}>{person.name} {person.number}</div>
    ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123-12344' }
  ])  
  const [filter, setFilter] = useState("")
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter/>
      <AddPersonForm/>
      <h2>Numbers</h2>
      <PhonebookList persons={persons} filter={filter}/>
    </div>
  )
}

export default App
