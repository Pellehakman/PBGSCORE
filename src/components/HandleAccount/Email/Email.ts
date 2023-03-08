import $fireUser from "@/services/account/fireUser";
import { getAuth } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Email",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onEmail"],
  setup(props, { emit }) {
    const auth = getAuth();
    onMounted(async () => {
      await $fireUser.getUser();
      if (auth.currentUser) {
        email.value = auth.currentUser.email;
      }
    });

    const email = ref<string | any>("");
    const handleEmail = (email: string) => {
      console.log(email);
      emit("onEmail", email);
    };

    return { email, handleEmail, props };
  },
});
