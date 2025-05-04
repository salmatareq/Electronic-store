document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");

      const answer = question.nextElementSibling;

      if (question.classList.contains("active")) {
        answer.classList.add("show");
      } else {
        answer.classList.remove("show");
      }

      faqQuestions.forEach((otherQuestion) => {
        if (
          otherQuestion !== question &&
          otherQuestion.classList.contains("active")
        ) {
          otherQuestion.classList.remove("active");
          otherQuestion.nextElementSibling.classList.remove("show");
        }
      });
    });
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });

  const helpForm = document.getElementById("helpForm");
  if (helpForm) {
    helpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector("#name").value;
      const email = this.querySelector("#email").value;
      const subject = this.querySelector("#subject").value;
      const message = this.querySelector("#message").value;

      alert(
        `Thank you, ${name}! Your message about "${subject}" has been received. We'll contact you at ${email} soon.`
      );

      this.reset();
    });
  }
});
