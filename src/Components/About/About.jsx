const About = () => {
    const {nombre, email, fechaNacimiento, direccion, nacionalidad} = {
            nombre: 'Héctor Valdés M.',
            email: 'hectorvaldesm47@gmail.com',
            fechaNacimiento: '16 Mayo 1995',
            direccion: 'Valparaíso, Chile',
            nacionalidad: 'Chilena',
        }
  return (
    <div className="h-full flex flex-col">
        <div className="w-full flex flex-col justify-center p-8">            
            <div className="px-5">
                <h2 className="oswald text-5xl font-bold w-1/2 border-b-4 border-solid border-b-border-dfac py-4 mb-12 mx-auto text-center">SOBRE MÍ</h2>
                <table className="w-full">
                    <tr className="border-b-2 py-1">
                        <td>Nombre:</td>
                        <td>{nombre}</td>
                    </tr>
                    <tr className="border-b-2 py-1">
                        <td>Nombre:</td>
                        <td>{nombre}</td>
                    </tr>
                </table>
                {/* <p className="border-b-2 py-4 border">Nombre: {nombre}</p>
                <p className="border-b-2 py-4">Email: {email}</p>
                <p className="border-b-2 py-4">Fecha nacimiento: {fechaNacimiento}</p>
                <p className="border-b-2 py-4">Dirección: {direccion}</p>
                <p className="border-b-2 py-4">Nacionalidad: {nacionalidad}</p> */}
            </div>            
        </div>
        <div className="w-full bg-green-300">
            <img src="https://via.placeholder.com/800x600"/>
        </div>
    </div>
  )
}

export default About