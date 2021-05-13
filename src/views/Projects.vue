<template>
  <div class="section-details">
    <h2 class="section-heading">
      <span>Projects</span>
    </h2>
    <ProjectDescription :data="eLearning" />
    <ProjectDescription :data="toyJunction" />
    <ProjectDescription :data="orderManagementSystem" />
    <ProjectDescription :data="chatbot" />
  </div>
</template>
<script>
import ProjectDescription from "../components/ProjectDescription.vue";

export default {
  name: "Projects",
  components: {
    ProjectDescription,
  },
  data() {
    return {
      eLearning: {
        name: "E-Learning",
        domain: "E-Learning",
        description: [
          "It is an application for teaching and learning maths in a visual and dynamic way. The application allows teachers to take online classes. It allows teachers to give work to their students and students can submit their work to the teachers.",
          "Team Size: 8",
        ],
        technologies: ["Create.js", "Node.js", "Express.js", "Vue.js"],
      },
      toyJunction: {
        name: "Toy Junction",
        url: "https://toys.iabhishekraj.in/",
        domain: "E-commerce",
        description: [
          "Toy Junction is an application intended for toys renting. It would make searching and viewing of toys easier for user’s specific to their needs. Users can add toys to their shopping cart. The facility of exchanging the toys after Minimum holding days is available.",
          "Team Size: 2",
        ],
        technologies: ["Node.js", "Express.js", "Angular", "MySQL"],
      },
      orderManagementSystem: {
        name: "Order Management System",
        domain: "E commerce",
        description: [
          "Project involved the development of a system that helps the sales and presales team to create the quote based on the client requirement, calculate cost for implementing a lighting solution and upon finalization of the quote PO is generated and processed. An order can be tracked and processed by releases.",
          "Team Size: 5",
        ],
        technologies: ["C#", "MS SQL Serve"],
      },
      chatbot: {
        name: "Order Food",
        domain: "Order Management System",
        description: [
          "It is a chatbot application which is responsible for showing the list of meals available and the user will be able to order the food using the application.",
        ],
        technologies: ["Node.js", "Express.js"],
      },
    };
  },
};
</script>
<style scoped>
</style>