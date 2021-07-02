import {
    getJSON
} from "./utilities.js";


/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,us)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = ""; //insert your API 


form.addEventListener("submit", event => {
    event.preventDefault();
    let inputVal = input.value;
    // Check if there is a city
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(element => {
            let content = "";
            //athens,us
            if (inputVal.includes(",")) {
                //athens,ussssss->invalid country code, so we keep only the first part of inputVal

                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = element
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = element.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //athens
                content = element.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
              filteredArray[0].querySelector(".city-name span").textContent
            } ...otherwise be more specific by providing the country code as well`;
            form.reset();
            input.focus();
            return;
        }
    }


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

    getJSON(url)
        .then(data => {
            const {
                main,
                name,
                sys,
                weather
            } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°F</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city";
        });


    

    msg.textContent = "";
    form.reset();
    input.focus();

});
