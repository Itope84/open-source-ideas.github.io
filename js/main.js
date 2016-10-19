// This is where the magic happens
// Written by Fredrik August Madsen-Malmo (github@fredrikaugust)

var URL = "https://api.github.com/repos/mikaelbr/open-source-ideas/issues";

function display_issues (flags = []) {
  $.get({
    url: URL,
    success: function (data) {
      show_issues_in_dom(data);
    }
  });
}

function generate_label_html (labels) {
  var label_string = "";

  labels.forEach(function (label) {
    label_string += "<div class='chip'>" + label.name + "</div>";
  });

  return label_string;
}

function show_issues_in_dom (issues) {
  issues.forEach(function (issue) {
    $('#cards .row').append("<div class='col s12'>" +
      "<div class='card'>" +
      "<div class='card-content'>" +
      "<span class='card-title teal-text text-darken-3'>" +
      issue.title +
      "</span> " +
      generate_label_html(issue.labels) +
      "<p>" + issue.body + "...</p>" +
      "</div><div class='card-action'><a target='_blank' href='" +
      issue.html_url + "'>Participate</a></div></div></div>");

  });
}

$(document).ready(function () {
  display_issues();
});
