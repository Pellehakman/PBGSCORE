import Email from "@/components/HandleAccount/Email/Email.vue";
import Nickname from "@/components/HandleAccount/Nickname/Nickname.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Password, Email, Nickname },
  props: { handleModal: Boolean },
  name: "signup",

  setup(props) {
    const email = ref("");
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
    };

    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      password.value = fromPassword;
    };

    async function handleSignup() {
      $firebaseService.RegisterSubmit(password.value, email.value);
    }
    return { props, handleSignup, handlePassword, handleEmail };
  },
});
