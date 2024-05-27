document.getElementById('generate-btn').addEventListener('click', function() {
  const qrText = document.getElementById('text-input').value;
  if (qrText.trim() === "") {
    alert("Please enter text or URL");
    return
  }
  document.getElementById('qrcode').innerHTML = ""; // Clear previous QR code
  new QRCode(document.getElementById('qrcode'), {
    text: qrText,
    width: 256,
    height: 256
  });
});