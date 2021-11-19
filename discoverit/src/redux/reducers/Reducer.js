import { POINTS } from "../types/Types";

const init = {
    points:0
};

export default function reducer(state=init, action={}) {
    switch(action.type) {
        case POINTS:
            state.points += action.points;
            return state;
    }

    return state;
}