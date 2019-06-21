<template>
  <div>
    <Section title="Resume">
      <div class="flex justify-center">
        <Card class="sm:w-4/5" title="Current Resume">
          <a
            href="https://docs.google.com/document/d/14E4RM1jK5qo6R14AaIrxNB-vDZqDhqDMijSHIW_6lcM/edit?usp=sharing"
            class="text-xl"
          >
            <g-image class="shadow m-4" src="~/assets/images/resume.png" width="200"></g-image>
          </a>
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