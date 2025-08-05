<script setup lang="ts"></script>

<template>
  <NavBar />
  <h1>Welcome!</h1>
      <section id="home" class="hero">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
        </div>
        <div class="hero-content">
            <div class="hero-subtitle">Creative Designer</div>
            <h1>Transforming Ideas Into Beautiful Experiences</h1>
            <p class="subtitle">I craft digital experiences that captivate, engage, and inspire through thoughtful design and innovative solutions</p>
            <a href="#portfolio" class="cta-button">Explore My Work</a>
        </div>
        <div class="scroll-indicator" onclick="document.getElementById('about').scrollIntoView()"></div>
    </section>
    <About />
    <LogIn />
    <Contact />
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style>
:root {
            --primary-color: #f59e0b;
            --secondary-color: #000000;
            --accent-color: #f59e0b;
            --accent-pink: #ec4899;
            --accent-cyan: #06b6d4;
            --text-primary: #0f172a;
            --text-secondary: #64748b;
            --text-light: #ffffff;
            --bg-primary: #ffffff;
            --bg-secondary: #f8fafc;
            --bg-dark: #0f172a;
            --bg-card: rgba(255, 255, 255, 0.95);
            --gradient-primary: linear-gradient(135deg, #f59e0b 0%, #b07119 100%);
            --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-tertiary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --gradient-elegant: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            --glass: rgba(255, 255, 255, 0.15);
            --glass-border: rgba(255, 255, 255, 0.2);
        }

        body {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            line-height: 1.7;
            color: var(--text-primary);
            scroll-behavior: smooth;
            overflow-x: hidden;
            background: var(--bg-primary);
        }

         .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--gradient-elegant);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            animation: float 25s ease-in-out infinite;
            opacity: 0.7;
        }

        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            animation: pulse 4s ease-in-out infinite alternate;
        }

        /* Floating Shapes */
        .floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }

        .shape-1 {
            width: 80px;
            height: 80px;
            top: 20%;
            left: 10%;
            animation: floatShape1 20s ease-in-out infinite;
        }

        .shape-2 {
            width: 120px;
            height: 120px;
            top: 60%;
            right: 15%;
            background: rgba(255, 255, 255, 0.08);
            animation: floatShape2 25s ease-in-out infinite reverse;
        }

        .shape-3 {
            width: 60px;
            height: 60px;
            top: 30%;
            right: 25%;
            background: rgba(255, 255, 255, 0.12);
            animation: floatShape3 18s ease-in-out infinite;
        }

        .shape-4 {
            width: 100px;
            height: 100px;
            bottom: 25%;
            left: 20%;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 20px;
            animation: floatShape4 22s ease-in-out infinite;
        }

        .shape-5 {
            width: 40px;
            height: 40px;
            top: 15%;
            right: 40%;
            background: rgba(255, 255, 255, 0.15);
            animation: floatShape5 16s ease-in-out infinite reverse;
        }

        .shape-6 {
            width: 140px;
            height: 140px;
            bottom: 15%;
            right: 10%;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 30px;
            animation: floatShape6 28s ease-in-out infinite;
        }

        @keyframes floatShape1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
            50% { transform: translateY(-15px) translateX(-10px) rotate(180deg); }
            75% { transform: translateY(-40px) translateX(15px) rotate(270deg); }
        }

        @keyframes floatShape2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            33% { transform: translateY(25px) translateX(-20px) scale(1.1); }
            66% { transform: translateY(-20px) translateX(25px) scale(0.9); }
        }

        @keyframes floatShape3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-25px) translateX(-30px) rotate(180deg); }
        }

        @keyframes floatShape4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(20px) translateX(-15px) rotate(45deg); }
            50% { transform: translateY(-10px) translateX(30px) rotate(90deg); }
            75% { transform: translateY(15px) translateX(-20px) rotate(135deg); }
        }

        @keyframes floatShape5 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            50% { transform: translateY(-35px) translateX(20px) scale(1.2); }
        }

        @keyframes floatShape6 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-15px) translateX(10px) rotate(60deg); }
            66% { transform: translateY(10px) translateX(-25px) rotate(120deg); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 0.8; }
        }

        .hero-content {
            text-align: center;
            color: var(--text-light);
            z-index: 2;
            position: relative;
            max-width: 900px;
            padding: 0 2rem;
        }

        .hero-subtitle {
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease 0.2s forwards;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .hero h1 {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease 0.4s forwards;
            line-height: 1.1;
            letter-spacing: -1px;
        }

        .hero .subtitle {
            font-size: 1.3rem;
            margin-bottom: 3rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease 0.6s forwards;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            display: inline-block;
            padding: 1.2rem 3rem;
            background: rgba(255, 255, 255, 0.2);
            color: var(--text-light);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            transform: translateY(30px);
            opacity: 0;
            animation: fadeInUp 1s ease 0.8s forwards;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            letter-spacing: 0.5px;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Scroll Indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 50px;
            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
            border-color: rgba(255, 255, 255, 0.9);
        }

        .scroll-indicator::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 50%;
            width: 6px;
            height: 6px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            transform: translateX(-50%);
            animation: scroll 2s infinite;
        }

        @keyframes scroll {
            0% { transform: translateX(-50%) translateY(0); opacity: 1; }
            100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
        }

        /* Section Styles */
        section {
            padding: 8rem 0;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            text-align: center;
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 3.5rem;
            font-weight: 600;
            margin-bottom: 4rem;
            background: var(--gradient-elegant);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -1px;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 4px;
            background: var(--gradient-primary);
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }

        

        @media (max-width: 1024px) {
            .portfolio-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 4rem;
            }

            .hero h1 {
                font-size: 4rem;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .mobile-menu-toggle {
                display: flex;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero .subtitle {
                font-size: 1.1rem;
            }

            .section-title {
                font-size: 2.5rem;
            }

            .portfolio-grid {
                grid-template-columns: 1fr;
            }

            .container {
                padding: 0 1.5rem;
            }

            section {
                padding: 5rem 0;
            }

            .form-row {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .about-text h3 {
                font-size: 2rem;
            }

            .skills {
                margin-top: 2rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .container {
                padding: 0 1rem;
            }
        }

</style>

<script lang="ts">
  import { defineComponent } from 'vue';
import NavBar from './component/NavBar.vue';
import About from './component/About.vue';
import Portfolio from './component/Portfolio.vue';
import Contact from './component/Contact.vue';
import LogIn from './component/LogIn.vue';
import Navbar from './component/NavBar.vue';

  export default defineComponent({
    components: {NavBar, About, Portfolio, Contact, LogIn}
  });
</script>