import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
    return (<div>
        <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="link-secondary" href="#">Lista de Email</a>
                </div>
                <div class="col-4 text-center">
                    <a class="blog-header-logo text-dark" href="#">IsaDoula</a>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <a class="link-secondary" href="#" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                    </a>
                    <a class="btn btn-sm btn-outline-secondary" href="#">Entrar</a>
                </div>
                </div>
            </header>

            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <Link href="/">
                        <a class="p-2 link-secondary">Home</a>
                    </Link>
                    <Link href="/video">
                        <a class="p-2 link-secondary">Videos</a>
                    </Link>
                    <Link href="/about">
                        <a class="p-2 link-secondary">Sobre IsaDoula</a>
                    </Link>
                    <Link href="/contact">
                        <a class="p-2 link-secondary">Fale Comigo</a>
                    </Link>
                </nav>
            </div>
        </div>
    </div>);
}

export default Header;