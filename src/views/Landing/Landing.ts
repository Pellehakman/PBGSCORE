import { defineComponent, ref } from "vue";
import logo from "../../assets/logo.svg";

export default defineComponent({
  name: "statistics-view",

  setup() {
    const viewOut = ref("landing-view");
    const viewIn = ref(true);

    const handleView = () => {
      if (viewOut.value === "landing-view") {
        viewOut.value = "landing-out";
      } else {
        viewOut.value = "landing-in";
      }
    };

    return { logo, handleView, viewOut, viewIn };
  },
});
