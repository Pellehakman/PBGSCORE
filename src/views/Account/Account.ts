import AppFooter from "@/components/AppFooter/AppFooter.vue";
import MenuBar from "@/components/MenuBar/MenuBar.vue";
import { defineComponent, onMounted, ref } from "vue";
import { getAuth } from "firebase/auth";
import Email from "@/components/HandleAccount/Email/Email.vue";
import $fireAccount from "@/services/account/fireAccount";
import $fireUser from "@/services/account/fireUser";
import type { userModel } from "@/models/models";

export default defineComponent({
  name: "account-view",
  components: { MenuBar, AppFooter, Email },
  setup() {
    const users = ref<userModel[]>();
    onMounted(async () => {
      const data = await $fireUser.getUsers();
      console.log(data);
      users.value = data;
    });
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    const email = ref<any>(user?.email);
    const handleEmailUpdate = () => {
      $fireAccount.UpdateEmail(email.value);
      console.log(email.value);
    };

    return { user, email, handleEmailUpdate, users };
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
