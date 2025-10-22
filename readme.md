Philips Sakande - Frontend Developer Portfolio
A single-page application showcasing my profile, about information, and contact form with validation. Built as part of the Frontend Wizards Stage 1 task, demonstrating skills in semantic HTML, accessibility, responsive design, and form validation.

📋 Project Overview
This project combines a profile card with multi-section navigation, featuring:

Home Section: Interactive profile card with real-time updates

About Section: Detailed information about my journey, goals, and reflections

Contact Section: Fully validated contact form with accessibility features

✨ Features
🏠 Home Section
Interactive profile card with hover effects

Real-time clock display

Social media links

Hobbies and dislikes sections

Direct navigation to About and Contact sections

👨‍💻 About Section
Personal biography and background

Goals in the frontend development program

Areas of low confidence and growth opportunities

Reflective note to future self

Extra thoughts and aspirations

📞 Contact Section
Form validation for all required fields

Real-time error messages

Success message display

Accessible form controls with ARIA labels

Responsive design for all devices

🛠 Technologies Used
HTML5: Semantic markup with proper structure

CSS3: Modern styling with CSS variables and flexbox/grid

JavaScript: Form validation and single-page navigation

Accessibility: ARIA labels, keyboard navigation, screen reader support

Responsive Design: Mobile-first approach with breakpoints

🚀 Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge)

No additional dependencies required

Installation
Clone or Download the Project

bash
# If using Git
git clone <repository-url>
Or simply download the index.html file

Open the Application

Double-click the index.html file, or

Serve it using a local server:

bash
# Using Python 3
python -m http.server 8000
# Then visit http://localhost:8000

# Using Node.js http-server
npx http-server
Navigate the Application

Use the header navigation or buttons in the profile card

Test the contact form with various inputs

Experience the responsive design on different screen sizes

📱 Usage
Navigation
Header Menu: Click on Home, About Me, or Contact in the navigation bar

Profile Card Buttons: Use "Learn More About Me" and "Get In Touch" buttons

Keyboard Navigation: Use Tab to navigate and Enter to select

Skip Link: Press Tab to access the skip link for keyboard users

Contact Form Validation
The form includes comprehensive validation:

Field	Validation Rules
Full Name	Required field
Email	Required, valid email format (e.g., philipsakande@gmail.com)
Subject	Required field
Message	Required, minimum 10 characters
Testing the Application
Form Validation Testing:

Submit empty form to see required field errors

Enter invalid email to see format validation

Try short message (less than 10 characters)

Test successful submission

Accessibility Testing:

Navigate using keyboard only (Tab, Shift+Tab, Enter)

Use screen reader to verify announcements

Test focus management and skip links

Responsive Testing:

Resize browser window or use device emulation

Test on mobile (≤480px), tablet (481px-768px), and desktop (>769px)

♿ Accessibility Features
Semantic HTML: Proper use of headings, sections, and landmarks

ARIA Attributes: Labels, descriptions, and live regions

Keyboard Navigation: Full tab navigation with focus indicators

Screen Reader Support: Accessible form labels and error messages

Color Contrast: WCAG compliant color combinations

Skip Links: Quick access to main content for keyboard users

Focus Management: Proper focus handling during navigation and form submission

🎨 Design Features
Modern UI: Clean, professional design with subtle animations

Responsive Layout: Mobile-first approach with flexible grids

Interactive Elements: Hover effects and smooth transitions

Consistent Typography: Readable font hierarchy

Color Scheme: Accessible color palette with proper contrast

📏 Validation Rules
Contact Form Requirements
✅ All fields marked with asterisk (*) are required

✅ Email must follow valid format (name@domain.com)

✅ Message must be at least 10 characters long

✅ Real-time validation with clear error messages

✅ Success message displays only after valid submission

HTML Structure
✅ Semantic elements (main, section, header, nav, footer)

✅ Proper heading hierarchy (h1, h2, h3)

✅ Accessible form labels and associations

✅ Required data-testid attributes for testing

🌐 Browser Support
✅ Chrome (latest)

✅ Firefox (latest)

✅ Safari (latest)

✅ Edge (latest)

📦 Deployment
Option 1: Netlify
Drag and drop the project folder to Netlify Drop

Or connect your GitHub repository for automatic deployments

Option 2: GitHub Pages
Push code to GitHub repository

Go to Settings → Pages

Select source branch (main/master)

Your site will be available at https://username.github.io/repository-name

Option 3: Vercel
Install Vercel CLI: npm i -g vercel

Run vercel in project directory

Follow deployment prompts

🧪 Testing
Manual Testing Checklist
Navigation between all sections works correctly

Profile card displays properly with real-time clock

Contact form validation shows appropriate error messages

Form submission shows success message

Keyboard navigation works throughout

Responsive design works on different screen sizes

All required data-testid attributes are present

Automated Testing
The project includes data-testid attributes for easy automated testing:

test-profile-card, test-user-avatar, test-user-name

test-about-page, test-about-bio, test-about-goals

test-contact-page, test-contact-name, test-contact-email

And many more for comprehensive test coverage

📝 Project Structure
text
single-page-portfolio/
├── index.html                 # Main application file
├── README.md                  # Project documentation
└── (No external dependencies - everything is self-contained)
🔧 Customization
To personalize this portfolio:

Update Personal Information:

Change name, bio, and social links in the HTML

Replace profile image URL

Update hobbies and dislikes

Modify Styling:

Update CSS variables in :root for color scheme

Adjust breakpoints in media queries

Modify animations and transitions

Extend Functionality:

Add more sections to the single-page app

Integrate with a backend for form submissions

Add dark/light theme toggle

📞 Support
For questions or issues with this project:

Check the browser console for any JavaScript errors

Verify all file paths are correct if hosting externally

Test on different browsers to identify compatibility issues

📄 License
This project is created for educational purposes as part of the Frontend Wizards program. Feel free to use and modify for personal portfolios.