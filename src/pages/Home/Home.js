import React from 'react';
import colorful from '../../images/colorful.jpg';
import foto from '../../images/foto.png';

export default function Home(){
    return (
      <main>
        <img 
          src={colorful} 
          alt='plano de fundo colorido'
          className="absolute object-cover w-full h-full"
        />
        <section 
          className="relative flex justify-center 
          min-h-screen pt-12 lg:pt-56 px-8"
        >
          <img src={foto} alt="foto da Adriana" sizes='10px' style={{borderRadius: '50%', height:'300px'}}/>
          <div>
            <h1 className="text-5xl text-gray-400 font-bold cursive 
              leading-none lg:leading-snug flex justify-center">
                Olá, sou Adriana Ferreira             
            </h1>   
            <p className="text-2xl text-gray-400 cursive 
              leading-none lg:leading-snug flex justify-center">
                Desenvolvedora Full Stack          
            </p>             
            <p className="text-1xl text-gray-600
              leading-none lg:leading-snug flex justify-center px-6 py-4">
                Adoro explorar o universo do desenvolvimento Web e descobrir cada dia um pouco mais.<br/>
                Tenho conhecimentos em HTML, CSS, Javascript, React, Node, TypeScript, MySQL e AWS.<br/>
                Conhecer outras tecnologias também seria divertido, pois gosto muito de aprender.<br/>
                Busco sempre contribuir e fazer a diferença...
            </p>   
          </div>   
        </section>                        
      </main>
    )
}