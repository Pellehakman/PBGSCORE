import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Email",
  setup() {
    const email = ref("");
    return { email };
  },
});
