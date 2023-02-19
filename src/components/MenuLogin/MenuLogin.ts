import { defineComponent, ref } from "vue";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-login",
  setup() {
    const dropdownChild = ref(false);
    const dropdownParent = ref(false);
    const displayPassword = ref("password");

    document.addEventListener("mousedown", function (event: any) {
      if (!event.target.closest(".menu-dropdown-container")) {
        dropdownChild.value = false;
        dropdownParent.value = false;
      }
    });

    const handleDisplayPassword = () => {
      if (displayPassword.value === "password") {
        displayPassword.value = "text";
      } else {
        displayPassword.value = "password";
      }
    };

    const handleDropdownParent = () => {
      dropdownParent.value = !dropdownParent.value;
    };

    const handleDropdownChild = () => {
      dropdownChild.value = !dropdownChild.value;
    };
    return {
      displayPassword,
      handleDisplayPassword,
      triangle,
      handleDropdownChild,
      dropdownChild,
      handleDropdownParent,
      dropdownParent,
    };
  },
});
