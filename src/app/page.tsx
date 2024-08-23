// Perfil.tsx
"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons } from "@/constants";

const Perfil = () => {
  const links = [
    { href: "/salvar alterações", label: "Salvar Alterações" },
  ];

    // Exportação de imagem (reolhar)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData();
      Array.from(event.target.files).forEach((file) => {
        formData.append('files', file);
      });
  
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Upload bem-sucedido');
      } else {
        console.log('Erro ao fazer upload');
      }
    }
  };
  

  return (
    <>
      const pathname = usePathname();
      const username = "Samira";

      const links = [
        { href: "/", label: "Home" },
        { href: "/perfil", label: "Meu Perfil" },
        { href: "/hotel", label: "Meu Hotel" },
        { href: "/menu", label: "Menu" },
      ];

      return (
        <header className="flex px-10 py-6 border-b border-cinza-2 font-poppins font-medium justify-between items-center text-preto">
          <Link href={"/"} className="flex items-end gap-4">
            <Image src={icons.logo} height={38} width={38} alt="logo" />
            <h1 className="text-2xl">BonVoyage</h1>
          </Link>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl hover:bg-branco-2 py-2 px-8 rounded-[20px] ${
                  pathname === link.href ? `text-rosa-3` : ``
                }`}
                passHref
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center rounded-full border border-cinza-2 w-[60px] h-[60px]">
              <Image
                src={icons.notification}
                height={29}
                width={25}
                alt="notification"
              />
            </div>
            <p className="text-xl">Olá, {username}</p>
            <Image
              src={icons.googleIcon}
              width={60}
              height={60}
              alt="user profile picture"
            />
          </div>
        </header>
      );

      <main className="flex items-center justify-center">
        <div className="flex justify-around w-full max-w-[1512px] mt-[-20px]">
          <div className="w-[517px] h-[607px] relative top-[180px] flex flex-col items-center justify-center bg-[#F6F4F4] rounded-[20px] p-[34px_50px_64px_37px]">
            <Image src="/upload-left.png" width={340} height={238} className="inline mb-[16px]" alt="Upload" />
            <h4 className="text-[24px] font-medium leading-[36px] font-poppins text-[#372F30] mb-[16px]">Fotos</h4>
            <h6 className="text-[16px] font-bold leading-[24px] font-poppins text-[#372F30] w-[454px] h-[24px] mb-[16px]">
              Selecione três fotos para compor o seu perfil.
            </h6>
            <ul className="pl-6 gap-[16px]">
              <li className="flex gap-[16px] mb-[16px]">
                <span className="w-[16px] h-[16px] bg-[url('/right.png')] bg-no-repeat bg-contain inline-block absolute left-[24px] bottom-[210px]" aria-hidden="true"></span>
                <span className="text-[16px] font-normal leading-[24px] font-poppins text-[#372F30] w-[412px] h-[48px]">
                  Vamos começar com a foto principal! Com postura formal e rosto bem aparente.
                </span>
              </li>
              <li className="flex gap-[16px] mb-[16px]">
                <span className="w-[16px] h-[16px] bg-[url('/right.png')] bg-no-repeat bg-contain inline-block absolute left-[24px] bottom-[150px]" aria-hidden="true"></span>
                <span className="text-[16px] font-normal leading-[24px] font-poppins text-[#372F30] w-[412px] h-[48px]">
                  Que tal uma foto mais descontraída? Experimente postar uma foto sua praticando algum hobby!
                </span>
              </li>
              <li className="flex gap-[16px] mb-[16px]">
                <span className="w-[16px] h-[16px] bg-[url('/right.png')] bg-no-repeat bg-contain inline-block absolute left-[24px] bottom-[85px]" aria-hidden="true"></span>
                <span className="text-[16px] font-normal leading-[24px] font-poppins text-[#372F30] w-[412px] h-[48px]">
                  Por último, seria interessante uma foto sua com algum ente querido. Seja um amigo, familiar, ou com seu pet!
                </span>
              </li>
            </ul>
          </div>
          <div className="relative top-[180px] w-[639px] h-[611px] flex flex-col items-center justify-center gap-[40px]">
            <div className="border-2 border-dashed border-[#AB9C9F] p-[176px_128px] w-[639px] h-[514px] rounded-[10px] flex items-center justify-center">
              <Image src="/img.png" alt="Botar fotos" width={383} height={162}  onClick={handleImageClick} className="hover:content-[url('/image_hover.png')]" />
              <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple className="hidden" />
            </div>
            <button className="py-[15px] px-[20px] bg-[#DC143B] text-white w-[340px] h-[57px] flex items-center justify-center gap-[10px] font-poppins text-[24px] font-normal rounded-[10px] hover:bg-[#F42C46] -tracking-2">
              Salvar Alterações
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Perfil;