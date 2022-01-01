import Header from './components/Header';
import Form from './components/Form';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  return (
    <div className="container mx-auto mt-3 p-8">
      <Header />
      <div className='mt-12 md:flex'>
        <Form />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
