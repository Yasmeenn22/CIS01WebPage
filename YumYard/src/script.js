/*Translate function in the home page*/
let isEnglish = true;
function toggleLanguage() {
    const translateButton = document.querySelector('.btn-translate');
    if (isEnglish) {
        translateToArabic();
        translateButton.innerText = 'Translate to English';
    } else {
        resetToEnglish();
        translateButton.innerText = 'ترجم إلى العربية';
    }
    isEnglish = !isEnglish;
}

function translateToArabic() {
    document.body.style.direction = "rtl";
    // Update home page item
    document.querySelector('.content h1').innerHTML = 'مرحبًا بكم في مطعم <span class="primary-text">يم يارد</span>';
    document.querySelector('.content p').innerText = 'مدينة النكهات، هنا!';

    document.querySelectorAll('nav ul li a')[0].innerText = 'الرئيسية';
    document.querySelectorAll('nav ul li a')[1].innerText = 'القائمة';
    document.querySelectorAll('nav ul li a')[2].innerText = 'معلومات عنا';
    document.querySelectorAll('nav ul li a')[3].innerText = 'تواصل معنا';

    document.querySelector('.container h2').innerText = 'اطباق اليوم المميزة';
    document.querySelector('.container p').innerText = 'مدينة النكهات، هنا!';

    // Update first menu item
    document.querySelectorAll('.offers-items h3')[0].innerText = 'ستيك سوبريم اللذيذ';
    document.querySelectorAll('.offers-items p')[0].innerText = 'شريحة لحم مشوية مع الخضار الطازجة والمتبلة إلى حد الكمال.';
    document.querySelectorAll('.offers-items p')[1].innerHTML = '<del>$٦٠.٠٠</del> <span class="primary-text">$٢٥.٠٠</span>';

    // Update second menu item
    document.querySelectorAll('.offers-items h3')[1].innerText = 'متعة الدجاج المقرمش';
    document.querySelectorAll('.offers-items p')[2].innerText = 'أرجل الدجاج المخبوزة باللون الذهبي، متبلة بمزيجنا السري من البهارات.';
    document.querySelectorAll('.offers-items p')[3].innerHTML = '<del>$٦٠.٠٠</del> <span class="primary-text">$٣٠.٠٠</span>';

    // Update third menu item
    document.querySelectorAll('.offers-items h3')[2].innerText = 'طبق متعة المحيطات';
    document.querySelectorAll('.offers-items p')[4].innerText = 'انغمس في سيمفونية من النكهات التي تضم الجمبري والأسماك والكالاماري والاسكالوب';
    document.querySelectorAll('.offers-items p')[5].innerHTML = '<del>$٦٠.٠٠</del> <span class="primary-text">$٢٠.٠٠</span>';
    document.querySelector('.content a.btn-primary').innerText = 'اطباقنا المميزة لليوم';

}

function resetToEnglish() {
    document.body.style.direction = "ltr";
    document.querySelector('.content h1').innerHTML = 'Welcome To <span class="primary-text">YumYard</span> Restaurant';
    document.querySelector('.content p').innerText = 'Flavor town, right this way!';

    document.querySelectorAll('nav ul li a')[0].innerText = 'Home';
    document.querySelectorAll('nav ul li a')[1].innerText = 'Menu';
    document.querySelectorAll('nav ul li a')[2].innerText = 'About Us';
    document.querySelectorAll('nav ul li a')[3].innerText = 'Contact';

    document.querySelector('.container h2').innerText = 'Todays Specials';
    document.querySelector('.container p').innerText = 'Flavor town, right this way!';

    // Reset first menu item
    document.querySelectorAll('.offers-items h3')[0].innerText = 'Savory Steak Supreme';
    document.querySelectorAll('.offers-items p')[0].innerText = 'Grilled steak paired with market-fresh vegetables, seasoned to perfection.';
    document.querySelectorAll('.offers-items p')[1].innerHTML = '<del>$60.00</del> <span class="primary-text">$25.00</span>';

    // Reset second menu item
    document.querySelectorAll('.offers-items h3')[1].innerText = 'Crispy Chicken Delight';
    document.querySelectorAll('.offers-items p')[2].innerText = 'Golden-baked chicken legs, seasoned with our secret blend of spices.';
    document.querySelectorAll('.offers-items p')[3].innerHTML = '<del>$60.00</del> <span class="primary-text">$30.00</span>';

    // Reset third menu item
    document.querySelectorAll('.offers-items h3')[2].innerText = 'Oceanic Delight Platter';
    document.querySelectorAll('.offers-items p')[4].
        innerText = 'Dive into a symphony of flavors featuring shrimp, fish, calamari, and scallops';
    document.querySelectorAll('.offers-items p')[5].innerHTML = '<del>$60.00</del> <span class="primary-text">$20.00</span>';
    document.querySelector('.content a.btn-primary').innerText = 'Todays Specials';


}



/*message display function in the contact page*/

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('contactForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var alertMessage = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message;
        var confirmation = confirm(alertMessage);

        if (confirmation) {
            alert("Your message has been sent successfully!");
        } else {
            alert("Message sending canceled.");
        }
    });
});



/*Like button function in the menu page*/
document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector('.like-btn');
    const likesContainer = document.querySelector('.likes-container');

    likeButton.addEventListener('click', () => {
        let likes = parseInt(likesContainer.dataset.likes || 0) + 1;
        likesContainer.textContent = `Number of Likes: ${likes}`;
        likesContainer.dataset.likes = likes;
    });
});
