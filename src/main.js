import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Fabian Leuschner",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Black pipeline magic"],
    // Which CI/CD tools do you use in your project?
    tools: "GitLab Pipelines and GitHub workflows",
    // What do you want to learn in this workshop?
    expectations: ["How to use it without sacrficing your first-born"],
    // What do you like to do when you're not coding?
    hobbies: ["play handball", "do running", "do cycling"],
  },
});
