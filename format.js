function formatWeather(city, temp, condition) {
  return `${city}: ${temp}C, ${condition}`;
}
module.exports = { formatWeather };
