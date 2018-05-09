var minYear = birthData[0].year;
var maxYear = birthData[birthData.length - 1].year;

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);