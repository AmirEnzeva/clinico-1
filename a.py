import qrcode

# Data to be encoded
data = "https://amirenzeva.github.io/clinico-1/"

# Create a QR code instance
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR Code (1 is the smallest)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level
    box_size=10,  # Size of each box in the QR grid
    border=4,  # Border thickness (default is 4)
)

# Add data to the QR code
qr.add_data(data)
qr.make(fit=True)

# Create and save the image
img = qr.make_image(fill="black", back_color="white")
img.save("qrcode.png")
