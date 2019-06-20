<template>
  <div>
    <Section title="Experience" color="yellow">
      <div class="w-full flex justify-center">
        <div class="flex justify-center sm:w-4/5 flex-wrap">
          <Card title="Sr. Software Engineer: Weddingstar June 2016 - Present">
            <ul class="list-disc mx-0 my-4 pl-12">
              <li>
                Responsible for site architecture, and dev ops for one of the largest worldwide online wedding retailers
                with 10,000 - 20,000 daily visitors
              </li>
              <li>
                Provide beginner to mid level training to 7 developers on different
                developement topics.
                eg. git, zend framework, ide's, and testing
              </li>
              <li>Tech lead for the migration of codebase from Zend framework 1 to 3 to modernize codebase for better testing and decrease page load time by 50%</li>
              <li>Full stack development using PHP (Zend Framework), JavaScript, HTML, SASS</li>
            </ul>
          </Card>
          <Card title="Business Analyst: Alberta Governemnt Sept 2012 - June 2015">
            <ul class="list-disc mx-0 my-4 pl-12">
              <li>Gathered user requirements to convert to technical requirements</li>
              <li>Tested technical implementations using development environment</li>
              <li>Created text and video user manuals for internal software</li>
              <li>Created small (1 page) to large (25 page) reports for upper management detailing the current and expected process outcomes</li>
              <li>Successfully led a team in charge or improving building change requests by 25% overall</li>
            </ul>
          </Card>
          <Card title="Web Development Manager: Split 5 - Sept 2007 - Sept 2009">
            <ul class="list-disc mx-0 my-4 pl-12">
              <li>Managed a team of 8 developers creating HTML and flash websites</li>
              <li>Provide customer support for over 40 websites at a time including updateing user content, and fixing bugs</li>
              <li>Handled all hosting and domain setups for websites</li>
            </ul>
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
