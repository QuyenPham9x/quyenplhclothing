function showPopup(title, price, imageSrc) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImage").src = imageSrc;

    document.getElementById("productPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}
.action-buttons {
    display: flex;
    gap: 20px;
}

.action-buttons a {
    padding: 12px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-buttons a i {
    margin-right: 8px;
}

<script>
  document.getElementById('buyNowButton').addEventListener('click', function (event) {
    event.preventDefault();
    if (!selectedSize || !selectedColor) {
      alert("Vui lòng chọn size và màu sắc trước khi đặt hàng.");
      return;
    }

    const mainImageSrc = document.getElementById("mainProductImage").src;

    const orderPageUrl = `order-form.html?size=${selectedSize}&color=${selectedColor}&quantity=${selectedQuantity}&image=${encodeURIComponent(mainImageSrc)}`;
    window.location.href = orderPageUrl;
  });
</script>
<script>
  const params = new URLSearchParams(window.location.search);

  document.getElementById("size").value = params.get("size") || "S";
  document.getElementById("color").value = params.get("color") || "white";
  document.getElementById("quantity").value = params.get("quantity") || 1;

  const image = params.get("image");
  if (image) {
    document.getElementById("productImage").src = decodeURIComponent(image);
  }
</script>
.order-form-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  font-size: 16px; /* Áp dụng chung */
}
