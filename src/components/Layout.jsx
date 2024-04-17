import {Outlet} from 'react-router-dom';
import React from 'react';

const Layout = () => (
    <div>
      <header>
        <h1 className="text-6xl flex justify-center items-center">Euro 2024</h1>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer className='m-12'>
        © 2024
      </footer>
    </div>
)

export default Layout;
