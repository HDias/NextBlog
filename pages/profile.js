import Link from 'next/link'

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

        <div class="col-4 col-sm-6 col-lg-3">
          <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={styles.profile}>

            <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />

              <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
            </div>

            <div class="single_advisor_details_info">
              <h6>Samantha Sarah</h6>
              <p class="designation">Founder &amp; CEO</p>
            </div>
          </div>
        </div>

        <div class="col-8 col-sm-6 col-lg-3">
          <div class="row">            
            <Link href="/admin/post-list">
              <a class="p-2 link-secondary">Meus Posts</a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div >)
}

export default Profile;