import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "nickname",
  props: {},
  emits: ["onNickname"],
  setup(props, { emit }) {
    const nickname = ref("");
    const handleNickname = (nickname: string) => {
      emit("onNickname", nickname);
    };

    return { nickname, handleNickname };
  },
});
