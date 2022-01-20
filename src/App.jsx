import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  

  return (
    <div className="container mx-auto mt-3 p-8">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
        />
      </div>
    </div>
  );
}

export default App;
