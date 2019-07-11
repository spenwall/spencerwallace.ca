<template>
  <div>
    <Section title="About" color="bg-vue-green">
      <div class="flex justify-center">
        <div class="sm:w-4/5">
          <Card title="About Me">
            <div class="pb-4">
              I am a passionate developer that loves PHP, and JavaScript. Curenltly im working in Laravel, Zend and Vue. 
              Making things with arduino, alexa and personal projects are some of the things I do on the side when I am
              not working. Currently I am a lead developer at weddingstar.com one of the largest wedding supply retailers.
              I love new challenges and helping others build things that make life better.
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
