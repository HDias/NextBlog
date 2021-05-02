import { withAuthUser, AuthAction } from 'next-firebase-auth'

const styles = {
  content: {
    config: '20px',
  },
}

function PostList() {
  return (<div>
    <div class="container">
      <hr />
    </div>
  </div>)
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth'
})(PostList)