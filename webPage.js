let currentUTCTime = document.getElementById("currentUTCTime");
    let currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");

    setInterval(() => {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        
        let currentTime = new Date();

        currentUTCTime.innerHTML = (currentTime.valueOf())
        currentDayOfTheWeek.innerHTML = daysOfTheWeek[(currentTime.getDay())]
    }, 1000)
