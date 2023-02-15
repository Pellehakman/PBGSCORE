import { defineComponent, ref } from "vue";
import logo from "../../assets/logo.svg";
import MenuLogin from "./MenuLogin/MenuLogin.vue";

export default defineComponent({
  name: "menu-component",
  components: { MenuLogin },

  setup() {
    return {
      logo,
    };
  },
});
