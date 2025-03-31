import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const setupScrollAnimations = () => {
  // Ensure the plugin is registered
  gsap.registerPlugin(ScrollTrigger);

  // Section headings animations
  const headingAnimations = gsap.utils.toArray('.section-heading').map((heading) => {
    return gsap.from(heading, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heading as Element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Skill cards animations
  const skillAnimations = gsap.utils.toArray('.skill-card').map((card, index) => {
    return gsap.from(card, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: document.getElementById('skills'),
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Timeline items animations
  const timelineAnimations = gsap.utils.toArray('.timeline-item').map((item, index) => {
    return gsap.from(item, {
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: document.getElementById('education'),
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Project cards animations
  const projectAnimations = gsap.utils.toArray('.project-card').map((card) => {
    return gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: card as Element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Return a cleanup function that will kill all animations
  return () => {
    [...headingAnimations, ...skillAnimations, ...timelineAnimations, ...projectAnimations].forEach(animation => {
      animation.kill();
    });
    
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.kill();
    });
  };
};
