<template>
  <div>
    <Section title="About" color="vue-green">
      <div class="flex justify-center">
        <div class="max-w-5xl">
          <Card title="About Me">
            <div class="pb-4">
              I am a pationate developer that loves PHP, and JavaScript. Curenltly im working in Laravel, Zend and Vue. I
              love new challenges and helping others build things that make life better.
            </div>
          </Card>
        </div>
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
