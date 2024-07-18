import { useState } from 'react';
import { TbBook } from 'react-icons/tb';
import { ImInfinite } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';
import { FaTrophy } from 'react-icons/fa';

// Componente de ventana modal para instrucciones, recompensas y ranking
function GameModal({ isOpen, onClose, title, content }) {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded border-2 border-green-500 max-w-3xl w-full'>
            <h2 className='text-2xl mb-4 font-bold'>{title}</h2>
            <div className='mb-4'>{content}</div>
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

const gameModes = [
  {
    icon: <TbBook className='text-3xl' />,
    buttonText: 'Instrucciones',
    description: 'Haga clic para ver las instrucciones del juego',
    modalTitle: 'Instrucciones del Juego',
    modalContent: (
      <>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Objetivo del Juego:</h3>
            <p>
              El objetivo del juego es resolver una serie de acertijos relacionados con Ecuador.
              Cada acertijo correcto te acercará a la victoria y te ayudará a conocer más sobre la
              cultura, geografía, historia y biodiversidad del país.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Preparación del Juego:</h3>
            <ul className='list-disc pl-4'>
              <li>Número de Jugadores: Pueden jugar una sola persona.</li>
              <li>Materiales Necesarios:</li>
              <li>Un reloj o temporizador.</li>
            </ul>
          </div>
          <div className='md:col-span-2'>
            <h3 className='text-lg font-semibold mb-2'>Cómo Jugar:</h3>
            <p>El sistema mostrará una descripción o frase célebre relacionada con una ciudad o provincia de Ecuador.</p>
            
            <div className='flex justify-center mt-4'>
              
            </div>
          </div>
		</div>
      </>
    ),
  },
  {
    icon: <BiTimeFive className='text-3xl' />,
    buttonText: 'Recompensas',
    description: '¡Completa tareas para ganar recompensas! Puedes usar comodines.',
    modalTitle: 'Recompensas del Juego',
    modalContent: (
      <>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg'>
              1
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-1'>Dios Ecuatoriano:</h3>
              <p>Condición: Completar todos los acertijos sin utilizar pistas en menos de 1 hora.</p>
              <p>Recompensa: Medalla de Oro, 5000 monedas de juego.</p>
            </div>
            <div className='w-12 h-4 bg-green-500 rounded-full'>
              {/* Barra de primer lugar */}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg'>
              2
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-1'>Sabelotodo:</h3>
              <p>Condición: Completar al menos 50 acertijos con una tasa de aciertos del 90% o más.</p>
              <p>Recompensa: Medalla de Plata, 3000 monedas de juego.</p>
            </div>
            <div className='w-9 h-4 bg-yellow-500 rounded-full'>
              {/* Barra de segundo lugar */}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg'>
              3
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-1'>Principiante:</h3>
              <p>Condición: Completar los primeros 10 acertijos con una tasa de aciertos del 70% o más.</p>
              <p>Recompensa: Medalla de Bronce, 1000 monedas de juego.</p>
            </div>
            <div className='w-6 h-4 bg-orange-500 rounded-full'>
              {/* Barra de tercer lugar */}
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: <FaTrophy className='text-3xl' />,
    buttonText: 'Ranking',
    description: '¡Revisa tu ranking y compite con otros!',
    modalTitle: 'Ranking del Juego',
    modalContent: (
      <>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg'>
              <FaTrophy className='text-2xl' />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-9'>Ranking del Juego</h3>
              <table className='table-auto border-collapse border border-gray-300 w-full'>
                <thead>
                  <tr className='bg-gray-200'>
                    <th className='border border-gray-300 px-4 py-2'>Ranking</th>
                    <th className='border border-gray-300 px-4 py-2'>Nombre</th>
                    <th className='border border-gray-300 px-4 py-2'>Sobrenombre</th>
                    <th className='border border-gray-300 px-4 py-2'>Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2'>
                      <FaTrophy className='text-xl text-green-500' />
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>Dios del Juego</td>
                    <td className='border border-gray-300 px-4 py-2'>Ecuatoriano</td>
                    <td className='border border-gray-300 px-4 py-2'>10000</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2'>
                      <FaTrophy className='text-xl text-yellow-500' />
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>Sabelotodo</td>
                    <td className='border border-gray-300 px-4 py-2'>Experto</td>
                    <td className='border border-gray-300 px-4 py-2'>7500</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2'>
                      <FaTrophy className='text-xl text-orange-500' />
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>Principiante</td>
                    <td className='border border-gray-300 px-4 py-2'>Novato</td>
                    <td className='border border-gray-300 px-4 py-2'>5000</td>
                  </tr>
                  {/* Agregar más filas según sea necesario */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export default function GameModes() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isRewardsModalOpen, setIsRewardsModalOpen] = useState(false);
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);

  const openInstructionsModal = () => {
    setIsInstructionsModalOpen(true);
  };

  const closeInstructionsModal = () => {
    setIsInstructionsModalOpen(false);
  };

  const openRewardsModal = () => {
    setIsRewardsModalOpen(true);
  };

  const closeRewardsModal = () => {
    setIsRewardsModalOpen(false);
  };

  const openRankingModal = () => {
    setIsRankingModalOpen(true);
  };

  const closeRankingModal = () => {
    setIsRankingModalOpen(false);
  };

  return (
    <section className='lg:max-w-6xl mx-auto lg:col-start-1 lg:col-end-2 px-8 py-6 flex flex-col justify-center bg-[url("/bg-gamemodes.svg")] text-slate-900 w-full'>
      <h2 className='text-2xl mb-4 font-medium'>Parámetros del Juego</h2>
      <nav>
        <ul className='flex flex-col sm:flex-row justify-center gap-5'>
          <li className='bg-neutral-300 max-w-sm md:max-w-none bg-opacity-30 backdrop-blur-[2px] rounded p-5 hover:scale-[1.03] transition-all hover:backdrop-blur-0 hover:bg-opacity-100 hover:bg-white shadow-sm mx-auto'>
            <TbBook className='text-3xl' />
            <button onClick={openInstructionsModal} className='btn-secondary font-bold text-lg px-6 py-2 rounded mt-2'>
              Instrucciones
            </button>
            <p className='text-sm mt-2'>Haga clic para ver las instrucciones del juego</p>
          </li>
          {gameModes.map((mode, index) => (
            index !== 0 && (
              <li key={index + mode.buttonText} className='bg-neutral-300 max-w-sm md:max-w-none bg-opacity-30 backdrop-blur-[2px] rounded p-5 hover:scale-[1.03] transition-all hover:backdrop-blur-0 hover:bg-opacity-100 hover:bg-white shadow-sm mx-auto'>
                {mode.icon}
                <button onClick={mode.buttonText === 'Recompensas' ? openRewardsModal : openRankingModal} className='btn-secondary font-bold text-lg px-6 py-2 rounded mt-2'>
                  {mode.buttonText}
                </button>
                <p className='text-sm mt-2'>{mode.description}</p>
              </li>
            )
          ))}
        </ul>
      </nav>
      <GameModal
        isOpen={isInstructionsModalOpen}
        onClose={closeInstructionsModal}
        title='Instrucciones del Juego'
        content={gameModes[0].modalContent}
      />
      <GameModal
        isOpen={isRewardsModalOpen}
        onClose={closeRewardsModal}
        title='Recompensas del Juego'
        content={gameModes[1].modalContent}
      />
      <GameModal
        isOpen={isRankingModalOpen}
        onClose={closeRankingModal}
        title='Ranking del Juego'
        content={gameModes[2].modalContent}
      />
    </section>
  );
}
