import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import logo from "../../assets/logo.svg";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-component",

  setup() {
    const open = ref(false);

    const handleOpen = () => {
      open.value = !open.value;
    };

    return { logo, handleOpen, open };
  },
});
