<template>
  <div>
    <Section title="About" color="vue-green">
      <div>
        <Card title="About Me">
          <div>
            I am a pationate developer that loves PHP, and JavaScript. Curenltly im working in Laravel, Zend and Vue. I 
            love new challenges and helping others build things that make life better. 
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
