import AppFooter from "@/components/AppFooter/AppFooter.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { defineComponent, ref } from "vue";

import AccountInformation from "@/components/AccountPages/AccountInformation/AccountInformation.vue";

export default defineComponent({
  name: "account-view",
  components: {
    AccountInformation,
    MenuBar,
    AppFooter,
  },

  setup() {
    const toggleState = ref(1);
    const toggleTab = (index: number) => {
      toggleState.value = index;
      console.log(index)
    };

    return { toggleTab, toggleState };
  },
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
