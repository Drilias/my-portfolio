import React from 'react';
import {NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
    return (
        <header className='bg-yellow-600'>
            <div 
               className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to='/' exact activeClassName='text-blue-200'
                        className='inflex-flex items-center py-6 px-3 mr-4 
                        text-white hover:text-blue-200 text-2xl'>
                       Sobre mim
                    </NavLink>
                    <NavLink to='projetos' activeClassName='text-blue-200'
                        className='inflex-flex items-center py-6 px-3 mr-4 
                        text-white hover:text-blue-200 text-2xl'>
                       Projetos
                    </NavLink>
                    <NavLink to='cursos' activeClassName='text-blue-200'
                        className='inflex-flex items-center py-6 px-3 mr-4 
                        text-white hover:text-blue-200 text-2xl'>
                       Cursos
                    </NavLink>
                    <NavLink to='contato' activeClassName='text-blue-200'
                        className='inflex-flex items-center py-6 px-3 mr-4 
                        text-white hover:text-blue-200 text-2xl'>
                       Contato
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-4'>
                    <SocialIcon url="https://www.linkedin.com/in/adriana-developer" bgColor='#808080' className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://github.com/Drilias" bgColor='#808080' className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://twitter.com/driliasferreira" bgColor='#808080' className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}