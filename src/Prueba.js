import React from 'react'

export const Prueba = () => {
  return (
    
    <body>
       <div className='layout'>
        
          <header className='header'>  
            <div className='logo'> 
            </div>
              <ul>
                    <li> <a className='a1' href='#'> ¿Quienes somos? </a></li>
                    <li> <a className='a1' href='#'> Contactanos </a> </li>
                    <li> <a className='a1' href='#'> Inicia Sesion </a> </li>
                    <li> <a className='a1' href='#'> Registrate </a> </li>
              </ul> 
          </header>

            <nav className='nav'> 
                <div> 
                    <h1 className='h1'>KAUZ EVOLUCION A LA ERA DIGITAL</h1>
                </div>
                 
                <div className='img1'>
                  <img src='img/img1.png'></img>

                   <button>
                      <a href="https://nerexrs.github.io/Virtual-World-quotes-metaverse/"> ingresa al mundo virtual </a>
                  </button>    
                  <h2 className='h2'> ESPACIO PARA QUE LAS PERSONAS PUEDAN INGRESAR A UN MUNDO DIGITAL  DONDE PUEDAN VER LAS COSAS EN 2D, 3D O CON LOS VR</h2>
                </div>
                
           
            </nav>

            <section className='content'> 
                <article className='Video'> 
                    <h3 className='tittle'> Desarrollo web </h3>
                    <p className='descripcion'>quienes somos </p>
                </article> </section>

            <aside className='lateral'>
                <div className='search'>
                    <h3> title </h3>
                 </div>
            </aside>

            <footer> 
                &copy; Propiedad Kauz 
            </footer>
       </div>
    </body>
  )
}
