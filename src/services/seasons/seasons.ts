import { getAuth } from "firebase/auth";

class Seasons {
  state: any;
  async GetSeasonsStats(ign_id: string) {
    const auth = getAuth();
    // if (localStorage.getItem("_user_season_stats")) {
    //   console.log("NO API REQUEST MADE");
    // } else if (auth.currentUser) {
    //   console.log("API REQUEST MADE");
    const ign_id_url = `players/${ign_id}/`;
    const seasonId = "division.bro.official.pc-2018-22";
    const season_id_url = `seasons/${seasonId}`;

    await fetch(
      `${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      }
    )
      .then((response) => response.json())
      .then(async (response) => {
        this.state = await response.data.attributes.gameModeStats;
        localStorage.setItem("_user_season_stats", JSON.stringify(this.state));
        console.log(this.state);
      });
  }
}
// }

const $seasons = new Seasons();
export default $seasons;
