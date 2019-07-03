<template>
  <div>
    <Section title="Education" color="bg-red">
      <div class="flex justify-center flex-wrap">
        <Card class="sm:w-4/5" title="University of Lethbridge: 2008 - 2012">
          <ul class="list-disc mx-0 my-4 pl-12 pb-4">
            <li>Bachelor of Science: Computer Science</li>
            <li>Bachelor of Management: General Management</li>
          </ul>
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
