export function removeSplashScreen() {
  setTimeout(() => {
    document.querySelector(".splash-screen")?.classList.add("fade-out");
    setTimeout(() => {
      document.querySelector("body").classList.remove("splash");
      // document.body.style.position = "initial";
    }, 300);
  }, 1000);
}
