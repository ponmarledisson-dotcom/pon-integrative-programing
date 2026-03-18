## ACTVITY 1 January 21,2026

# Activity Name - Landing Page Refecire – Online Shopping Landing Page

# Description

Refecire is a online shopping landing page designed to showcase featured products and promote products and such. It is intended for small online businesses, or online shoppers for them to buy and sell items through online. The landing page shows clear calls to action, product highlights, and a visually appealing layout to attract customers and encourage online shopping.

# Technologies Used

- HTML
- CSS

# Features

- Modern and clean landing page design
- Featured products section with pricing and call-to-action buttons
- Clean and user-friendly navigation layout

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used ChatGPT to help improve the structure website landing page. I used ChatGPT to help add whats missing on my HTML structure. I also used ChatGPT to give more looks on my weebsite. The code was and tested by me.

# Learning Reflection

From this activity, I learned how to make a online shoopinh landing page using HTML and CSS.I learned how the styles affected the website and how every structure matter. The most challenging part was to discover which styles to use for specific designing.

---

## ACTIVITY 2 January 26, 2026

# Activity Name - Login and Signup Pages (Multi-Page Navigation)

# Description:

This activity focuses on adding login and signup pages to the existing landing page. It allows users to navigate from the landing page to log in or create a new account, while maintaining a consistent design and layout across all pages.

# Features

- Multi-page navigation (Landing Page - Login Page - Sign Up Page)

- Consistent design and styling across all pages

- Simple and user-friendly login and signup forms

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used ChatGPT to help with the layout and styling of the login and signup pages. It assisted in improving and update the websites structure, links, and design including the login and signup page. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to connect multiple pages together using links. I understood how navigation works between landing, login, and signup pages. I also learned how important it is to keep the design consistent across all pages. The most challenging part was making sure all links worked properly and the layout looked the same on every page.

---

## ACTIVITY 3 February 2, 2026

# Activity Name - Profile and Settings pages

# Description:

This activity focuses on adding profile and settings pages to the existing website. It allows users to navigate between profile and settings pages while maintaining a consistent design and layout across all pages.

# Features

- Multi-page navigation (Landing Page - Profile Page - Settings Page)

- Consistent design and styling across all pages

- User profile display with sidebar navigation

- Settings form interface (visual only)

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used ChatGPT to help with the layout and styling of the profile and settings pages. It assisted in improving the website structure, navigation flow, and UI consistency. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to create profile and settings pages while keeping the design consistent with the rest of the website. I understood how sidebar navigation works and how to organize user information clearly. The most challenging part was arranging the layout properly and making sure everything looked clean and aligned.

---

## ACTIVITY 4 March 3, 2026

# Activity Name - Website Interactivity and Account Features

# Description:

This activity focuses on improving the website by adding basic interactivity using JavaScript. It allows users to sign up, log in, log out, and see their information on the profile page. It also allows users to update their email and address in the settings page. The goal is to make the website feel more real and interactive.

# Features

- Login and Signup form validation

- User information saved in the browser

- Profile page shows the logged-in user's name and email

- Logout button clears saved user data

- Settings page allows updating email and address

- Smooth navigation between all pages

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used ChatGPT to help me add JavaScript features such as login, signup validation, logout, and profile updates. It also helped organize the code properly. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to make a website more interactive using JavaScript. I learned how to store user information in the browser and show it on different pages. The most challenging part was making sure the information updates correctly and works across all pages.

## ACTIVITY 5 March 9, 2026

# Activity Name - Create Admin Pages

# Description

This activity focuses on adding a simple admin interface to the existing Refecire website. It allows an administrator to log in and be redirected to an Admin Dashboard, where they can view system stats, manage users, and add new user accounts. All existing pages remain fully functional.

# Features

- Admin Dashboard (admin.html) with stats overview, quick actions, and recent users table
- Manage Users page (manage-users.html) with searchable and filterable user table and delete confirmation modal
- Add User form (add-user.html) with full validation, live preview card, and success modal
- Role-based login redirect: logging in with admin@refecire.com goes to admin.html, all other users go to profile.html
- Admin pages are protected and redirect non-logged-in users to login.html and non-admins to profile.html
- User data stored and managed via localStorage
- HTML, CSS, and JavaScript are fully separated across all files.

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes
I used AI tools to help with the layout and structure of the admin pages and to fix the JavaScript bug that was preventing the login redirect from working. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to build an admin-side interface for a web application. I understood how role-based access control works using JavaScript and localStorage. I also learned how to separate HTML, CSS, and JavaScript into different files to keep the code clean and organized. The most challenging part was debugging the login redirect issue, which turned out to be caused by illegal return statements crashing the entire script silently.

# ACTIVITY 6 March 16, 2026

Project Title - Country Explorer
Description
Country Explorer is a page added to the Refecire project that uses the REST Countries API to let users search for any country in the world. When the user types a country name and clicks Search, the app fetches real data from the API and displays it as cards showing the flag, capital, population, region, subregion, currency, and languages of the matching countries.
API Used

REST Countries API (https://restcountries.com)
Free, public, no API key required, safe for GitHub Pages deployment
Returns country data in JSON format including name, flag, capital, population, region, currency, and languages

# Features

Search any country by name
Displays results as cards with the country flag image
Shows capital, population, region, subregion, currency, and languages for each result
Handles multiple results when a search matches more than one country
Loading spinner shown while the API request is in progress
Error handling for empty input, country not found, and network failures
Enter key support so users can search without clicking the button
Fully consistent with the existing Refecire design (dark blue theme, cyan accent)
HTML, CSS, and JavaScript separated into countries.html, style.css, and script.js

How to Use

Log in using any email and password (6 or more characters)
You will be redirected to the Country Explorer page automatically
Type a country name in the search box (e.g. Philippines, Japan, Brazil)
Press Enter or click the Search button
View the country cards displaying flag, capital, population, region, subregion, currency, and languages
If no country is found an error message will appear explaining what went wrong

# Challenges Encountered

Understanding how to use fetch() to call an external API and process the JSON response
Handling cases where the API returns a 404 status when a country is not found, which required checking response.status before calling response.json()
Extracting nested data from the API response such as currencies and languages which are stored as objects rather than simple strings
Making sure error messages appear clearly for all failure cases including empty input, no results, and network errors
Keeping the new page visually consistent with the rest of the Refecire project

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes
I used AI tools to help build the Country Explorer page. It helped with the fetch logic, JSON data extraction, error handling, and styling. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to integrate a public API into a web project using fetch() in JavaScript. I understood how to process JSON responses and display data dynamically on the page. I also learned how to handle different error cases such as invalid input, no results found, and network failures. The most challenging part was understanding the structure of the API response since some fields like currencies and languages were nested objects rather than simple values.
