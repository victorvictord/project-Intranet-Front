<template>
     <section id="about" class="about">
        <div class="container">
            <h2 class="section-title fade-in">About Me</h2>
            <div class="about-content">
                <div class="about-image slide-in-left"></div>
                <div class="about-text slide-in-right">
                    <h3>Passionate about creating meaningful digital experiences</h3>
                    <p>With over 5 years of experience in digital design, I specialize in creating user-centered solutions that bridge the gap between functionality and aesthetics. My approach combines strategic thinking with creative execution to deliver impactful results.</p>
                    <p>I believe that great design is not just about how it looks, but how it works and how it makes people feel. Every project is an opportunity to solve problems and create connections that matter.</p>
                    <p>When I'm not designing, you'll find me exploring new technologies, sketching ideas, or seeking inspiration in nature and architecture.</p>
                    <div class="skills">
                        <span class="skill-tag">UI/UX Design</span>
                        <span class="skill-tag">Web Development</span>
                        <span class="skill-tag">Brand Identity</span>
                        <span class="skill-tag">Motion Graphics</span>
                        <span class="skill-tag">Prototyping</span>
                        <span class="skill-tag">Design Systems</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about {
            background: var(--bg-secondary);
            position: relative;
        }

        .about::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
        }

        .about-content {
            display: grid;

            grid-template-columns: 1fr 1.5fr;
            gap: 6rem;
            align-items: center;
            position: relative;
        }

        .about-image {
            width: 100%;
            height: 500px;
            background: url('images/smiling-girl-computer-desktop.jpg') center/cover;
            border-radius: 30px;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-2xl);
            transform: rotate(-2deg);
            transition: transform 0.4s ease;
        }

        .about-image:hover {
            transform: rotate(0deg) scale(1.02);
        }

        .about-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%);
            transition: opacity 0.3s ease;
        }

        .about-image:hover::before {
            opacity: 0.7;
        }

        .about-text h3 {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: var(--text-primary);
            font-weight: 500;
            line-height: 1.3;
        }

        .about-text p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            line-height: 1.8;
        }

        .skills {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 3rem;
        }

        .skill-tag {
            padding: 0.75rem 1.5rem;
            background: var(--bg-card);
            color: var(--primary-color);
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 600;
            border: 1px solid rgba(99, 102, 241, 0.2);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .skill-tag:hover {
            background: var(--primary-color);
            color: var(--text-light);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>