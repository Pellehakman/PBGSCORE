import { defineComponent, ref } from "vue";
import logo from "../../assets/logo.svg";
import MenuLogin from "./MenuLogin/MenuLogin.vue";

export default defineComponent({
  name: "menu-component",
  components: { MenuLogin },

  setup() {
    const toggleMenu = ref(false);

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        toggleMenu.value = false;
      }
    });

    const handleMenu = () => {
      toggleMenu.value = !toggleMenu.value;
    };
    return {
      logo,
      toggleMenu,
      handleMenu,
    };
  },
});
