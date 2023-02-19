import { defineComponent, ref } from "vue";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-login",
  setup() {
    const dropdownChild = ref(false);
    const dropdownParent = ref(false);

    document.addEventListener("mousedown", function (event: any) {
      if (!event.target.closest(".menu-dropdown-container")) {
        dropdownChild.value = false;
        dropdownParent.value = false;
      }
    });

    const handleDropdownParent = () => {
      dropdownParent.value = !dropdownParent.value;
    };

    const handleDropdownChild = () => {
      dropdownChild.value = !dropdownChild.value;
    };
    return {
      triangle,
      handleDropdownChild,
      dropdownChild,
      handleDropdownParent,
      dropdownParent,
    };
  },
});
