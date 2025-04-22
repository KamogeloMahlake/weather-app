const API_KEY = 'MTNXYTNUK67FZFPQT3E38L7Q8'
const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

export async function weatherData(location, unit, n) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next${n}days?key=${API_KEY}&unitGroup=${unit}`;
  const response = await fetch(url, {mode: 'cors'});

  if (!response.ok) throw new Error("Unable to find location");
  const data = await response.json();
  return cleanData(data);
}

const cleanData = data => {
  const location = data.resolvedAddress.split(',');
  const cleanDataObject = {
    address: data.resolvedAddress,
    nextDays: []
  };

  data.days.forEach(day => {
    const object = {
      temp: day.temp,
      feelsLike: day.feelslike,
      humidity: day.humidity,
      description: day.description,
      date: new Date(day.datetime).toDateString(),
    };
    cleanDataObject.nextDays.push(object);
  });
  return cleanDataObject;

};
