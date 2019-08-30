<template>
  <div>
    <Section color="bg-vue-blue" title="Projects">
      <div class="flex flex-wrap justify-around">
        <ImageCard
          color="bg-vue-blue"
          class="w-full sm:w-2/3 lg:w-1/3 mb-8"
          title="Weddingstar"
          image="/images/weddingstar.png"
        >
          <div class="text-sm sm:text-base border-b pb-2" >
          <a href="https://weddingstar.com">Weddingstar</a>
          </div>
          Principle architect for the site with 20,000 visitors per day.
          <div class="text-xl mt-2">Built with</div>
          <ul class="list-disc mx-0 my-4 pl-12">
            <li>PHP Zendframework</li>
            <li>Javascript (JQuery)</li>
            <li>SASS</li>
            <li>Bootstrap</li>
          </ul>
        </ImageCard>
        <ImageCard
          color="bg-vue-blue"
          class="w-full sm:w-2/3 lg:w-1/3 mb-8 mr-2"
          title="Red Flag Deal Alerts"
          image="/images/project-rfd.png"
        >
          <div
            class="text-sm sm:text-base border-b pb-2"
          >When you need to know the best deals right when they happen this app watches the Candian deal site
          redflagdeals.com hot deals form and sends notifications of new deals matching keywords. <br>
          <a href="https://rfd.spencerwallace.ca">Red Flag Deal Alerts</a>
          </div>
          <div class="text-xl mt-2">Built with</div>
          <ul class="list-disc mx-0 my-4 pl-12">
            <li>Laravel</li>
            <li>Vue</li>
            <li>Bulma</li>
          </ul>
        </ImageCard>
        <ImageCard
          color="bg-vue-blue"
          class="w-full sm:w-2/3 lg:w-1/3 mb-8"
          title="Gridsome Source Plugin"
          image="/svg/gridsome-logo.svg"
        >
          <div class="text-sm sm:text-base border-b pb-2">
            A Gridsome source plugin for google sheets. Allows gridsome users to gather data from google sheets to use
            in the static site generator Gridsome.
          </div>
          <div class="text-xl mt-2">Built with</div>
          <List>
            <li>Javascript</li>
            <li>Grisdome</li>
          </List>
        </ImageCard>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import ImageCard from "../ImageCard.vue";
import List from "../List";

export default {
  components: {
    Section,
    ImageCard,
    List
  }
};
</script>
