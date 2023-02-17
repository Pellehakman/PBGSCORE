import { computed, defineComponent, onMounted, ref } from "vue";
import logo from "../../assets/logo.svg";
import MenuLogin from "../MenuLogin/MenuLogin.vue";

export default defineComponent({
  name: "menu-component",
  components: { MenuLogin },

  setup() {
    const toggleMenu = ref(false);
    const bredd = ref(2);

    const vid = computed(() => window.innerWidth < 640);
    console.log(vid);
    if (bredd.value < 639) {
      toggleMenu.value = false;
    }

    const handleMenu = () => {
      toggleMenu.value = !toggleMenu.value;
    };
    return {
      logo,
      toggleMenu,
      handleMenu,
      bredd,
    };
  },
});
