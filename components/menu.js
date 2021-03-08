import React, { useState } from 'react';
import Link from 'next/link';

function Menu() {
    return (<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">IsaDoula</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link href="/">
                                <a class="nav-link">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/blog">
                                <a class="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vídeos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link href="/about">
                                <a class="nav-link">Sobre IsaDoula</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/contact">
                                <a class="nav-link">Fale Comigo</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}

export default Menu;