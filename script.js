// Smooth Scrolling for Navigation Links
const smoothScrollLinks = document.querySelectorAll('nav ul li a');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Check if the target is a section on the same page (scrolling behavior)
        if (targetSection) {
            e.preventDefault(); // Prevent default if it's a scrollable section on the same page
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for header height
                behavior: 'smooth',
            });
        }
        // Allow normal link behavior for other cases (e.g., navigating to another page)
    });
});

// FAQ Toggle (expand/collapse answers)
const faqItems = document.querySelectorAll('.faq-list .faq');

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active'); // Toggle the 'active' class for expanding/collapsing
        const answer = faq.querySelector('p');
        if (faq.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand
        } else {
            answer.style.maxHeight = 0; // Collapse
        }
    });
});

// Contact Form Validation
const form = document.querySelector('.contact-form form');
const submitButton = form.querySelector('button');

form.addEventListener('submit', (e) => {
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    
    // Basic validation check
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields before submitting.');
    }
});
// Project details data
const projects = [
    {
        title: 'Modern Office Building',
        description: 'This modern office building features cutting-edge architecture, incorporating sustainable and energy-efficient design elements. Located in the heart of New York City, this building provides state-of-the-art office spaces for businesses, with smart systems, green technologies, and luxury amenities.',
        location: 'New York, USA',
        date: 'March 2024',
        image: 'https://amazingarchitecture.com/storage/7/4.jpg',
    },
    {
        title: 'Residential Complex',
        description: 'This luxurious residential complex offers 200 high-end apartments with stunning views of London. Designed to provide comfort and convenience, the complex includes top-tier amenities such as a fitness center, a swimming pool, a garden, and underground parking. The modern design blends seamlessly with the surrounding environment.',
        location: 'London, UK',
        date: 'December 2023',
        image: 'https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?cs=srgb&dl=pexels-pixabay-258160.jpg&fm=jpg',
    },
    {
        title: 'Luxury Hotel',
        description: 'This five-star hotel in Dubai offers guests an exclusive and luxurious experience, with a panoramic view of the Arabian Gulf. Equipped with world-class amenities, the hotel boasts gourmet dining options, a spa, and private villas. The design combines opulence with modern aesthetics, offering guests the ultimate getaway.',
        location: 'Dubai, UAE',
        date: 'July 2025',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7hRDgUfHFOhAho2qZ2c3wvUuWR51ff7ohg&s',
    },
    {
        title: 'Luxury Hotel Resort',
        description: 'Located in Paris, this luxury resort provides an unparalleled experience of relaxation and recreation. Offering bespoke services, the resort includes an expansive spa, multiple fine-dining restaurants, and a private golf course. Guests can enjoy personalized services and world-class leisure facilities, making it an ideal destination for relaxation and business.',
        location: 'Paris, France',
        date: 'November 2025',
        image: 'https://www.visa.com.jm/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-1600x900.jpg',
    }
];

// Function to view project details
function viewProjectDetails(projectId) {
    const project = projects[projectId - 1];
    // Hide the project list and show the details page
    document.getElementById('projects').style.display = 'none';
    document.getElementById('projectDetails').style.display = 'block';

    // Populate project details
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectLocation').textContent = project.location;
    document.getElementById('projectDate').textContent = project.date;
}

// Function to go back to project list
function goBack() {
    document.getElementById('projects').style.display = 'block';
    document.getElementById('projectDetails').style.display = 'none';
}

// const faqItems = document.querySelectorAll('.faq'); // Duplicate declaration removed

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active'); // Adds/removes 'active' class
    });
});
