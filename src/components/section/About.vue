<template>
  <div>
    <Section title="About" color="vue-green">
      <div>
        <Card title="About Me">
          <div>This would be the slot</div>
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
