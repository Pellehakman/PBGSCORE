import { defineComponent, onMounted, ref } from "vue";
import { createEventBus } from "vue-composition-api";
export default defineComponent({
  name: "handle-account",
  setup() {
    const bus = createEventBus();
    const password = ref("");
    const email = ref("");

    onMounted(() => {
      bus.on("password", (val) => (password.value = val));
      bus.on("email", (val) => (email.value = val));
    });
  },
});
