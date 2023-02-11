import router from "@/router";
import { defineComponent } from "vue";
import logo from "../../assets/logo.svg";

export default defineComponent({
  name: "landing-view",

  setup() {
    function redirect() {
      router.push("/statistics");
    }

    return {
      logo,
      redirect,
    };
  },
});
