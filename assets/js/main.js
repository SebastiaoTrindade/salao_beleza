const btnTopo = document.getElementById('btn-topo');   

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
}); 