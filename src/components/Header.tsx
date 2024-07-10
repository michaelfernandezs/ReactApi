
import { useMemo } from 'react'
import{useLocation,NavLink}from'react-router-dom'
export default function Header(){
  const {pathname} = useLocation() 

  const isHome=useMemo(()=>pathname === '/',[pathname])

  console.log(isHome)
    return(
      <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex jusify-between items-center">

                <div>
                  <img className="w-32" src="/logo.svg" alt="logotipo"/>
                </div>

                <nav className='flex gap-4'>

                  <NavLink 
                    to="/"
                    className={({isActive})=>
                      isActive ? 'text-orange-500 uppercase font-bold':'text-white uppercase font-bold'
                  }>Inicio</NavLink>
                  <NavLink 
                    to="/favoritos"
                    className={({isActive})=>
                    isActive ? 'text-orange-500 uppercase font-bold':'text-white uppercase font-bold'
                  }>Favoritos</NavLink>


                </nav>







            </div>
            {isHome && (
              <form className='md:w-1/2 2x1:w-1/3  bg-orange-400  my-32 py-10 rounded-lg
              shadow space-y-6'>
                 <div className='space-y-4'>
                        <label 
                         htmlFor='ingridient' 
                         className='block text-white uppercase font-extrabold text-lg'
                        >Nombre o ingridientes</label>
                        <input
                          id='ingridient'
                          type='text'
                          name='ingridient'
                          className='p-3 w-full rounded-lg focus:outline-none'   
                          placeholder='nombre o ingridiente .Ej.  Vodka,Tequila ,cafe '                     
                        />
                 </div>
                  <div className='space-y-4'>
                        <label 
                         htmlFor='ingridient' 
                         className='block text-white uppercase font-extrabold text-lg'
                        >Categoria</label>
                        <select
                          id='ingridient'
                          name='ingridient'
                          className='p-3 w-full rounded-lg focus:outline-none'

                           
                        >  
                          <option value="">--Seleccione--</option>                    
                        </select>
                     
                 </div>
                 <input
                  type='submit'
                  value='Buscar Recetas'
                  className='cursor-pointer bg-orange-800 hover:bg-orange-900
                  text-white uppercase font-bold text-lg py-3 px-12 rounded-lg shadow-md'
                 />
                 
              </form>
            )}
        </div>

      </header>
    )
}
    

