<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="box">
        <div class="box__item">
          <div class="box-inner">
            <h4 class="box-inner__title box-inner__title--modificator">
              Now Streaming
            </h4>
            <div class="box-inner__paragraphs">
              <p class="paragraphs__item">
                Warehouse Society, 234 Bahagia Ave Street PRBW 29281
              </p>
              <p class="paragraphs__item">
                © Now Streaming™, 2021. All rights reserved. Company
                Registration Number: 21479524.
              </p>
            </div>
          </div>
        </div>
        <div class="box__item">
          <div class="box-inner">
            <h4 class="box-inner__title">About</h4>
            <ul class="list">
              <li class="list__item">
                <a href="#" class="list__link">Profile</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Features</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box__item">
          <div class="box-inner">
            <h4 class="box-inner__title">Help</h4>
            <ul class="list">
              <li class="list__item">
                <a href="#" class="list__link">Support</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Sign up</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Guide</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Reports</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Q&A</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box__item">
          <div class="box-inner">
            <h4 class="box-inner__title">Social Media</h4>
            <div class="box-inner__social">
              <a href="#"
                ><img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png"
                  alt="Facebook"
                  class="box-inner__social__img"
              /></a>
              <a href="#"
                ><img
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt="Twitter"
                  class="box-inner__social__img"
              /></a>
              <a href="#"
                ><img
                  src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png"
                  alt="Instagram"
                  class="box-inner__social__img"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
@import '~/assets/scss/layout/footer';
</style>
