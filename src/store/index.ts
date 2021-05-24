// @ts-ignore
import { createStore } from "vuex";
import { State } from "@/store/types";

export const getters = {
  GET_GAME_STATUS: "getGameStatus",
};

export const store = createStore({
  state() {
    return {
      game: {
        status: "profileGameStatus",
      },
    };
  },
  getters: {
    [getters.GET_GAME_STATUS]: (state: State) => state.game.status,
  },
  mutations: {},
  actions: {},
});
