import { defineComponent, ref } from "vue";
import logo from "../../assets/logo.svg";

export default defineComponent({
  name: "statistics-view",

  setup() {
    const defaultModal = ref(true);
    const accountModal = ref(false);
    const isButton1Pressed = ref(true);
    const isButton2Pressed = ref(false);

    const handleModal = () => {
      defaultModal.value = !defaultModal.value;
      accountModal.value = !accountModal.value;
    };
    const handleClick1 = () => {
      isButton1Pressed.value = true;
      isButton2Pressed.value = false;
    };
    const handleClick2 = () => {
      isButton2Pressed.value = true;
      isButton1Pressed.value = false;
    };

    return {
      logo,
      isButton1Pressed,
      isButton2Pressed,
      handleClick1,
      handleClick2,
      handleModal,
      defaultModal,
      accountModal,
    };
  },
});
