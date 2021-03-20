import React from 'react'
import Link from 'next/link'

const AuthBtn = ({ email, signOut }) => (
  <div>
    {email ? (
      <>
        <a
          class="btn btn-sm btn-outline-secondary"
          onClick={() => {
            signOut()
          }}
        > Sair
        </a>
      </>
    ) : (
      <>
        <Link href="/auth">
          <a class="btn btn-sm btn-outline-secondary">Entrar</a>
        </Link>
      </>
    )}
  </div>
)

export default AuthBtn
