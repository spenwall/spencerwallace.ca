<template>
  <div>
    <Section color="bg-vue-blue" title="Projects">
      <div class="flex justify-around">
        <ImageCard
          color="bg-vue-blue"
          class="w-1/3"
          title="Red Flag Deal Alerts"
          image="/images/project-rfd.png"
        >
          <div
            class="border-b pb-2"
          >This app scrapes the redflagdeals.com website and sends notifications of new deals matching keywords.</div>
          <div class="text-xl mt-2">Built with</div>
          <ul class="list-disc mx-0 my-4 pl-12">
            <li>Laravel</li>
            <li>Vue</li>
            <li>Bulma</li>
          </ul>
        </ImageCard>
        <ImageCard
          color="bg-vue-blue"
          class="w-1/3"
          title="Gridsome Source Plugin"
          image="/svg/gridsome-logo.svg"
        >
          A Gridsome source plugin for google sheets. Allows gridsome users to gather data from google sheets to use
          in the static site generator Gridsome.  
        </ImageCard>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import ImageCard from "../ImageCard.vue";

export default {
  components: {
    Section,
    ImageCard
  }
};
</script>
