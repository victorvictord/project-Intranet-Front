<template>
    <section id="contact" class="contact">
        <div class="contact-floating-shapes">
            <div class="contact-shape contact-shape-1"></div>
            <div class="contact-shape contact-shape-2"></div>
            <div class="contact-shape contact-shape-3"></div>
            <div class="contact-shape contact-shape-4"></div>
            <div class="contact-shape contact-shape-5"></div>
            <div class="contact-shape contact-shape-6"></div>
        </div>
        <div class="container">
            <div class="contact-content">
                <h2 class="section-title fade-in">Let's Work Together</h2>
                <p class="fade-in">Ready to bring your vision to life? Let's discuss how we can create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
                <form class="contact-form fade-in">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your full name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="What's this about?" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.contact {
            background: linear-gradient(135deg, #3b4cb8 0%, #4a2c65 50%, #9c35a8 100%);
            color: var(--text-light);
            position: relative;
            overflow: hidden;
        }

        .contact::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="contact-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23contact-grid)"/></svg>');
            animation: contactFloat 30s ease-in-out infinite;
            opacity: 0.6;
        }

        .contact::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
            animation: contactPulse 6s ease-in-out infinite alternate;
        }

        /* Contact Floating Shapes */
        .contact-floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .contact-shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 50%;
        }

        .contact-shape-1 {
            width: 70px;
            height: 70px;
            top: 15%;
            left: 8%;
            animation: contactFloatShape1 24s ease-in-out infinite;
        }

        .contact-shape-2 {
            width: 110px;
            height: 110px;
            top: 65%;
            right: 12%;
            background: rgba(255, 255, 255, 0.06);
            animation: contactFloatShape2 28s ease-in-out infinite reverse;
        }

        .contact-shape-3 {
            width: 55px;
            height: 55px;
            top: 25%;
            right: 30%;
            background: rgba(255, 255, 255, 0.1);
            animation: contactFloatShape3 20s ease-in-out infinite;
        }

        .contact-shape-4 {
            width: 90px;
            height: 90px;
            bottom: 20%;
            left: 18%;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            animation: contactFloatShape4 26s ease-in-out infinite;
        }

        .contact-shape-5 {
            width: 35px;
            height: 35px;
            top: 12%;
            right: 45%;
            background: rgba(255, 255, 255, 0.12);
            animation: contactFloatShape5 18s ease-in-out infinite reverse;
        }

        .contact-shape-6 {
            width: 130px;
            height: 130px;
            bottom: 12%;
            right: 8%;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 35px;
            animation: contactFloatShape6 32s ease-in-out infinite;
        }

        @keyframes contactFloatShape1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-25px) translateX(15px) rotate(90deg); }
            50% { transform: translateY(-10px) translateX(-8px) rotate(180deg); }
            75% { transform: translateY(-35px) translateX(12px) rotate(270deg); }
        }

        @keyframes contactFloatShape2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            33% { transform: translateY(20px) translateX(-15px) scale(1.05); }
            66% { transform: translateY(-15px) translateX(20px) scale(0.95); }
        }

        @keyframes contactFloatShape3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-20px) translateX(-25px) rotate(180deg); }
        }

        @keyframes contactFloatShape4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(15px) translateX(-12px) rotate(30deg); }
            50% { transform: translateY(-8px) translateX(25px) rotate(60deg); }
            75% { transform: translateY(12px) translateX(-18px) rotate(90deg); }
        }

        @keyframes contactFloatShape5 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            50% { transform: translateY(-30px) translateX(15px) scale(1.15); }
        }

        @keyframes contactFloatShape6 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-12px) translateX(8px) rotate(45deg); }
            66% { transform: translateY(8px) translateX(-20px) rotate(90deg); }
        }

        @keyframes contactFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(0.5deg); }
            66% { transform: translateY(-10px) rotate(-0.5deg); }
        }

        @keyframes contactPulse {
            0% { opacity: 0.4; }
            100% { opacity: 0.7; }
        }

        .contact-content {
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        .contact .section-title {
            color: var(--text-light);
            background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .contact-form {
            display: grid;
            gap: 2rem;
            margin-top: 3rem;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .form-group {
            display: grid;
            gap: 0.75rem;
            text-align: left;
        }

        .form-group label {
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
            padding: 1.2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-light);
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.12);
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .submit-btn {
            padding: 1.2rem 3rem;
            background: var(--gradient-primary);
            color: var(--text-light);
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin-top: 1rem;
            letter-spacing: 0.5px;
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>