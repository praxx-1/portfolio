import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Code2, Brain, Database, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Kharch - Expense Sharing Platform",
      subtitle: "Full-Stack Development",
      problem: "Managing shared expenses in groups is complex and error-prone. Friends struggle to track who paid what, and manual calculations lead to disputes. Existing solutions lack real-time settlement capabilities and intuitive group management.",
      solution: "Built a full-stack web application with secure authentication, real-time balance calculations using WebSockets, and automated settlement algorithms. Integrated React frontend with Django backend and PostgreSQL database for reliable data persistence.",
      results: ["Real-time expense tracking across multiple groups", "Automated settlement calculations reducing manual errors by 100%", "Intuitive dashboard for expense visualization"],
      tech: ["React", "Django", "PostgreSQL", "WebSockets", "Git", "Vercel"],
      impact: "01/2026",
      type: "Full-Stack"
    },
    {
      id: 2,
      title: "Intrusion Detection System (IDS)",
      subtitle: "Cybersecurity & ML",
      problem: "Network security threats are increasing exponentially. Organizations need to detect suspicious activities in real-time. Traditional rule-based systems miss novel attack patterns and generate excessive false positives.",
      solution: "Developed machine learning-based anomaly detection system that analyzes network traffic patterns. Used data preprocessing and feature engineering to identify suspicious activities. Implemented model evaluation techniques to achieve high accuracy with low false positive rates.",
      results: ["Detects suspicious network activities in real-time", "Improved threat detection accuracy through ML optimization", "Enhanced overall network security posture"],
      tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "Data Preprocessing", "Feature Engineering"],
      impact: "11/2025",
      type: "Machine Learning"
    },
    {
      id: 3,
      title: "AI Crop Disease Detection System",
      subtitle: "Computer Vision & Deep Learning",
      problem: "Farmers struggle to identify crop diseases early, leading to significant crop losses. Manual inspection is time-consuming and requires expertise. Lack of quick identification delays treatment, reducing yields.",
      solution: "Built an AI-powered computer vision system that classifies crop diseases from leaf images. Used deep learning neural networks for accurate disease identification. Integrated treatment recommendation engine to provide actionable insights.",
      results: ["Rapid disease identification from leaf images", "Accurate disease classification using neural networks", "Treatment recommendations for improved agricultural productivity"],
      tech: ["Python", "PyTorch", "Neural Networks", "Computer Vision", "Data Visualization", "Model Evaluation"],
      impact: "08/2025",
      type: "Deep Learning"
    }
  ];

  const skills = {
    "Core Competencies": ["Data Structures & Algorithms", "Problem Solving", "Analytical Thinking", "Technical Documentation"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React"],
    "Backend": ["Django", "MongoDB", "Vibe Coding", "Deployment", "Virtious"],
    "Databases & Tools": ["PostgreSQL", "SQL (CRUD, Joins, Queries)", "Git", "GitHub", "Vercel"],
    "AI/ML": ["PyTorch", "Scikit-learn", "Pandas", "Neural Networks", "Computer Vision"],
    "ML Techniques": ["Data Preprocessing", "Feature Engineering", "Model Evaluation", "Model Optimization", "Data Visualization", "Statistics"]
  };

  const education = [
    {
      degree: "B.Tech – Computer Science and Engineering (CSE)",
      institution: "Manipal University, Jaipur",
      duration: "09/2024 – Present",
      details: "CGPA: 8.1/10"
    },
    {
      degree: "High School (PCM)",
      institution: "Shree Swaminarayan Gurukul International School",
      duration: "05/2021 – 04/2023",
      details: "Percentage: 93.6%"
    }
  ];

  const achievements = [
    { title: "150 Day Streak Badge 2026", platform: "LeetCode", year: 2026 },
    { title: "50 Days Streak Badge 2025", platform: "LeetCode", year: 2025 },
    { title: "Solved 300+ DSA Problems", platform: "LeetCode & HackerRank", achievement: "Focused on efficient algorithms and complexity optimization" },
    { title: "MOCKUP 4.0 Participant", platform: "Hackathon", achievement: "Participated in competitive coding event" },
    { title: "Code Reviewer & Mentor", achievement: "Assisted peers in debugging and problem-solving approaches" }
  ];

  const themes = {
    light: {
      bg: '#faf8f5',
      textMain: '#2c2418',
      textMuted: '#8c7b66',
      textLight: '#a69580',
      accent: '#d97706',
      accentHover: '#b45309',
      glassBg: 'rgba(255, 252, 248, 0.5)',
      glassSolidBg: 'rgba(255, 252, 248, 0.6)',
      glassHoverBg: 'rgba(255, 252, 248, 0.7)',
      glassBorder: 'rgba(180, 160, 130, 0.2)',
      glassShadow: 'rgba(60, 50, 40, 0.05)',
      badgeBg: 'rgba(217, 119, 6, 0.1)',
      badgeText: '#b45309',
      badge2Bg: 'rgba(180, 83, 9, 0.1)',
      badge2Text: '#92400e',
      gradient1: 'rgba(251, 146, 60, 0.12)',
      gradient2: 'rgba(217, 119, 6, 0.1)',
    },
    dark: {
      bg: '#1a1612',
      textMain: '#f5f0e6',
      textMuted: '#b4a696',
      textLight: '#8c7b66',
      accent: '#f59e0b',
      accentHover: '#fbbf24',
      glassBg: 'rgba(44, 36, 24, 0.4)',
      glassSolidBg: 'rgba(44, 36, 24, 0.6)',
      glassHoverBg: 'rgba(44, 36, 24, 0.8)',
      glassBorder: 'rgba(180, 160, 130, 0.15)',
      glassShadow: 'rgba(0, 0, 0, 0.2)',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeText: '#fcd34d',
      badge2Bg: 'rgba(251, 146, 60, 0.15)',
      badge2Text: '#fdba74',
      gradient1: 'rgba(245, 158, 11, 0.08)',
      gradient2: 'rgba(217, 119, 6, 0.05)',
    }
  };

  const theme = isDarkMode ? themes.dark : themes.light;

  const glassStyle = {
    background: theme.glassBg,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${theme.glassBorder}`,
    boxShadow: `0 8px 32px 0 ${theme.glassShadow}`,
  };

  return (
    <div style={{ 
      backgroundColor: theme.bg,
      backgroundImage: `radial-gradient(circle at 15% 50%, ${theme.gradient1}, transparent 30%), radial-gradient(circle at 85% 30%, ${theme.gradient2}, transparent 30%)`,
      color: theme.textMain, 
      fontFamily: "'Outfit', sans-serif",
      minHeight: '100vh',
      transition: 'background-color 0.5s ease, color 0.5s ease'
    }}>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; background-color: ${theme.bg}; transition: background-color 0.5s ease; }
      `}</style>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        ...glassStyle,
        borderBottom: `1px solid ${theme.glassBorder}`,
        borderRadius: 0,
        padding: '0 2rem',
        transition: 'background-color 0.5s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px'
        }}>
          <h1 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Prakhar Narayan Sinha</h1>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#about" style={{ textDecoration: 'none', color: theme.textMuted, fontSize: '14px', fontWeight: '500' }}>About</a>
            <a href="#work" style={{ textDecoration: 'none', color: theme.textMuted, fontSize: '14px', fontWeight: '500' }}>Projects</a>
            <a href="#education" style={{ textDecoration: 'none', color: theme.textMuted, fontSize: '14px', fontWeight: '500' }}>Education</a>
            <a href="#skills" style={{ textDecoration: 'none', color: theme.textMuted, fontSize: '14px', fontWeight: '500' }}>Skills</a>
            <a href="#contact" style={{ textDecoration: 'none', color: theme.textMuted, fontSize: '14px', fontWeight: '500' }}>Contact</a>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: theme.textMain,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.glassHoverBg}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          ...glassStyle,
          borderRadius: '16px',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 0.5rem',
            position: 'relative',
            zIndex: 10
          }}>
            Prakhar Narayan Sinha
          </h1>
          <p style={{
            fontSize: '20px',
            color: theme.accent,
            margin: '0 0 1.5rem',
            position: 'relative',
            zIndex: 10,
            fontWeight: '600'
          }}>
            Full-Stack Developer & AI/ML Enthusiast
          </p>
          <p style={{
            fontSize: '16px',
            color: theme.textMuted,
            margin: '0 0 2rem',
            lineHeight: '1.6',
            position: 'relative',
            zIndex: 10,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Computer Science student at Manipal University, Jaipur. Passionate about building full-stack applications and solving problems with machine learning. 300+ DSA problems solved, continuous learner, and open to collaboration.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{ ...glassStyle, padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: theme.textMuted, margin: '0 0 0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Projects</p>
              <p style={{ fontSize: '28px', fontWeight: '700', margin: 0 }}>3+</p>
            </div>
            <div style={{ ...glassStyle, padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: theme.textMuted, margin: '0 0 0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>DSA Problems</p>
              <p style={{ fontSize: '28px', fontWeight: '700', margin: 0 }}>300+</p>
            </div>
            <div style={{ ...glassStyle, padding: '1.5rem', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: theme.textMuted, margin: '0 0 0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Achievements</p>
              <p style={{ fontSize: '28px', fontWeight: '700', margin: 0 }}>5+</p>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 10,
            flexWrap: 'wrap',
            fontSize: '13px'
          }}>
            <a href="mailto:sinhaprakhar007@gmail.com" style={{ color: theme.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
              <Mail size={16} /> sinhaprakhar007@gmail.com
            </a>
            <a href="tel:+918292887080" style={{ color: theme.textMuted, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = theme.accent} onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}>
              8292887080
            </a>
            <span style={{ color: theme.textMuted, fontWeight: '500' }}>Jaipur, India</span>
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section id="work" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          margin: '0 0 3rem',
          textAlign: 'center'
        }}>
          Featured Projects
        </h2>

        <div style={{ display: 'grid', gap: '3rem' }}>
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              style={{
                ...glassStyle,
                borderRadius: '16px',
                padding: '2.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '12px',
                      background: theme.badgeBg,
                      color: theme.badgeText,
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontWeight: '600'
                    }}>
                      {study.subtitle}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      background: theme.badge2Bg,
                      color: theme.badge2Text,
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontWeight: '600'
                    }}>
                      {study.type}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    margin: '0 0 1.5rem'
                  }}>
                    {study.title}
                  </h3>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      color: theme.textLight,
                      margin: '0 0 0.5rem',
                      fontWeight: '700',
                      letterSpacing: '0.05em'
                    }}>
                      Problem
                    </h4>
                    <p style={{
                      color: theme.textMuted,
                      lineHeight: '1.6',
                      margin: 0,
                      fontSize: '15px'
                    }}>
                      {study.problem}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      color: theme.textLight,
                      margin: '0 0 0.5rem',
                      fontWeight: '700',
                      letterSpacing: '0.05em'
                    }}>
                      Solution
                    </h4>
                    <p style={{
                      color: theme.textMuted,
                      lineHeight: '1.6',
                      margin: 0,
                      fontSize: '15px'
                    }}>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      color: theme.textLight,
                      margin: '0 0 0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.05em'
                    }}>
                      Tech Stack
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {study.tech.map(t => (
                        <span
                          key={t}
                          style={{
                            ...glassStyle,
                            background: theme.glassSolidBg,
                            fontSize: '12px',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '6px',
                            color: theme.textMuted,
                            fontWeight: '500'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{
                  ...glassStyle,
                  background: theme.glassBg,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '12px',
                    color: theme.textLight,
                    margin: '0 0 0.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    letterSpacing: '0.05em'
                  }}>
                    Key Outcomes
                  </p>
                  <ul style={{
                    margin: '1rem 0',
                    padding: 0,
                    listStyle: 'none'
                  }}>
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '14px',
                          color: theme.textMuted,
                          margin: '0.5rem 0',
                          lineHeight: '1.4'
                        }}
                      >
                        ✓ {result}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: `1px solid ${theme.glassBorder}` }}>
                    <p style={{
                      fontSize: '12px',
                      color: theme.textLight,
                      margin: '0 0 0.5rem',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      letterSpacing: '0.05em'
                    }}>
                      Duration
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: '600', margin: 0, color: theme.accent }}>
                      {study.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          margin: '0 0 2rem',
          textAlign: 'center'
        }}>
          Education
        </h2>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                ...glassStyle,
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 0.25rem' }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: '14px', color: theme.textMuted, margin: '0 0 0.5rem' }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: '13px', color: theme.textLight, margin: 0 }}>
                  {edu.details}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '13px', color: theme.textLight, margin: 0 }}>
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          margin: '0 0 2rem',
          textAlign: 'center'
        }}>
          Achievements & Awards
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              style={{
                ...glassStyle,
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <p style={{
                fontSize: '14px',
                fontWeight: '700',
                margin: '0 0 0.5rem',
                color: theme.textMain
              }}>
                {achievement.title}
              </p>
              <p style={{
                fontSize: '12px',
                color: theme.accent,
                margin: '0 0 0.5rem',
                fontWeight: '600'
              }}>
                {achievement.platform}
              </p>
              {achievement.achievement && (
                <p style={{
                  fontSize: '13px',
                  color: theme.textMuted,
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {achievement.achievement}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          margin: '0 0 3rem',
          textAlign: 'center'
        }}>
          Skills & Technologies
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem 2rem'
        }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: theme.textMuted,
                margin: '0 0 1rem',
                letterSpacing: '0.05em'
              }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {items.map(skill => (
                  <span
                    key={skill}
                    style={{
                      ...glassStyle,
                      background: theme.glassSolidBg,
                      fontSize: '13px',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      color: theme.textMain,
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          margin: '0 0 1rem'
        }}>
          Let's Connect
        </h2>
        <p style={{
          fontSize: '16px',
          color: theme.textMuted,
          margin: '0 0 2rem',
          lineHeight: '1.6'
        }}>
          Always open to interesting projects and collaboration opportunities. Feel free to reach out!
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <a href="mailto:sinhaprakhar007@gmail.com" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: theme.accent,
            color: isDarkMode ? '#1a1612' : 'white',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = theme.accentHover}
          onMouseLeave={(e) => e.currentTarget.style.background = theme.accent}
          >
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/praxx-1" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: theme.glassHoverBg,
            border: `1px solid ${theme.glassBorder}`,
            color: theme.textMain,
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 252, 248, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = theme.glassHoverBg}
          >
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/prakhar-sinha-267093291/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: theme.glassHoverBg,
            border: `1px solid ${theme.glassBorder}`,
            color: theme.textMain,
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 252, 248, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = theme.glassHoverBg}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/praxx__/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: theme.glassHoverBg,
            border: `1px solid ${theme.glassBorder}`,
            color: theme.textMain,
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 252, 248, 1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = theme.glassHoverBg}
          >
            <Code2 size={16} /> LeetCode
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${theme.glassBorder}`,
        padding: '2rem',
        textAlign: 'center',
        color: theme.textLight,
        fontSize: '13px'
      }}>
        <p style={{ margin: 0 }}>© 2024 Prakhar Narayan Sinha. All rights reserved.</p>
      </footer>
    </div>
  );
}