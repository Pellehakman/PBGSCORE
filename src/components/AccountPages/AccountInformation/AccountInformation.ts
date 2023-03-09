import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import type { userModel } from "@/models/models";
import $apiAccount from "@/services/account/apiAccount";
import $fireAccount from "@/services/account/fireAccount";
import $fireUser from "@/services/account/fireUser";
import { getAuth } from "firebase/auth";

import { defineComponent, handleError, onMounted, ref } from "vue";

export default defineComponent({
  name: "account-information",
  components: { Email, PlayerName, Password },

  setup() {
    const auth = getAuth();
    const user = auth.currentUser;

    const pubgError = ref("");
    const fireError = ref<string | undefined>("");
    const handleError = (fromError: string) => {
      pubgError.value = fromError;
    };

    const email = ref<any>(user?.email);
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
      console.log(email.value);
    };

    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      password.value = fromPassword;
    };

    const edit = ref(false );
    const editStyle = ref(false);
    const editText = ref("EDIT");
    const handleUpdate = async () => {
      edit.value = !edit.value;
      if (edit.value === false) {
        editText.value = "SAVE";
        editStyle.value = true;
      } else {
        editText.value = "EDIT";
        handleSave();
      }
    };
    const handleUpdateCancel = () => {
      editText.value = "EDIT";
      edit.value = true;
      editStyle.value = false;
    };

    const handleSave = async () => {
      await $fireAccount.UpdatePassword(password.value);
      await $fireAccount.UpdateEmail(email.value);
      fireError.value = $fireAccount.Error;
      editStyle.value = false;
      await $fireAccount.UpdatePlayerName($apiAccount);
    };

    return {
      handleUpdateCancel,
      handleSave,
      pubgError,
      fireError,
      handleError,
      editText,
      edit,
      editStyle,
      user,
      email,
      handleEmail,
      handlePassword,
      handleUpdate,
    };
  },
});
