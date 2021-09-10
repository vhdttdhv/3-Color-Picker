function changePic() {
  let changeStyle = document.documentElement.style;
  switch (this.id) {
    case "spacing":
      changeStyle.setProperty(`--${this.id}`, this.value + "vh");
      break;
    case "blur":
      changeStyle.setProperty(`--${this.id}`, this.value + "px");
      break;
    case "base-color":
      changeStyle.setProperty(`--${this.id}`, this.value);
      break;
    default:
      break;
  }
}
document
  .querySelectorAll("input")
  .forEach((e) => e.addEventListener("mousemove", changePic));
