function toggleImage(id) {
    const img = document.getElementById(id);
    img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';
}

function toggleCertificates() {
    const certificates = document.getElementById('certificates');
    certificates.style.display = (certificates.style.display === 'none' || certificates.style.display === '') ? 'flex' : 'none';
}




