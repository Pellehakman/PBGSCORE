import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Email",
  props: {},
  emits: ["onEmail"],
  setup(props, { emit }) {
    const email = ref("");
    const handleEmail = (email: string) => {
      emit("onEmail", email);
    };

    return { email, handleEmail };
  },
});
