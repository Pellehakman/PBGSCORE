import { showEyeIcon } from "@/models/enums";
import { defineComponent, ref } from "vue";
import triangle from "../../assets/triangle.svg";

export default defineComponent({
  name: "menu-login",
  setup() {
    const dropdownChild = ref(false);
    const dropdownParent = ref(false);
    const displayPassword = ref(showEyeIcon.yes);

    const email = ref("");
    const password = ref("");

    document.addEventListener("mousedown", function (event: any) {
      if (!event.target.closest(".menu-dropdown-container")) {
        dropdownChild.value = false;
        dropdownParent.value = false;
      }
    });

    const handleDisplayPassword = () => {
      if (displayPassword.value === showEyeIcon.yes) {
        displayPassword.value = showEyeIcon.no;
      } else {
        displayPassword.value = showEyeIcon.yes;
      }
    };

    const handleDropdownParent = () => {
      dropdownParent.value = !dropdownParent.value;
    };

    const handleDropdownChild = () => {
      dropdownChild.value = !dropdownChild.value;
    };
    return {
      email,
      password,
      displayPassword,
      handleDisplayPassword,
      triangle,
      handleDropdownChild,
      dropdownChild,
      handleDropdownParent,
      dropdownParent,
      showEyeIcon,
    };
  },
});
