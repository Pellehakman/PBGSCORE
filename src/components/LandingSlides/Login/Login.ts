import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login",
  components: { Password, Email },
  props: { handleModal: Boolean, email: String },

  setup(props) {
    // $firebaseService.firebaseLogin();
    function handleLogin(email: any) {
      console.log(email.value);
    }
    return { props, handleLogin };
  },
});
