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

  return (
    <section className='max-w-6xl bg-white px-8 pb-6 flex flex-col justify-center text-slate-900'>
      <h2 className='text-2xl mb-4 font-medium mt-4 lg:mt-0'>Categorias</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 md:gap-5'>
        {categories.map(category => (
          <li 
            key={category.id} 
            title={category.name} 
            className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 outline-[${category.color}] hover:scale-[1.03] transition-transform max-w-xs p-5 flex flex-col gap-1 items-center justify-center shadow-sm`} 
            style={{ backgroundColor: category.color, outlineColor: category.color }}
          >
            <div className='text-4xl'>{category.icon}</div>
            <h3 className='text-lg mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

