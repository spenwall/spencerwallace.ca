<template>
  <div>
    <Section title="Tech" color="plum">
      <div class="flex justify-center">
          <Card class="sm:w-4/5" title="Languages">
            <div class="flex justify-around flex-wrap p-4">
              <JsLogo width="100px" height="100px"/>
              <PHP width="100px" height="100px"/>
              <vueLogo width="100px" height="100px"/>
              <ZendLogo width="100px" height="100px"/>
              <DockerLogo width="100px" height="100px"/>
            </div>
          </Card>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import Card from "../Card";
import PHP from "~/assets/images/svg/php-logo.svg";
import JsLogo from "~/assets/images/svg/javascript-logo.svg";
import vueLogo from "~/assets/images/svg/vue-logo.svg";
import ZendLogo from "~/assets/images/svg/zend-logo.svg";
import DockerLogo from "~/assets/images/svg/docker-logo.svg";

export default {
  components: {
    Section,
    Card,
    PHP,
    JsLogo,
    vueLogo,
    ZendLogo,
    DockerLogo
  }
};
</script>
