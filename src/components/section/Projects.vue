<template>
  <div>
    <Section title="Projects">
      <ImageCard color="vue-blue" image="~/assets/images/spencer.jpg" >
        Redflag Alerts
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
