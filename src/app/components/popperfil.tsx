import React, { useState } from 'react';
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Estado para armazenar os itens selecionados e a foto atual
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  if (!isOpen) return null;
  
  const handleItemClick = (item: { name: string, photo: string }) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item.name)
        ? prevSelectedItems.filter((i) => i !== item.name)
        : [...prevSelectedItems, item.name]
    );
    setSelectedPhoto(item.photo);
  };

  const items = [
    { name: 'Fotografia', photo: 'fotografia.png' },
    { name: 'Natureza', photo: 'natureza.png' },
    { name: 'Viagens', photo: 'viagens.png' },
    { name: 'Praia', photo: 'praia.png'},
    { name: 'Petlover', photo: 'petlover.png'},
    { name: 'Decoração', photo:'decoracao.png'},
    { name: 'Cinema', photo: 'cinema.png'},
    { name: 'Literatura', photo: 'literatura.png'},
    { name: 'Música', photo: 'musica.png'},
    { name: 'Esportes', photo: 'esportes.png' },
    { name: 'Arte', photo: 'arte.png' },
    { name: 'Cozinha', photo: 'cozinha.png' }
  ];


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="w-[40px] h-[40px] font-poppins font-bold p-2.5 text-rosa-4 text-[24px]"
        >
          <img src="x_pop.png" width={20} height={20} alt="Fechar"/>
        </button>
        <div className="md:max-w-[797px] md:max-h-[800px] flex flex-col justify-center items-center gap-12">
          <div className="md:min-w-[797px] md:min-h-[676px] flex flex-col justify-center items-center gap-12">
            <img src="popperfil.png" width={279.92} height={264.5} alt="Profile" />
            <div className="gap-6 text-center gap-y-10">
              <h4 className="text-[24px] text-preto text-normal leading-9 mb-4">Interesses</h4>
              <p className="text-cinza-3 font-poppins font-normal text-[16px] leading-6 mb-10">
                Selecione abaixo os assuntos com os quais você mais se identifica, eles serão expostos
                para os usuários que acessarem seu perfil no aplicativo. (no máximo seis).
              </p>
              <div className="grid grid-cols-3 gap-4 gap-y-10 md:w-[797px] mb-6">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex flex-row w-full h-[56px] rounded-[10px] border-[1px] gap-[16px] items-center cursor-pointer
                      ${selectedItems.includes(item.name) ? 'bg-laranja' : 'bg-branco-2'}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <img 
                      className={`ml-8 ${selectedItems.includes(item.name) ? 'filter whiten' : ''}`} 
                      src={item.photo} 
                      width={40} 
                      height={36} 
                      alt={item.name} 
                    />
                    <h4 className="text-cinza-3 font-poppins font-normal text-[24px] leading-9">{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
            <button className="onClick={onClose}  mb-5 py-6 px-[20px] bg-rosa-4 text-white w-[340px] h-[57px] flex items-center justify-around gap-[10px] font-poppins text-2xl font-normal rounded-[10px] leading-9  hover:bg-rosa-3 tracking-wide">
                  Confirmar
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;