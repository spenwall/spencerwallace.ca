<template>
  <div>
    <Section title="Tech" color="plum">
      <Card title="Languages">
        <div class="flex justify-around p-4">
          <PHP width="100px" height="100px"/>
          <JsLogo width="100px" height="100px"/>
          <vueLogo width="100px" height="100px"/>
          <ZendLogo width="100px" height="100px"/>
          <DockerLogo width="100px" height="100px"/>
        </div>
      </Card>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue"
import Card from "../Card"
import PHP from "~/assets/images/svg/new-php-logo.svg"
import JsLogo from "~/assets/images/svg/javascript-js-seeklogo.com.svg"
import vueLogo from "~/assets/images/svg/vuejs-seeklogo.com.svg"
import ZendLogo from "~/assets/images/svg/zend-framework-seeklogo.com.svg"
import DockerLogo from "~/assets/images/svg/docker-seeklogo.com.svg"

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
