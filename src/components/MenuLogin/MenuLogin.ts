import { defineComponent, ref } from "vue";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-login",
  setup() {
    const showLoginForm = ref(false);
    const loginForm = ref(false);
    const dropdownAccount = ref(false);

    // KANASKE INTE HA CLICK UP HÄR? issue när man markerar i input fältet på login i menyn
    document.addEventListener("mousedown", function (event: any) {
      if (!event.target.closest(".menu-account-container")) {
        showLoginForm.value = false;
        loginForm.value = false;
        dropdownAccount.value = false;
      }
    });

    const handleDropdownAccount = () => {
      dropdownAccount.value = !dropdownAccount.value;
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
