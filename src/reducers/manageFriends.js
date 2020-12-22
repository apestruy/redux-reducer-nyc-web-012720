export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return (
        {...state, friends: [...state.friends, action.friend]}
      )

      break;
    default:
    return state

  }
}

let state = {friends: []}
