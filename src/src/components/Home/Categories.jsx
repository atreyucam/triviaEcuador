import Image from 'next/image'

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Costa',
      color: '#4A90E2',
      icon: '🏖️'
    },
    {
      id: 2,
      name: 'Sierra',
      color: '#50E3C2',
      icon: '⛰️'
    },
    {
      id: 3,
      name: 'Oriente',
      color: '#B8E986',
      icon: '🌳'
    },
    {
      id: 4,
      name: 'Galapagos',
      color: '#F8E71C',
      icon: '🐢'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Camacho',
      code: '6767'
    },
    {
      name: 'Luis Insuasti',
      code: '6696'
    },
    {
      name: 'Daniel Tene',
      code: '6842'
    },
    {
      name: 'Justin Constante',
      code: '6682'
    }
  ];

  return (
    <section className='max-w-6xl bg-white px-8 pb-6 flex flex-col justify-center text-slate-900'>
      <h2 className='text-2xl mb-4 font-medium mt-4 lg:mt-0'>Categorias</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 md:gap-5'>
        {categories.map(category => (
          <li 
            key={category.id} 
            title={category.name} 
            className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 hover:scale-[1.03] transition-transform max-w-xs p-3 flex flex-col gap-1 items-center justify-center shadow-sm`} 
            style={{ backgroundColor: category.color, outlineColor: category.color }}
          >
            <div className='text-3xl'>{category.icon}</div>
            <h3 className='text-base mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
          </li>
        ))}
        <li className='col-span-2 sm:col-span-3 md:col-span-4 flex justify-center'>
          <Image src="/espoch.png" alt="Espoch Logo" width={300} height={300} />
        </li>
      </ul>

      <div className='mt-8'>
        <h2 className='text-xl font-medium mb-4'>Datos del Equipo</h2>
        <div className='mt-4 text-center'>
          <p className='text-lg font-medium'>Asignatura: Gamificación</p>
        </div>
        <br />
        <br />
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {teamMembers.map(member => (
            <li key={member.code} className='bg-gray-100 p-4 rounded shadow-sm text-center'>
              <h3 className='text-lg font-bold'>{member.name}</h3>
              <p className='text-sm text-gray-700'>Código: {member.code}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
