export function showPopup(props, msg, destination) {
  if (window.confirm(msg)) {
    props.history.push(destination);
  }
}

export default {
  showPopup,
};
