window.addEventListener('load', function() {
    // إضفاء تأثيرات على عناصر التنقل
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            link.style.transform = 'scale(1.1)';
            link.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        });
        link.addEventListener('mouseout', function() {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = 'none';
        });
    });

    // إضفاء تأثيرات على عناصر القائمة
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'scale(1.1)';
            item.style.background = '#FFD700';
            item.style.color = '#1a1a1a';
            item.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        });
        item.addEventListener('mouseout', function() {
            item.style.transform = 'scale(1)';
            item.style.background = '#f8f9fa';
            item.style.color = 'black';