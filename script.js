

  let message = document.getElementById("message");

  let messageOnline = () => {
    message.textContent = "Internet Connection Available";
    message.style.cssText = "background-color: #E7F6D5; color: #689F38";
  };
  let messageOffline = () => {
    message.textContent = "No Internet Connection";
    message.style.cssText = "background-color: #FFDDE0; color: #D32F2F";
  };

  if (window.navigator.onLine) {
    messageOnline();
  } else {
    messageOffline();
  }
  window.addEventListener("online", messageOnline);
  window.addEventListener("offline", messageOffline);