function adviseClothing(temperature, isRaining) {
    if (isRaining) {
        return "It's raining. You should wear a raincoat and bring an umbrella.";
    } else if (temperature < 0) {
        return "It's freezing. Wear a heavy winter coat, gloves, and a hat.";
    } else if (temperature >= 0 && temperature <= 10) {
        return "It's cold. Wear a warm jacket or coat.";
    } else if (temperature > 10 && temperature <= 20) {
        return "It's cool. A light jacket or sweater should be sufficient.";
    } else if (temperature > 20 && temperature <= 30) {
        return "It's warm. Wear comfortable, breathable clothing.";
    } else {
        return "It's hot. Wear light, cool clothing and stay hydrated.";
    }
}


const temperature = parseInt(prompt("Enter the current temperature (in Celsius):"), 10);
const isRaining = prompt("Is it raining? (yes or no):").toLowerCase() === 'yes';

const advice = adviseClothing(temperature, isRaining);
console.log(advice);