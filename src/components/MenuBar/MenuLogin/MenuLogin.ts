import { defineComponent, ref } from "vue";
import triangle from "../../../assets/triangle.svg";
import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";

export default defineComponent({
  name: "menu-login",
  components: { Email, Password },
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
