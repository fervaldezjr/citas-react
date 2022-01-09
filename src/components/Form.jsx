import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            console.log('Hay al menos un campo vacio')

            setError(true)
            return;
        } 

        setError(false)

        // Objeto de Pacientes
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        // console.log(objetoPaciente)
        setPacientes([...pacientes, objetoPaciente]);

        // Restart form
        setNombre('')
        setPropietario('')
        setFecha('')
        setSintomas('')
        setEmail('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">

           <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

           <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
           </p>

           <form className="bg-white shadow-md rounded-lg py-10 px-5 mx-5" onSubmit={handleSubmit}>
               { error && < Error mensaje = "Todos los campos son obligatorios"/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre mascota
                    </label>

                    <input
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre propietario
                    </label>

                    <input
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email" 
                        placeholder="Email contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>

                    <input
                        id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>

                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                     type="submit"
                     className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transtion-colors mb-10"
                     value={"Agregar paciente"}
                />
           </form>
        </div>
    )
}

export default Form
