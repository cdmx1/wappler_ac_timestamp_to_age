dmx.Formatter('string', 'timestampToAge', function (timestamp) {
  var createdAtDate = new Date(timestamp);
  var currentDate = new Date();
  var timeDifference = currentDate - createdAtDate;
  var timeDifferenceInSeconds = Math.floor(timeDifference / 1000);
  var seconds = timeDifferenceInSeconds % 60;
  var minutes = Math.floor(timeDifferenceInSeconds / 60) % 60;
  var hours = Math.floor(timeDifferenceInSeconds / 3600) % 24;
  var days = Math.floor(timeDifferenceInSeconds / 86400);

  function formatTimeAgo(days, hours, minutes, seconds) {
    if (days > 0) {
      return days + " day" + (days > 1 ? "s" : "") + " ago";
    } else if (hours > 0) {
      return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    } else if (minutes > 0) {
      return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    } else {
      return seconds + " second" + (seconds > 1 ? "s" : "") + " ago";
    }
  }

  return formatTimeAgo(days, hours, minutes, seconds);
});