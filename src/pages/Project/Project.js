import React, {useEffect, useState} from 'react';

export default function Project(){
  
  return (
     <main className="bg-blue-100 min-h-screen p-12">
       <section className="container mx-auto">   
          <h2 className="text-blue-400 text-3xl cursive flex justify-center p-6">
            Confira alguns projetos!
          </h2>         
            <section className="">
              <h2 className="text-blue-400 text-3xl cursive p-6">
                Amuse
              </h2> 
              <p className="">Website de filmes populares atualizado pela API movie.db</p>
              <a><img/></a>
            </section>
          </section>
        </main>
    );
}


