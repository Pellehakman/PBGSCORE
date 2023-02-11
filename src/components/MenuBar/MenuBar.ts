import { defineComponent } from "vue";
import logo from "../../assets/logo.svg";
import triangle from "../../assets/triangle.svg"

export default defineComponent({
  name: "menu-component",

  setup() {
    return { logo, triangle };
  },
});
