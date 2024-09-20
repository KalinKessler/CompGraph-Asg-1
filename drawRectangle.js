function main() {
    var canvas = document.getElementById("glcanvas"); // Memanggil Canvas dari html
    if (!canvas) {
        console.log("canvas not exist"); // Cek apakah terdapat canvas, jika tidak ada maka akan ditampilkan pesan error
        return;
    }

    var ctx = canvas.getContext("2d");
    var currentColor = 'rgba(0,0,255,1.0)';  // Pengaturan warna awal

    // Function untuk menggambar persegi
    function drawRectangle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Hilangkan gambar sebelumnya
        ctx.fillStyle = currentColor;
        ctx.fillRect(120, 10, 150, 150);  // Gambar persegi yang baru
    }

    // Event listener untuk clicking
    canvas.addEventListener('click', function(event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Cek apakah klik dilakukan di dalam kotak (x: 120-270, y: 10-160)
        if (x > 120 && x < 270 && y > 10 && y < 160) {
            // Pengaturan untuk mengubah warna merah-biru
            currentColor = (currentColor === 'rgba(0,0,255,1.0)') ? 'rgba(255,0,0,1.0)' : 'rgba(0,0,255,1.0)';
            drawRectangle();  // Gambar ulang persegi dengan warna baru
        }
    });

    drawRectangle();  // Initial drawing
}
