<template>
    <section id="logIn" class="login">
        <div class="login-floating-shapes">
            <div class="login-shape login-shape-1"></div>
            <div class="login-shape login-shape-2"></div>
            <div class="login-shape login-shape-3"></div>
            <div class="login-shape login-shape-4"></div>
            <div class="login-shape login-shape-5"></div>
            <div class="login-shape login-shape-6"></div>
        </div>
        <div class="container">
            <div class="login-content">
                <h2 class="section-title fade-in">Log-In</h2>
                <p class="fade-in">Ready to bring your vision to life? Let's discuss how we can create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
                <form class="login-form fade-in">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Username</label>
                            <input type="text" id="name" name="name" placeholder="Your full name" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subject">Password</label>
                        <input type="password" id="subject" name="subject" placeholder="What's this about?" required>
                    </div>
                    <button type="submit" class="submit-btn">Enter</button>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.login {
            background: var(--bg-primary);
            color: #000;
        }

        .login::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="login-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23login-grid)"/></svg>');
            animation: loginFloat 30s ease-in-out infinite;
            opacity: 0.6;
        }

        .login::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
            animation: loginPulse 6s ease-in-out infinite alternate;
        }

        /* login Floating Shapes */
        .login-floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .login-shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 50%;
        }

        .login-shape-1 {
            width: 70px;
            height: 70px;
            top: 15%;
            left: 8%;
            animation: loginFloatShape1 24s ease-in-out infinite;
        }

        .login-shape-2 {
            width: 110px;
            height: 110px;
            top: 65%;
            right: 12%;
            background: rgba(255, 255, 255, 0.06);
            animation: loginFloatShape2 28s ease-in-out infinite reverse;
        }

        .login-shape-3 {
            width: 55px;
            height: 55px;
            top: 25%;
            right: 30%;
            background: rgba(255, 255, 255, 0.1);
            animation: loginFloatShape3 20s ease-in-out infinite;
        }

        .login-shape-4 {
            width: 90px;
            height: 90px;
            bottom: 20%;
            left: 18%;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            animation: loginFloatShape4 26s ease-in-out infinite;
        }

        .login-shape-5 {
            width: 35px;
            height: 35px;
            top: 12%;
            right: 45%;
            background: rgba(255, 255, 255, 0.12);
            animation: loginFloatShape5 18s ease-in-out infinite reverse;
        }

        .login-shape-6 {
            width: 130px;
            height: 130px;
            bottom: 12%;
            right: 8%;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 35px;
            animation: loginFloatShape6 32s ease-in-out infinite;
        }

        @keyframes loginFloatShape1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-25px) translateX(15px) rotate(90deg); }
            50% { transform: translateY(-10px) translateX(-8px) rotate(180deg); }
            75% { transform: translateY(-35px) translateX(12px) rotate(270deg); }
        }

        @keyframes loginFloatShape2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            33% { transform: translateY(20px) translateX(-15px) scale(1.05); }
            66% { transform: translateY(-15px) translateX(20px) scale(0.95); }
        }

        @keyframes loginFloatShape3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-20px) translateX(-25px) rotate(180deg); }
        }

        @keyframes loginFloatShape4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(15px) translateX(-12px) rotate(30deg); }
            50% { transform: translateY(-8px) translateX(25px) rotate(60deg); }
            75% { transform: translateY(12px) translateX(-18px) rotate(90deg); }
        }

        @keyframes loginFloatShape5 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            50% { transform: translateY(-30px) translateX(15px) scale(1.15); }
        }

        @keyframes loginFloatShape6 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-12px) translateX(8px) rotate(45deg); }
            66% { transform: translateY(8px) translateX(-20px) rotate(90deg); }
        }

        @keyframes loginFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(0.5deg); }
            66% { transform: translateY(-10px) rotate(-0.5deg); }
        }

        @keyframes loginPulse {
            0% { opacity: 0.4; }
            100% { opacity: 0.7; }
        }

        .login-content {
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        .login .section-title {
            color:#000;
            background: linear-gradient(135deg, #0b0b0b 0%, #abadaf 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .login-form {
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
            color: rgba(0, 0, 0, 0.9);
            font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
            padding: 1.2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-primary);
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
            border-color: var(--text-primary);
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