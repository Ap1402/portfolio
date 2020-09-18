import { CHANGE_LANGUAGE } from "../actions/types";

const initialState = {
  language: "en",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
}
