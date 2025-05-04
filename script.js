// File: script.js
document.addEventListener('DOMContentLoaded', function() {
    // Generate CAPTCHA acak
    const captcha = generateCaptcha();
    document.getElementById('captcha').textContent = captcha;
    
    // Validasi form
    document.getElementById('formKelulusan').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulasi pengecekan (di real project, ganti dengan API call)
        const hasil = document.getElementById('hasil');
        hasil.innerHTML = `
            <div class="success">
                <h3>SELAMAT!</h3>
                <p>Anda dinyatakan <strong>LULUS</strong> ujian akhir SMK Darul Jannah</p>
            </div>
        `;
        hasil.style.display = 'block';
    });
});

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}