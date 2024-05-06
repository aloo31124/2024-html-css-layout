

const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
  const navHeight = nav.offsetHeight; // Get nav height
  const scrollTop = window.scrollY; // Get scroll position

  for (const section of sections) {
    const sectionTop = section.offsetTop; // Get section top position
    const sectionHeight = section.offsetHeight; // Get section height

    // Check if nav is within the top 10% of the section
    if (scrollTop + navHeight >= sectionTop && scrollTop < sectionTop + sectionHeight * 0.1) {
      // Nav is within the top 10% of the section
      console.log(`Nav is at the top 10% of ${section.id}`);
    }
  }
});



