# QiuNews

A simple News Portal website built with Laravel, React (Inertia.js), and DaisyUI for practice purposes.

## Features
- News listing and creation
- Responsive and user-friendly UI with DaisyUI components
- Backend built with Laravel for API and business logic
- Frontend using React with Inertia.js for a seamless single-page application (SPA) experience

## Installation

### Prerequisites
Ensure you have the following installed:
- PHP 8.x
- Composer
- Node.js & npm
- MySQL
- Laravel CLI

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd QiuNews
   ```

2. **Install dependencies:**
   ```bash
   composer install
   npm install
   ```

3. **Configure environment:**
   - Copy `.env.example` to `.env`
   - Set database credentials and other environment variables

4. **Generate application key:**
   ```bash
   php artisan key:generate
   ```

5. **Run migrations:**
   ```bash
   php artisan migrate
   ```

6. **Build frontend assets:**
   ```bash
   npm run dev
   ```

7. **Start the development server:**
   ```bash
   php artisan serve
   ```

## Usage
- Visit `http://localhost:8000` to access the application.
- Use the dashboard to manage news posts.

## Tech Stack
- **Backend:** Laravel
- **Frontend:** React with Inertia.js
- **Styling:** DaisyUI

## License
This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments
- [Laravel](https://laravel.com)
- [React](https://reactjs.org)
- [Inertia.js](https://inertiajs.com)
- [DaisyUI](https://daisyui.com)

