<template>
  <div>
    <Section color="bg-vue-blue" title="Projects">
      <ImageCard color="bg-vue-blue" image="~/assets/images/Redflag-Deal-Alerts.png" >
        Redflag Deal Alerts
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
