const profileImage = document.getElementById("profileImage");
const upload = document.querySelector("main");
const getUploadedFileImage = () => {
  const file = profileImage.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const result = reader.result;
    upload.style.backgroundImage = `url(${result})`;
  };
};
