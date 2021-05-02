import Link from 'next/link'
import { withAuthUser, AuthAction } from 'next-firebase-auth'

const styles = {
  head_profile: {
    'visibility': 'visible',
    "animation-delay": '0.2s',
    "animation-name": 'fadeInUp',
  },
  profile: {
    'visibility': 'visible', 
    "animation-delay": '0.2s',
    "animation-name": 'fadeInUp',
  }
}

function Profile() {
  return (<div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-lg-6">          
            <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={styles.head_profile}>
            <h3>Our Creative <span> Team</span></h3>
            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <Link href="/admin/post-list">
            <a class="p-2 link-secondary">Meus Posts</a>
          </Link>
        </div>

        <div class="col-3">
          <Link href="/admin/create-post">
            <a class="p-2 link-secondary">Novo Post</a>
          </Link>
        </div>
      </div>
    </div>
  </div >)
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth'
})(Profile);