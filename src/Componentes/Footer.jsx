import React from 'react';
import { Link } from 'react-router-dom';
import { GiCheckeredFlag } from "react-icons/gi";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Seção sobre */}
          <div className="mb-8 md:mb-0">
                <Link to="/" aria-label="E-Motion Grid" title="E-Motion Grid" className="inline-flex items-center lg:mx-auto">
                        <GiCheckeredFlag className="w-8 h-8 text-white" /> {/* Ícone da bandeira */}
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            E-Motion Grid
                        </span>
                </Link>
            <div className="mt-4">
              <p>&copy; E-motion Grid. Todos os direitos reservados.</p>
            </div>
          </div>

          {/* Seção de links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-center text-lg font-semibold mb-4">Links</h3>
            <ul className="text-center space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/live">Live</Link></li>
              <li><Link to="/social">E-social</Link></li>
              <li><Link to="/market">Marketplace</Link></li>
              <li><Link to="/register">Login/Cadastro</Link></li> 
            </ul>
          </div>

          {/* Seção de contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="flex items-center mb-2">
              <span className="material-symbols-outlined text-lg mr-2">call</span>
              (11) 97398-9086
            </p>
            <p className="flex items-center mb-2">
              <span className="material-symbols-outlined text-lg mr-2">mail</span>
              suporte@emotiongrid.com.br
            </p>
            <p className="flex items-center">
              <span className="material-symbols-outlined text-lg mr-2">road</span>
              Av Lins de Vasconcelos, 1222 - São Paulo - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
