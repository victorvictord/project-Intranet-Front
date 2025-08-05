<template>
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo">Landing Page</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#logIn">LogIn</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="mobile-menu-toggle" id="mobileMenuToggle">
                <div class="hamburger"></div>
                <div class="hamburger"></div>
                <div class="hamburger"></div>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <ul class="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#logIn">LogIn</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>

<style scoped>

 nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        nav.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: var(--shadow-lg);
            padding: 0.75rem 0;
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 1.75rem;
            font-weight: 700;
            background: var(--gradient-elegant);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.5px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-primary);
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            padding: 0.5rem 0;
        }

        .nav-links a:hover {
            color: var(--primary-color);
            transform: translateY(-1px);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background: var(--gradient-primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: translateX(-50%);
            border-radius: 1px;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Mobile Menu */
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1001;
        }

        .hamburger {
            width: 25px;
            height: 3px;
            background: var(--text-primary);
            margin: 3px 0;
            transition: all 0.3s ease;
            border-radius: 1px;
        }

        .mobile-menu-toggle.active .hamburger:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .mobile-menu-toggle.active .hamburger:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-toggle.active .hamburger:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
        }

        .mobile-menu.active {
            right: 0;
        }

        .mobile-nav-links {
            list-style: none;
            text-align: center;
        }

        .mobile-nav-links li {
            margin: 2rem 0;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu.active .mobile-nav-links li {
            opacity: 1;
            transform: translateY(0);
        }

        .mobile-menu.active .mobile-nav-links li:nth-child(1) { transition-delay: 0.1s; }
        .mobile-menu.active .mobile-nav-links li:nth-child(2) { transition-delay: 0.2s; }
        .mobile-menu.active .mobile-nav-links li:nth-child(3) { transition-delay: 0.3s; }
        .mobile-menu.active .mobile-nav-links li:nth-child(4) { transition-delay: 0.4s; }

        .mobile-nav-links a {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 2.5rem;
            font-weight: 500;
            color: var(--text-light);
            text-decoration: none;
            transition: all 0.3s ease;
            background: var(--gradient-elegant);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .mobile-nav-links a:hover {
            transform: scale(1.05);
        }
</style>