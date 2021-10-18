<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="box">
        <div class="box__item">
          <div class="box-inner">
            <h4 class="box-inner__title">Now Streaming</h4>
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
              <img src="" alt="Facebook" class="img__item4" />
              <img src="" alt="Twitter" class="img__item4" />
              <img src="" alt="Instagram" class="img__item4" />
            </div>
            <!-- <div class="img-messenger">
              <img src="" alt="Messenger" class="messenger" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" >
$header-bg-color: #333;
@mixin margin($margin: 0) {
  margin: 0;
}
@mixin padding($padding: 0) {
  padding: 0;
}
@mixin display-flex {
  display: flex;
}
@mixin list-style {
  list-style-type: none;
  @include margin($margin: 0);
  @include padding($padding: 0);
}
@mixin theme($theme: $header-bg-color) {
  // background-color: $header-bg-color;
  border: $header-bg-color;
}

.footer {
  padding: 30px 0;
  width: 100vw;
  &__container {
    width: 70rem;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}
.box {
  @include display-flex;
  // justify-content: space-between;
  gap: 10%;
  color: #fff;
  padding: 10px 0;
  &__item {
    &:nth-of-type(1) {
      flex-shrink: 2;
    }
    @include display-flex;
    flex-grow: 1;
    padding: 0;
    margin: 0;
  }
}
.box-inner {
  &__paragraphs {
    @include display-flex;
    flex-direction: column;
  }
}
.paragraphs__item {
  padding: 5px 0;
  white-space: pre-line;
  line-height: 25px;
}
.box__item:nth-of-type(1) > .box-inner {
  display: flex;
  flex-direction: column;
  gap: 20%;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  &__link {
    text-decoration: none;
    color: #fff;
  }
}

header {
  position: relative;
}
.wrapper {
  padding: 40px 0;
}
.navbar {
  @include theme($theme: $header-bg-color);
  @include display-flex;
  color: #fff;
  @include margin($margin: 0);
  overflow: hidden;
  &__list {
    @include display-flex;
    @include list-style;
    flex-grow: 1;
    gap: 5%;
  }
  &__item {
    &:first-of-type .navbar__link {
      color: red;
      transition: 0.5s ease-in-out all;
      &:hover {
        color: #fff;
        transition: 0.3s ease-in-out all;
      }
    }
  }
  &__link {
    &:hover {
      color: red;
      transition: 0.3s ease-in-out all;
    }
    text-decoration: none;
    color: #fff;
    transition: 0.5s ease-in-out all;
    font-weight: bold;
  }
}
</style>
<style scoped>
/* .footer {
  padding: 30px 0;
}
.footer__container {
  position: relative;
  margin-left: 240px;
  margin-right: 243px;
  display: flex;
  flex-direction: column;
} */

.top-row {
  display: flex;
}

.top__btn:first-of-type {
  width: 170px;
  height: 60px;
  background: var(--color-4);
  border-radius: 50px;
  border: none;
}

.top__btn:first-of-type:first-child {
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
}

.top__btn:last-of-type {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 210px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 5px 5px rgba(75, 93, 104, 0.1);
  border-radius: 50px;
  border: none;
  outline: none;
}

.top__btn:last-of-type span {
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
  color: var(--color-2);
}
.top__btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: ease-in-out 0.2s;
}
.top__arrow {
  width: 20px;
  height: 14px;
}

.bottom-row {
  position: relative;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
}

.btn__logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn__logo:nth-child(1) {
  object-fit: contain;
  width: 49px;
  height: 35px;
}

.btn__logo:nth-child(2) {
  width: 153px;
  height: 30px;
  margin: 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 160%;
  color: var(--color-2);
}

.item1-p_1 {
  width: 335px;
  height: 65px;
  margin: 67px 0 0 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: 0.01em;
  color: var(--color-2);
}

.item1-p_2 {
  width: 335px;
  height: 60px;
  margin: 10px 0 0 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: 0.01em;
  color: var(--color-2);
}

.item1-p_3 {
  width: 360px;
  height: 50px;
  margin: 118px 0 0 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 180%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: var(--color-2);
}

.btn__item2:first-child {
  width: 52px;
  height: 30px;
  margin: 0 0 30px 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;
  color: var(--color-2);
}

.list__item2 {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 166px;
  height: 160px;
}

.links-about,
.links-help {
  text-decoration: none;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 250%;
  color: var(--color-2);
}

.btn__item3:first-child {
  width: 52px;
  height: 30px;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;
  color: var(--color-2);
}

.list__item3 {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 166px;
  height: 190px;
}

.btn__item4 {
  width: 178px;
  display: flex;
  flex-direction: column;
  /*height: 110px;*/
}

.btn__item4:first-child {
  width: 170px;
  height: 30px;
  margin: 0 0 30px 0;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;
  color: var(--color-2);
}

.social-net {
  display: flex;
  /*justify-content: space-evenly;*/
  gap: 2%;
}
.img__item4 {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: var(--color-2);
  opacity: 0.1;
  cursor: pointer;
}

.img__item4:hover {
  transform: scale(1.1);
}

.messenger {
  display: flex;
  align-items: flex-end;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.messenger:hover {
  transform: scale(1.1);
}

.img-messenger {
  margin-top: auto;
  align-self: flex-end;
}
</style>