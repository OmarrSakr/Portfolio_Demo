"use strict";

// & Add Class Active to header on Scroll
// كل السكاشن
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header .Links a");
const header = document.querySelector("header");

/// لما نعمل Scroll
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;//بداية السكشن وترجعلك السكشن دا بدا عندك كام 
        const sectionHeight = section.offsetHeight;
        //دا ارتفاع الصفحة كلها او السكشن دا

        // نحدد السكشن الحالي اللي المستخدم فيه
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // نحدث الكلاسات على اللينكات
    navLinks.forEach(link => {
        link.classList.remove("Active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("Active");
        }
    });
});
// ----------------------------------------------------
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
});

// ----------------------------------------------------------
const menu_btn = document.querySelector(".icon-menu");
const nav_links = document.querySelector("header nav .Links");
const close_menu = document.querySelector("header nav .Links .close-menu");

menu_btn.addEventListener("click", function () {
    nav_links.classList.toggle("active");

});

close_menu.addEventListener("click", function () {
    nav_links.classList.remove("active");

});

// يقفل المينيو عند الضغط على أي لينك
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav_links.classList.remove("active");
    })
});
// --------------------------------------------------
// السماح للفورم يرسل البيانات
// const myForm =document.getElementById("myform");

// myForm.addEventListener("submit",function(event)
// {
//     setTimeout(()=>{
//         myForm.reset();

//     },200)

// });


const form = document.getElementById("myform");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // هنا تقدر تبعت البيانات باستخدام fetch أو ajax
    fetch("https://api.sheetmonkey.io/form/76s3262kP8cAoVmCnpWEAN", {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => {
            if(response.ok)
            {
                form.reset(); // مسح الحقول
            }
            else{
                alert("❌ حصل خطأ أثناء الإرسال");
            }
        })
        .catch(error => {
            console.error(error);
        });
});
