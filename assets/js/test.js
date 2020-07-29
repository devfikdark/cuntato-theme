$(function () {
  let url = "https://cuntato.herokuapp.com/api/project-data";
  let data = {
    name: "sdjlkfj com",
    email: "datacom@gmail.com",
    message:
      "Hello, I have reached you through your personal website. Can you please help me to make a project? I'll give you $100. please let me know what do you think.",
  };
  data = JSON.stringify(data);
  let projectID = "ghe05u8xkh";
  let currentURL = window.location.href; // like this http://localhost:5500/test.html"
  $.post(
    url,
    { data, projectID: projectID, currentURL: currentURL },
    function () {}
  )
    .done((res) => {
      console.log(res);
    })
    .fail(() => {
      console.log("somthing wrong");
    });
});
