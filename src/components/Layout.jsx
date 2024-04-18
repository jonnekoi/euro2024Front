import {Outlet} from 'react-router-dom';
import React from 'react';

const Layout = () => (
    <div>
      <header className="flex justify-center items-center">
        <img src="/logo.svg" alt="Logo" className="h-auto w-95"/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer className="fixed bottom-0 inset-x-0 m-10 text-center py-3">
      © 2024
      </footer>
    </div>
)

export default Layout;
