var file = document.querySelector("input[type=file]")["files"][0];
function getBaseUrl() {
  var reader = new FileReader();
  var baseString;
  reader.onloadend = function () {
    baseString = reader.result;
    //console.log(baseString);
  };

  reader.readAsBinaryString(file);

  var v = reader.readAsBinaryString(file);
  // console.log(v);
}

const dropArea = document.getElementById("drop-area");

dropArea.addEventListener("dragover", (event) => {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = "copy";
});

dropArea.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  const fileList = event.dataTransfer.files;
  //console.log(fileList[0]);
});

var v = localStorage.getItem("myItem");
let yourdata1 = {
  image_url:
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/guide_to_unusual_skin_conditions_slideshow/1800ss_wikipedia_rf_erythropoietic_protoporphyria.jpg",
  problem: "Erythropoietic Protoporphyria",
};

firebase
  .firestore()
  .collection("user/" + v + "/scans")
  .add(yourdata1)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
  });
