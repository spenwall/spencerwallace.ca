<template>
  <div>
    <Section title="Links">
      <div class="flex justify-center">
        <div class="m-6">
          <div class="js-widget">
            <a
              style="display: block"
              href="https://www.justserve.org"
              target="_blank"
              rel="noopener"
            >
              <link
                href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
                rel="stylesheet"
              />
              <div class="js-widget-header">
                FIND VOLUNTEER OPPORTUNITIES<br />IN YOUR COMMUNITY WITH
              </div>
              <div class="js-widget-footer">
                <img
                  src="https://i.postimg.cc/SRGJvX5T/JS-Logo-Medium.png"
                  alt="JustServe logo"
                />
              </div>
              <div class="js-widget-bottom-bar"></div>
            </a>
          </div>
        </div>
        <div class="m-6">
          <div class="js-widget">
            <a
              style="display: block"
              href="https://www.justserve.org"
              target="_blank"
              rel="noopener"
            >
              <link
                href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
                rel="stylesheet"
              />
              <div class="js-widget-header">
                TROUVEZ DES OPPORTUNITÉ<br />DE BÉNÉVOLAT DANS VOTRE COMMUNAUTÉ
                AVEC
              </div>
              <div class="js-french-widget-footer">
                <img
                  src="https://i.postimg.cc/ncHRfR07/JS-French-logo-clean.png"
                  alt="JustServe French logo"
                />
              </div>
              <div class="js-widget-bottom-bar"></div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import Card from "../Card";

export default {
  components: {
    Section,
    Card,
  },
};
</script>

<style>
.js-widget {
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #bbbdc0;
  font-family: "Oswald", sans-serif;
  margin: 5px;
}
.js-widget-header {
  background-color: #089eb9;
  color: white;
  text-align: center;
  padding: 48px 16px 24px;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5;
}
.js-french-widget-footer {
  background-color: white;
  padding: 12px;
  text-align: center;
}

.js-french-widget-footer img {
  max-width: 220px;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

.js-widget-footer {
  background-color: white;
  padding: 32px;
  text-align: center;
}
.js-widget-footer img {
  max-height: 42px;
}
.js-widget-bottom-bar {
  height: 12px;
  background-color: #7db640;
}
</style>
