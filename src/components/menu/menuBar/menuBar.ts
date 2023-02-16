import { defineComponent } from "vue";
import logo from "../../../assets/logo.svg";
import MenuLogin from "../menuLogin/menuLogin.vue";

export default defineComponent({
  name: "menu-component",
  components: { MenuLogin },

  setup() {
    return {
      logo,
    };
  },
});
