const button = document.querySelector(".submit-button");

button.addEventListener("click", function () {
  const tickerEl = document.getElementById("ticker-search");
  const tickerInput = document.getElementById("ticker-search").value;
  const checked = getChecked();
  if (tickerInput === "") {
    tickerEl.focus();
    return alert("Enter a ticker");
  } else if (checked.length === 0) {
    return alert("Select sites");
  }
  makeLinks(checked, tickerInput);
});

// get URL value from checked checkboxes
const getChecked = () => {
  const checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((e) => e.value);
  return checked;
};

// apply ticker symbol to URL
const makeLinks = (checked, tickerInput) => {
  const linksArr = checked.map((site) => `${site}${tickerInput}`);
  openSites(linksArr);
};

// open URLs in new tabs in one new window
const openSites = (linksArr) => {
  linksArr.forEach(link => {
    window.open(link); 
  });
};


