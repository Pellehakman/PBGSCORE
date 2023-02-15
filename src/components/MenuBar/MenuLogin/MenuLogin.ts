import { defineComponent, ref } from "vue";
import triangle from "../../../assets/triangle.svg";
export default defineComponent({
  name: "menu-login",
  setup() {
    const showLoginForm = ref(false);
    const loginForm = ref(false);
    const dropdownAccount = ref(false);

    window.addEventListener("click", function (event: any) {
      if (!event.target.closest(".menu-account-container")) {
        showLoginForm.value = false;
        loginForm.value = false;
        dropdownAccount.value = false;
      }
    });

    const handleDropdownAccount = () => {
      console.log(dropdownAccount.value);
      if (dropdownAccount.value === true && loginForm.value === true) {
        dropdownAccount.value = false;
      }
    };

    const handleLoginForm = () => {
      loginForm.value = !loginForm.value;
    };
    return {
      showLoginForm,
      triangle,
      handleLoginForm,
      loginForm,
      handleDropdownAccount,
      dropdownAccount,
    };
  },
});
