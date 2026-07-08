# Snap Capture — Event Scheduler 📸

A full-stack **event booking and scheduling platform** for a photography business, built with React, Node.js/Express, and MySQL. Customers can browse wedding/event packages, check date availability, book events, and pay online; admins can manage packages, bookings, billing, and a photo gallery from a dedicated dashboard..

## Features

**Customer**
- Browse wedding/event packages and package details
- Check event date availability and book events
- Register/login with OTP email verification
- Online payment via Stripe checkout
- View event billing and booking history
- Browse a photo gallery
- Contact and About pages

**Admin**
- Dashboard overview of bookings and events
- Add/manage events and event packages (with package details/pricing)
- Add/manage bookings and event billing (advance, part-payment, and full-payment flows)
- Manage the photo gallery
- View registered user details

## Tech Stack

- **Frontend:** React, React Router, React Bootstrap, React Datepicker, Axios, Stripe Checkout
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Other:** Multer (image uploads), Nodemailer (OTP emails), Stripe (payments)

## Project Structure

```
snap-capture-event-scheduler/
├── frontend/           # React app (customer pages, admin views, components)
│   ├── src/pages/      # Home, Gallery, Cart, Event billing/list, Login, etc.
│   ├── src/admin/      # Admin dashboard, event/package/billing management
│   └── src/components/ # Navbar, Footer
├── backend/            # Express API server
│   ├── server.js       # API routes (auth, events, packages, billing, uploads)
│   └── images1/        # Uploaded event/gallery images
└── manam.sql           # Database schema (events, packages, bookings, billing, users)
```

## Getting Started

### Prerequisites
- Node.js and npm
- MySQL

### Backend
```bash
cd backend
npm install
```
Create a MySQL database, import the schema:
```bash
mysql -u root -p your_database_name < manam.sql
```
Set your database, Stripe, and email credentials as environment variables (do **not** hard-code secrets in `server.js`), then start the server:
```bash
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```
The app runs by default at `http://localhost:3000` and expects the backend API to be running.

## License

This project is available for educational and personal use.
