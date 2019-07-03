<template>
  <div>
    <Section title="Contact" color="bg-vue-green">
      <div class="w-full flex justify-center">
        <Card class="md:w-1/3" title="Contact Me">
          <div class="flex flex-wrap flex-col justify-between">
            <div class="my-4">
              <a class="flex items-center" href="mailto:spencerwallace@outlook.com">
                <font-awesome class="text-2xl mr-2" :icon="['fas', 'envelope']"/>
                <div>spencer.wallace@outlook.com</div>
              </a>
            </div>
            <div class="my-4">
              <a class="flex items-center" href="https://twitter.com/spenwall">
                <font-awesome class="text-2xl mr-2" :icon="['fab', 'twitter']"/>
                <div>@spenwall</div>
              </a>
            </div>
            <div class="my-4">
              <a class="flex items-center" href="https://github.com/spenwall">
                <font-awesome class="text-2xl mr-2" :icon="['fab', 'github']"/>
                <div>spenwall</div>
              </a>
            </div>
            <div class="my-4">
              <a class="flex items-center" href="https://www.linkedin.com/in/spencer-wallace-8501194a/">
                <font-awesome class="text-2xl mr-2" :icon="['fab', 'linkedin']"/>
                <div>Spencer Wallaces</div>
              </a>
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
