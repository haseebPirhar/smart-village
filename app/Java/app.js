document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav");

  menuBtn.addEventListener("click", function () {
      // Toggle menu display
      if (navMenu.style.display === "block") {
          navMenu.style.display = "none";
      } else {
          navMenu.style.display = "block";
      }
  });

  // Optional: Click outside menu to close it
  document.addEventListener("click", function (event) {
      if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
          navMenu.style.display = "none";
      }
  });
});

  

// ___________________________________________________________________________________



// _________________________________________________________________________________________

document.getElementById("getWeather").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:3000/api/weather?city=${city}`);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById("cityName").textContent = data.city;
            document.getElementById("temperature").textContent = `${data.temperature}`;
            document.getElementById("condition").textContent = data.weather;
            document.getElementById("windSpeed").textContent = `${data.windSpeed}`;
        } else {
            alert(data.message || "Weather data not found!");
        }
    } catch (error) {
        alert("Failed to fetch weather data. Please try again later.");
    }
});

