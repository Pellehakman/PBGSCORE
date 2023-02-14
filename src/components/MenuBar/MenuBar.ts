import { defineComponent, ref } from "vue";
import logo from "../../assets/logo.svg";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-component",

  setup() {
    window.addEventListener("click", function (event: any) {
      if (!event.target.closest(".menu-account-container")) {
        //set default view to account dropdown menu
        showLoginForm.value = false;
        loginForm.value = false;
        dropdownAccount.value = false;
        hideButtons.value = true;
      }
    });

    const showLoginForm = ref(false);
    const loginForm = ref(false);
    const dropdownAccount = ref(false);
    const hideButtons = ref(true);

    const handleLoginForm = () => {
      loginForm.value = !loginForm.value;
      hideButtons.value = !hideButtons.value;
    };

    const handleDropdownAccount = () => {
      dropdownAccount.value = true;
    };

    return {
      showLoginForm,
      logo,
      hideButtons,

      handleLoginForm,
      loginForm,

      handleDropdownAccount,
      dropdownAccount,
    };
  },
});
