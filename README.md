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

---

## ACTIVITY 5 March 9, 2026

# Activity Name - Create Admin Pages

# Description

This activity focuses on adding a simple admin interface to the existing Refecire website. It allows an administrator to log in and be redirected to an Admin Dashboard, where they can view system stats, manage users, and add new user accounts. All existing pages remain fully functional.

# Features

- Admin Dashboard (admin.html) with stats overview, quick actions, and recent users table
- Manage Users page (manage-users.html) with searchable and filterable user table and delete confirmation modal
- Add User form (add-user.html) with full validation, live preview card, and success modal
- Role-based login redirect: logging in with admin@refecire.com goes to admin.html, all other users go to gadgets.html
- Admin pages are protected and redirect non-logged-in users to login.html and non-admins to profile.html
- User data stored and managed via localStorage
- HTML, CSS, and JavaScript are fully separated across all files

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used AI tools to help with the layout and structure of the admin pages and to fix the JavaScript bug that was preventing the login redirect from working. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to build an admin-side interface for a web application. I understood how role-based access control works using JavaScript and localStorage. I also learned how to separate HTML, CSS, and JavaScript into different files to keep the code clean and organized. The most challenging part was debugging the login redirect issue, which turned out to be caused by illegal return statements crashing the entire script silently.

---

## ACTIVITY 6 March 16, 2026

# Project Title - Gadget Shop

# Description

Gadget Shop is a page added to the Refecire project that uses the DummyJSON API to let users search for gadgets by keyword. After logging in, users are redirected to the Gadget Shop page where they can search for specific items like Laptop, Phone, Headphones, Watch, and more. Results are displayed as product cards with images, prices, and ratings. Users can also save their favorite gadgets using the Save Gadget feature.

# API Used

- DummyJSON Products API (https://dummyjson.com/products/search?q=KEYWORD)
- Free, public, no API key required, safe for GitHub Pages deployment
- Supports real keyword search and returns product data in JSON format including title, price, category, thumbnail, and rating

# Features

- Search any gadget by keyword (e.g. Laptop, Phone, Headphones, Watch, Tablet, Camera)
- Quick shortcut buttons for common searches
- Product cards show image, category, title, star rating, and price
- Save Gadget button saves the product to localStorage
- Saved button updates immediately and is disabled to prevent duplicates
- Toast notification confirms when a gadget is saved or when a duplicate is attempted
- Saved Gadgets page (saved-gadgets.html) displays all saved products
- Remove button on each saved card to delete individual entries
- Clear All button to remove all saved gadgets at once
- Empty state shown when no gadgets are saved
- Data persists after page refresh using localStorage
- Error handling for empty input and failed API requests

# How to Use

1. Log in using any email and password (6 or more characters)
2. You will be redirected to the Gadget Shop page automatically
3. Type a gadget name in the search box or click a quick search button
4. View the product cards with image, price, and rating
5. Click Save Gadget to save a product
6. Click Saved in the navbar to view all saved gadgets
7. Click Remove to delete a saved item or Clear All to remove everything

# Challenges Encountered

- Finding a public API that supports real keyword search without requiring an API key
- Processing the JSON response from DummyJSON which wraps results in a products array
- Preventing duplicate saves by checking the existing localStorage array by product id
- Making save buttons reflect their saved state correctly when cards are rendered

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used AI tools to help build the Gadget Shop page. It helped with the fetch logic, product card rendering, search functionality, and the localStorage save feature. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned how to integrate a public API into a web project using fetch() in JavaScript. I understood how to process JSON responses and display data dynamically on the page. I also learned how to persist saved data using localStorage so it survives page refreshes. The most challenging part was finding the right API that was free, public, and supported keyword search without needing any private keys.

---

## ACTIVITY 7 March 23, 2026

# Activity Name - API Refinement Activity

# Project Purpose

Refecire is an online gadget shopping website where users can browse, search, and save electronics products such as phones, laptops, and tablets after logging in.

# API Used

- DummyJSON Products API (https://dummyjson.com/products/search?q=KEYWORD)
- Free, public, no API key required, safe for GitHub Pages deployment

# Justification

The DummyJSON Products API belongs in this website because it provides real electronics product data including brand names, prices, images, ratings, warranty information, and shipping details — which are all directly useful for an online gadget shop. Without this API, the shop would have no real product data to display, making it a relevant and necessary integration for the website's purpose.

# Integration

The API data is displayed in the UI as product cards. Each card shows the following useful information retrieved from the API:

- Product image and title
- Brand name
- Category (smartphones, laptops, tablets, mobile-accessories)
- Star rating and price
- Discount percentage
- Short product description
- Stock availability
- Warranty information
- Shipping information

Users can search by brand name (e.g. Samsung, Apple, Sony, OPPO, Huawei) or by product type (e.g. iPhone, Laptop, Tablet). Results are filtered to electronics categories only so no unrelated products appear. A second API call is made per product to fetch full details since the search endpoint only returns basic fields.

# Features Added

- Product cards now show full specs including brand, description, discount, stock, warranty, and shipping
- Search refined to electronics-only categories (laptops, smartphones, tablets, mobile-accessories)
- Quick brand shortcut buttons added (Samsung, Apple, Sony, OPPO, Huawei, iPhone, Laptop, Tablet)
- Two-step fetch process: search for results then fetch full product details for each item

# AI Assistance Disclosure (Required)

Did you use AI tools? Yes

I used AI tools to help refine the API integration and update the product cards to display full product details. All code was reviewed, edited, and tested by me.

# Learning Reflection

From this activity, I learned the importance of choosing an API that is actually relevant to what my website does. I also learned that different API endpoints return different amounts of data and that a search endpoint may not return all fields, which required making a second fetch call to get the full product details. The most challenging part was understanding why the specs were not showing and realizing the search endpoint was returning limited data compared to the individual product endpoint.
