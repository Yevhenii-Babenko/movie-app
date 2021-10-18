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
  &__title {
    margin-bottom: 40%;
    &--modificator {
      margin-bottom: 0;
    }
  }
  &__social {
    &__img {
      width: 30px;
      object-fit: contain;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        transform: scale(1);
      }
    }
  }
}
.paragraphs__item {
  padding: 5px 0;
  white-space: pre-line;
  line-height: 20px;
  font-size: 13px;
}
.box__item:nth-of-type(1) > .box-inner {
  display: flex;
  flex-direction: column;
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

.list {
  &__item {
    margin: 10px 0;
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