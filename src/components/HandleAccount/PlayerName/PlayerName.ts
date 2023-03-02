import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerName",
  props: {},
  emits: ["onPlayerName"],

  setup(props, { emit }) {
    const playerName = ref("");

    const handlePlayerName = (playerName: string) => {
      emit("onPlayerName", playerName);
    };

    return { playerName, handlePlayerName };
  },
});
