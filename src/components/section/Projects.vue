<template>
  <div>
    <Section color="bg-vue-blue" title="Projects">
      <ImageCard color="bg-vue-blue" 
        title="Red Flag Deals" 
        image="/assets/static/src/assets/images/project-rfd.png"
      > 
        <template #info>
           
        </template>j
      </ImageCard>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
import ImageCard from "../ImageCard.vue";

export default {
  components: {
    Section,
    ImageCard,
  }
};
</script>
