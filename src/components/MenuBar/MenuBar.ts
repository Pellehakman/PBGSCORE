import { defineComponent, onMounted, ref } from "vue";
import logo from "../../assets/logo.svg";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-component",

  setup() {
    const open = ref(false);
    const showLoginForm = ref(false);
    const loginActive = ref(false);

    const handleLoginActive = () => {
      loginActive.value = !loginActive.value;
    };
    window.addEventListener("click", function (event: any) {
      if (!event.target.closest("button")) {
        showLoginForm.value = false;
        loginActive.value = false;
      }
    });

    return { showLoginForm, logo, open, loginActive, handleLoginActive };
  },
});
