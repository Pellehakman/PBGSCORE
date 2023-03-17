import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PlayerStats",
  setup() {
    const playerDropdown = ref(false);
    const handlePlayerDropdown = () => {
      playerDropdown.value = !playerDropdown.value;
    };
    return { handlePlayerDropdown, playerDropdown };
  },
});
