<template>
  <div>
    <Section title="Experience" color="yellow">
      <Card title="Weddingstar: Sr. Software Engineer June 2018 - Present">
        <ul class="list-disc mx-0 my-4 pl-12">
          <li>
            Responsible for site architecture, and dev ops for one of the largest worldwide online wedding retailers
            with 10,000 - 20,000 daily visitors
          </li>
          <li>
            Provide beginner to mid level training to 7 developers on different
            developement topics. eg. git, zend framework, vscode, and testing
          </li>
          <li>
            Tech lead for the migration of codebase from Zend framework 1 to 3 to modernize codebase for better testing and decrease page load by 50%
          </li>
        </ul>
      </Card>
    </Section>
  </div>
</template>

<script>
import Section from "./Section.vue"
import Card from "../Card"

export default {
  components: {
    Section,
    Card
  }
};
</script>
