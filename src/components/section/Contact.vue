<template>
  <div>
    <Section title="Contact" color="vue-green">
      <div class="w-full flex justify-center">
          <Card class="sm:w-4/5" title="Contact Me">
          <div class="flex flex-wrap justify-between">
            <div class="my-4">
              Email:
              <a href="mailto:spencerwallace@outlook.com">spencer.wallace@outlook.com</a>
            </div>
            <div class="my-4">
              Twitter:
              <a href="https://twitter.com/spenwall">@spenwall</a>
            </div>
            <div class="my-4">
              Github:
              <a href="https://github.com/spenwall">spenwall</a>
            </div>
            <div class="my-4">
              LinkedIn
              <a href="https://www.linkedin.com/in/spencer-wallace-8501194a/">Spencer Wallaces</a>
            </div>
          </div>
          </Card>
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
    Card
  }
};
</script>
