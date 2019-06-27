<template>
  <div>
    <Section title="Resume">
      <div class="flex justify-center">
        <Card class="sm:w-1/3" title="Current Resume">
          <div class="flex justify-center">
            <a
              href="https://docs.google.com/document/d/14E4RM1jK5qo6R14AaIrxNB-vDZqDhqDMijSHIW_6lcM/edit?usp=sharing"
              class="text-xl"
            >
              <g-image class="shadow mb-4" src="~/assets/images/resume.png" width="200"></g-image>
            </a>
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