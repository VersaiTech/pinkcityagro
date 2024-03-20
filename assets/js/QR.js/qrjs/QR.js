



// Function to generate QR code
function generateQR() {
    console.log("generateqr function is working")
    var qrData = "upi://pay?pa=merchant1469899.augp@aubank&tn=&am=&mam=&orgid=159765&pn=getepay&mode=02&purpose=00&mc=0000&tr=&url=&category=&ver=01&cu=INR&mid=&msid=&mtid=&enTips=&mg=OFFLINE&qrMedium=04&invoiceNo=&invoiceDate=&QRts=2023-04-15 03:53:57&QRexpire=&Split=&PinCode=&Tier=&txntype=&Consent=&mn=&type=&validitystart=&validityend=&Amrule=&Recur=&Recurvalue=&RecureType=&Rev=&Share=&Block=&Umn=&Skip=&sign=AQLI/JR8pgcbZQRx1EBpI1+7Zj2BqnZD/cXIDRNk5M1JyBgmhecUTxuYS/7yrzt/v0YyuHblkQvEvzvKy7BKgQs4APEfhNcOqfQXNfIVdQKkYlebnQeNvJ/ZXF55KI336b4uM10J/WNc1h/VjuyOtvZtrLcaxDWcfGJkUY7c3OodPYr2"; // Replace this with your payment details
    var qrCode = new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 256,
        height: 256
    });

    // Display the QR code modal
    var modal = document.getElementById("qrModal");
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById("qrModal");
    modal.style.display = "none";
}

// Add event listener to the checkout button
document.getElementById("checkoutButton").addEventListener("click", function() {
    // Generate QR code on button click
    generateQR();
});