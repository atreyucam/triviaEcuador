import { useState } from 'react';

// Componente de ventana modal para las categorías
function CategoryModal({ isOpen, onClose, title, description, imageUrl }) {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded border-2 border-green-500 max-w-3xl w-full'>
            <h2 className='text-2xl mb-4 font-bold'>{title}</h2>
            <p className='mb-4'>{description}</p>
            <div className='mb-4'>
              <img src={imageUrl} alt={title} className='max-w-full h-auto rounded-lg' />
            </div>
            <button
              onClick={onClose}
              className='mt-4 btn-secondary font-bold border border-green-500 text-lg px-6 py-2 rounded'
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const openModal = (category) => {
    setModalContent({
      title: category.name,
      description: category.description,
      imageUrl: category.imageUrl,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const categories = [
    {
      id: 1,
      name: 'Costa',
      color: '#4A90E2',
      icon: '🏖️',
      description: 'La región Costa de Ecuador se caracteriza por sus playas hermosas y su clima tropical. Es conocida por su biodiversidad marina y sus sitios turísticos populares.',
      imageUrl: 'https://ecuadors.live/wp-content/uploads/2023/05/mapa-costa-ecuador.png',
    },
    {
      id: 2,
      name: 'Sierra',
      color: '#50E3C2',
      icon: '⛰️',
      description: 'La región Sierra de Ecuador se encuentra en la cordillera de los Andes. Es conocida por su clima fresco, paisajes montañosos y cultura indígena rica y diversa.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSXQKkcHQ3dWMVRpJLg8kLhqwG5NPAqI8PA&s', // Reemplaza con la URL real de la imagen de la Sierra
    },
    {
      id: 3,
      name: 'Oriente',
      color: '#B8E986',
      icon: '🌳',
      description: 'La región del Oriente de Ecuador es conocida por su selva amazónica exuberante y diversidad biológica única. Es hogar de muchas comunidades indígenas y reservas naturales.',
      imageUrl: 'https://ecuadors.live/wp-content/uploads/2023/05/Mapa-amazonia-ecuador.png', // Reemplaza con la URL real de la imagen del Oriente
    },
    {
      id: 4,
      name: 'Galapagos',
      color: '#F8E71C',
      icon: '🐢',
      description: 'Las Islas Galápagos son un archipiélago único en el Pacífico, famoso por su biodiversidad única y sus contribuciones a la teoría de la evolución de Charles Darwin.',
      imageUrl: 'https://ec.viajandox.com/uploads/Mapa%20de%20Gal%C3%A1pagos_1.jpg', // Reemplaza con la URL real de la imagen de Galápagos
    },
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
            className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 outline-[${category.color}] hover:scale-[1.03] transition-transform max-w-xs p-5 flex flex-col gap-1 items-center justify-center shadow-sm`} 
            style={{ backgroundColor: category.color, outlineColor: category.color }}
            onClick={() => openModal(category)}
          >
            <div className='text-3xl'>{category.icon}</div>
            <h3 className='text-base mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
          </li>
        ))}
        <li className='col-span-2 sm:col-span-3 md:col-span-4 flex justify-center'>
          <img src="/espoch.png" alt="Espoch Logo" width={300} height={300} />
        </li>
      </ul>

      {/* Modal dinámico para todas las categorías */}
      <CategoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
        imageUrl={modalContent.imageUrl}
      />

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
