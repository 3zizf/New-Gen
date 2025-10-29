document.addEventListener("DOMContentLoaded", function() {
    var collapsibles = document.querySelectorAll(".collapsible-trigger");

    collapsibles.forEach(function(coll) {
        // جعل العنوان قابلاً للضغط (أفضل للوصول)
        coll.setAttribute("role", "button");
        coll.setAttribute("tabindex", "0");
        
        // إعداد المحتوى ليكون مخفياً
        var content = coll.nextElementSibling;
        content.style.maxHeight = null;
        coll.setAttribute("aria-expanded", "false");

        // وظيفة الضغط
        var clickHandler = function() {
            this.classList.toggle("active");
            var icon = this.querySelector(".toggle-icon");

            if (content.style.maxHeight) {
                // إذا كان مفتوحاً، أغلقه
                content.style.maxHeight = null;
                if (icon) icon.textContent = "+";
                this.setAttribute("aria-expanded", "false");
            } else {
                // إذا كان مغلقاً، افتحه
                content.style.maxHeight = content.scrollHeight + "px";
                if (icon) icon.textContent = "−"; // علامة ناقص
                this.setAttribute("aria-expanded", "true");
            }
        };

        coll.addEventListener("click", clickHandler);
        
        // تفعيل الزر عند الضغط على Enter (للوصولية)
        coll.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                clickHandler.call(this);
            }
        });
    });
});