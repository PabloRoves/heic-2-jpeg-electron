const heic2any = require('heic2any')

const inputFileImage = document.getElementById('inputFileImage');
const btnConvert = document.getElementById("btnCreate");

const image = {
  imgData: null,
  imgName: "",
}

const handleFileChange = (e) => {
  image.imgData = null;
  image.imgName = "";
  const file = e.target.files[0]
  if (!file) return;
  const imageFullName = file === undefined ? "" : file.name;
  if (getExtension(imageFullName).toLowerCase() !== ".heic") {
    alert("Only .heic files are valid.");
    e.target.value = null;
    return;
  }
  loadImage(file);

};

function getExtension(imageFullName) {
  return imageFullName.substr(imageFullName.length - 5);
}

function loadImage(file) {
  image.imgName = removeExtension(file.name);

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = () => {
    image.imgData = fileReader.result;
  }
}

function removeExtension(imageFullName) {
  return imageFullName.substr(0, imageFullName.length - 5);
}

inputFileImage.addEventListener('change', handleFileChange);

const createJPEG = () => {
  if (image.imgData == null) return;

  fetch(image.imgData)
    .then((res) => res.blob())
    .then((blob) =>
      heic2any({
        blob,
        toType: "image/jpeg",
        quality: 0.5,
      })
    )
    .then((conversionResult) => {
      let url = URL.createObjectURL(conversionResult);
      downloadURI(url);
      URL.revokeObjectURL(url);
    })
    .catch((e) => {
      console.log(e);
      alert("¡Error, check the console for more information!");
    });
};

function downloadURI(uri) {
  const link = document.createElement("a");
  link.download = image.imgName;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

btnConvert.addEventListener('click', createJPEG);

