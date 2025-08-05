<template>
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title fade-in">Featured Work</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>E-commerce Platform</h4>
                        <p>A modern, responsive e-commerce solution with focus on user experience and conversion optimization. Built with scalability and performance in mind.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Stripe</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>Brand Identity System</h4>
                        <p>Complete visual identity redesign for a tech startup, including logo, guidelines, and digital assets. Creating a cohesive brand experience across all touchpoints.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">Illustrator</span>
                            <span class="tech-tag">Photoshop</span>
                            <span class="tech-tag">Figma</span>
                            <span class="tech-tag">After Effects</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>Mobile App Design</h4>
                        <p>Intuitive mobile app interface for a fitness tracking application with focus on accessibility and user engagement through gamification.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">Figma</span>
                            <span class="tech-tag">Principle</span>
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Lottie</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>Dashboard Interface</h4>
                        <p>Clean and functional dashboard design for data analytics platform with complex information architecture and real-time data visualization.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">D3.js</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>Marketing Website</h4>
                        <p>Modern marketing website with interactive animations and optimized conversion funnels. Built for maximum performance and SEO.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">Framer Motion</span>
                            <span class="tech-tag">Tailwind CSS</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image"></div>
                    <div class="portfolio-content">
                        <h4>Creative Portfolio</h4>
                        <p>Artistic portfolio website featuring immersive galleries, smooth transitions, and creative storytelling for a digital artist.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Three.js</span>
                            <span class="tech-tag">GSAP</span>
                            <span class="tech-tag">WebGL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.portfolio {
            background: var(--bg-primary);
}

.portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
            margin-top: 2rem;
}

.portfolio-item.animate {
            transform: translateY(0);
            opacity: 1;
}

.portfolio-item:hover {
        transform: translateY(-15px);
        box-shadow: var(--shadow-2xl);
}

.portfolio-image {
            width: 100%;
            height: 180px;
            background: var(--gradient-primary);
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-position: center;
}

.portfolio-item:nth-child(1) .portfolio-image {
            background-image: url('images/working-business-women.jpg');
        }

        .portfolio-item:nth-child(2) .portfolio-image {
            background-image: url('images/computer-desk-stickers.jpg');
        }

        .portfolio-item:nth-child(3) .portfolio-image {
            background-image: url('images/curved-display-pinky-girl.jpg');
        }

        .portfolio-item:nth-child(4) .portfolio-image {
            background-image: url('images/dashboard-interfaces-transparent-displays.jpg');
        }

        .portfolio-item:nth-child(5) .portfolio-image {
            background-image: url('images/marketing-strategy-women.jpg');
        }

        .portfolio-item:nth-child(6) .portfolio-image {
            background-image: url('images/portfolio-website-girl.jpg');
        }

        .portfolio-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
            transition: all 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image::before {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.3) 100%);
        }

        .portfolio-content {
            padding: 2rem;
        }

        .portfolio-content h4 {
            font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            font-weight: 600;
        }

        .portfolio-content p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }

        .portfolio-tech {
            display: flex;
            gap: 0.75rem;
            flex-wrap: wrap;
        }

        .tech-tag {
            padding: 0.4rem 1rem;
            background: var(--bg-secondary);
            color: var(--text-secondary);
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .tech-tag:hover {
            background: var(--primary-color);
            color: var(--text-light);
        }

</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>