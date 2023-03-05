import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import $pubgService from "@/services/pubgService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "go-pro",
  components: { PlayerName },
  setup() {
    // const playerData = computed(() => $pubgService.playerData().value);

    const pubgError = ref("");

    const handleError = (fromError: string) => {
      pubgError.value = fromError;
    };

    const handleSerach = () => {
      console.log("search");
    };

    return {
      pubgError,
      handleSerach,
      handleError,
    };
  },
});
