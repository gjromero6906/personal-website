import { renderProjects,renderError } from './fetch-helpers.js';
import { getProjects } from './dom-helpers.js';

const loadProjects = async () => {
  console.log("LOADING PROJECTS...");

  const { data, error } = await getProjects();

  console.log(data, error);

  if (error) return renderError(error.message);

  renderProjects(data);
};
loadProjects();
const form = document.getElementById('contactForm');
const thankYouMsg = document.getElementById('thankYouMsg');

form.addEventListener('submit', async function(e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    try {
        await fetch("https://formspree.io/f/xaqovkjy", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        thankYouMsg.textContent = "💚💚💚Thank you! Your message has been sent.💚💚💚";
        thankYouMsg.classList.add("show");
        form.reset();

        setTimeout(() => {
            thankYouMsg.classList.remove("show");
        }, 5000);

    } catch (error) {
        thankYouMsg.textContent = "❌❌❌Oops! Something went wrong.❌❌❌";
        thankYouMsg.classList.add("show");
    }
});