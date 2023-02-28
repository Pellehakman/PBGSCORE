import { defineComponent, ref } from "vue";
import triangle from "../../../assets/triangle.svg";
import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import { getAuth } from "firebase/auth";
import router from "@/router";

export default defineComponent({
  name: "menu-login",
  components: { Email, Password },
  setup() {
    const auth = getAuth();
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

    const handleLogout = () => {
      auth.signOut();
      router.push({ path: "/landing" });
    };
    return {
      handleLogout,
      triangle,
      handleDropdownChild,
      dropdownChild,
      handleDropdownParent,
      dropdownParent,
    };
  },
});
