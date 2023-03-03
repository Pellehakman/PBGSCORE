import type { playerModel } from "@/models/models";
import { ref } from "vue";

class PubgService {
  fetchPlayer: playerModel | undefined;
  error: boolean | undefined;

  get FetchPlayer() {
    return this.fetchPlayer;
  }
  get isError() {
    return this.error;
  }

  async GetPlayer(playerName: string) {
    const player = `players?filter[playerNames]=${playerName}`;
    const player_url = `${player}`;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${player_url}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            Accept: "application/vnd.api+json",
          },
        }
      );
      const data = await response.json();
      this.fetchPlayer = data.data[0].id;
      this.error = false;
    } catch (err) {
      this.error = true;
    }

    // await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
    //   method: "GET",
    //   headers: {
    //     authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    //     Accept: "application/vnd.api+json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);

    //     this.playerData = response.data[0];
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.error = err;
    //   });
  }
}

const $pubgService = new PubgService();
export default $pubgService;
