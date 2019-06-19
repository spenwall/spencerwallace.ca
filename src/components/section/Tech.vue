<template>
  <div>
    <Section title="Tech" color="plum">
      <Card title="Languages">
        <div class="h-15 w-16">
          <PHP width="100px" height="100px"/>
        </div>
      </Card>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import Card from "../Card";
import PHP from "~/assets/images/new-php-logo.svg";

export default {
  components: {
    Section,
    Card,
    PHP
  }
};
</script>
