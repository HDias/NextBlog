import React from 'react'
import Link from 'next/link'

const ProfileBtn = ({ email }) => (
  <div>
    {email ? (
      <>
        <Link href="/profile">
          <a class="btn btn-sm btn-outline-secondary">Meu Perfil</a>
        </Link>
      </>
    ) : (
      <>
      </>
    )}
  </div>
)

export default ProfileBtn
