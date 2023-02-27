import AppFooter from "@/components/AppFooter/AppFooter.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "account-view",
  components: { MenuBar, AppFooter },
  setup() {},

  // mounted() {
  //   const initUserTheme = this.getTheme() || this.getMediaPreference();
  //   this.setTheme(initUserTheme);
  // },

  // data() {
  //   return {
  //     userTheme: "light-theme",
  //   };
  // },

  // methods: {
  //   toggleTheme() {
  //     const activeTheme = localStorage.getItem("user-theme");
  //     if (activeTheme === "light-theme") {
  //       this.setTheme("dark-theme");
  //     } else {
  //       this.setTheme("light-theme");
  //     }
  //   },

  //   getTheme() {
  //     return localStorage.getItem("user-theme");
  //   },

  //   setTheme(theme) {
  //     localStorage.setItem("user-theme", theme);
  //     this.userTheme = theme;
  //     document.documentElement.className = theme;
  //   },

  //   getMediaPreference() {
  //     const hasDarkPreference = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     if (hasDarkPreference) {
  //       return "dark-theme";
  //     } else {
  //       return "light-theme";
  //     }
  //   },
  // },
});
