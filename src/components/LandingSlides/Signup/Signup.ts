import Email from "@/components/HandleAccount/Email/Email.vue";
import Nickname from "@/components/HandleAccount/Nickname/Nickname.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Password, Email, Nickname },
  props: { handleModal: Boolean },
  name: "signup",
  setup(props) {
    return { props };
  },
});
