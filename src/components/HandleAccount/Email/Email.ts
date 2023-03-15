import $fireUser from "@/services/account/fireUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Email",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onEmail"],
  setup(props, { emit }) {
    const auth = getAuth();
    const email = ref<any | undefined>();
    const login = ref(false);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // email.value = user.email;
        login.value = true;
      }
    });

    const handleEmail = (email: string) => {
      console.log(email);
      emit("onEmail", email);
    };

    return { email, handleEmail, props, login };
  },
});
