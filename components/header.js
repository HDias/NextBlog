import React, { useState } from 'react';
import Link from 'next/link';
import AuthBtn from '../components/AuthBtn'
import ProfileBtn from '../components/ProfileBtn'
import { withAuthUser, useAuthUser } from 'next-firebase-auth'

function Header() {
  const AuthUser = useAuthUser()
  return (<div>
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            {/* <a class="link-secondary" href="#">Lista de Email</a> */}
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="/">IsaDoula</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <ProfileBtn email={AuthUser.email} />
            <AuthBtn email={AuthUser.email} signOut={AuthUser.signOut} />
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

export default withAuthUser()(Header);