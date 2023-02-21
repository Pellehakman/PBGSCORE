import { defineComponent, ref } from "vue";
import { showEyeIcon } from "@/models/enums";

export default defineComponent({
  name: "Password",
  setup() {
    const displayPassword = ref(showEyeIcon.yes);
    const password = ref("");
    const handleDisplayPassword = () => {
      if (displayPassword.value === showEyeIcon.yes) {
        displayPassword.value = showEyeIcon.no;
      } else {
        displayPassword.value = showEyeIcon.yes;
      }
    };

    return { password, handleDisplayPassword, displayPassword, showEyeIcon };
  },
});
