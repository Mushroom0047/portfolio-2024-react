const About = () => {
    const data = {
            nombre: 'Héctor Valdés M.',
            email: 'hectorvaldesm47@gmail.com',
            fechaNacimiento: '16 Mayo 1995',
            direccion: 'Valparaíso, Chile',
            nacionalidad: 'Chilena',
        }
  return (
    <div class="h-full flex flex-col">
    <div class="w-full bg-red-300 flex flex-col justify-center p-8 text-center">
        <div class="px-5">
            <h2 class="border-b-4 border-dfac py-4">SOBRE MÍ</h2>
            <p class="border-b-2 py-4">Nombre: {{nombre}}</p>
            <p class="border-b-2 py-4">Email: {{email}}</p>
            <p class="border-b-2 py-4">Fecha nacimiento: {{fechaNacimiento}}</p>
            <p class="border-b-2 py-4">Dirección: {{direccion}}</p>
            <p class="border-b-2 py-4">Nacionalidad: {{nacionalidad}}</p>
        </div>            
    </div>
    <div class="w-full bg-green-300">
        <img src="https://via.placeholder.com/800x600"/>
    </div>
</div>
  )
}

export default About