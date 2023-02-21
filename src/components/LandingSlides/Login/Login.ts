import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "login",
  components: { Password, Email },
  props: { handleModal: Boolean },

  setup(props) {
    return { props };
  },
});
