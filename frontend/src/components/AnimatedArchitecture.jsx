import React from 'react';
import './AnimatedArchitecture.css';

const AnimatedArchitecture = () => {
  return (
    <div className="animated-architecture">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        className="architecture-svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(35,35,35,0.03)" strokeWidth="1"/>
          </pattern>
          
          {/* Enhanced Gradients for services */}
          <radialGradient id="route53Gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF9900" />
          </radialGradient>
          
          <radialGradient id="cloudfrontGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B47BBE" />
            <stop offset="100%" stopColor="#9D5AAE" />
          </radialGradient>
          
          <radialGradient id="s3Gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5A7FE6" />
            <stop offset="100%" stopColor="#3F48CC" />
          </radialGradient>
          
          <radialGradient id="shieldGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF9900" />
          </radialGradient>
          
          <radialGradient id="wafGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="100%" stopColor="#FF9900" />
          </radialGradient>

          <radialGradient id="userGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4AFF62" />
            <stop offset="100%" stopColor="#38FF62" />
          </radialGradient>
        </defs>

        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection Lines - Full Architecture Flow */}
        <g stroke="rgba(35,35,35,0.08)" strokeWidth="3" fill="none">
          {/* User to Route 53 */}
          <path d="M 200 540 Q 350 450 500 400" className="connection-line" />
          
          {/* Route 53 to Shield */}
          <path d="M 550 380 Q 650 350 750 380" className="connection-line" />
          
          {/* Shield to WAF */}
          <path d="M 800 400 Q 900 420 1000 400" className="connection-line" />
          
          {/* WAF to CloudFront */}
          <path d="M 1050 380 Q 1200 300 1350 350" className="connection-line" />
          
          {/* CloudFront to Edge Servers */}
          <path d="M 1400 370 Q 1500 300 1600 250" className="connection-line" />
          <path d="M 1400 370 Q 1500 370 1600 370" className="connection-line" />
          <path d="M 1400 370 Q 1500 440 1600 490" className="connection-line" />
          
          {/* CloudFront to S3 */}
          <path d="M 1350 400 Q 1400 600 1600 700" className="connection-line" />
          
          {/* Return path to User */}
          <path d="M 1600 370 Q 1200 500 800 520 Q 500 530 200 540" className="connection-line-return" />
        </g>

        {/* User/Browser - Top Left */}
        <g className="service-node user-node">
          <circle cx="200" cy="540" r="60" fill="url(#userGradient)" stroke="#2AE052" strokeWidth="4"/>
          <g transform="translate(170, 510)">
            {/* Enhanced Monitor icon */}
            <rect x="0" y="15" width="60" height="40" rx="4" fill="none" stroke="white" strokeWidth="3"/>
            <rect x="8" y="22" width="44" height="26" fill="white" opacity="0.3"/>
            <rect x="20" y="60" width="20" height="6" fill="white"/>
            <rect x="10" y="68" width="40" height="4" fill="white"/>
            {/* User icon in screen */}
            <circle cx="30" cy="32" r="4" fill="#38FF62"/>
            <path d="M 20 42 Q 30 38 40 42" stroke="#38FF62" strokeWidth="2" fill="none"/>
          </g>
          <text x="200" y="620" textAnchor="middle" className="service-label-large">USER</text>
        </g>

        {/* Route 53 - Left */}
        <g className="service-node">
          <circle cx="500" cy="400" r="65" fill="url(#route53Gradient)" stroke="#FF6600" strokeWidth="4"/>
          <g transform="translate(460, 360)">
            {/* Enhanced DNS/Globe icon */}
            <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="4"/>
            <path d="M 20 40 Q 40 20 60 40 Q 40 60 20 40" fill="none" stroke="white" strokeWidth="3"/>
            <path d="M 40 10 L 40 70 M 10 40 L 70 40" stroke="white" strokeWidth="3"/>
            <circle cx="40" cy="25" r="3" fill="white"/>
            <circle cx="40" cy="55" r="3" fill="white"/>
            <circle cx="25" cy="40" r="3" fill="white"/>
            <circle cx="55" cy="40" r="3" fill="white"/>
          </g>
          <text x="500" y="490" textAnchor="middle" className="service-label-large">ROUTE 53</text>
        </g>

        {/* AWS Shield - Left Center */}
        <g className="service-node">
          <circle cx="750" cy="400" r="60" fill="url(#shieldGradient)" stroke="#CC7700" strokeWidth="4"/>
          <g transform="translate(710, 360)">
            {/* Enhanced Shield icon */}
            <path d="M 40 10 L 60 20 L 60 50 Q 60 65 40 75 Q 20 65 20 50 L 20 20 Z" fill="white" stroke="none"/>
            <path d="M 30 35 L 35 40 L 50 25" fill="none" stroke="#FF9900" strokeWidth="4"/>
            <circle cx="40" cy="30" r="3" fill="#FF9900"/>
          </g>
          <text x="750" y="485" textAnchor="middle" className="service-label-large">AWS SHIELD</text>
        </g>

        {/* AWS WAF - Center */}
        <g className="service-node">
          <circle cx="1000" cy="400" r="60" fill="url(#wafGradient)" stroke="#E68500" strokeWidth="4"/>
          <g transform="translate(960, 360)">
            {/* Enhanced WAF/Firewall icon */}
            <rect x="10" y="15" width="60" height="50" rx="5" fill="none" stroke="white" strokeWidth="4"/>
            <path d="M 25 30 L 30 35 L 40 25 M 25 45 L 30 50 L 40 40 M 45 30 L 50 35 L 55 30" stroke="white" strokeWidth="3" fill="none"/>
            <rect x="20" y="55" width="40" height="8" fill="white"/>
          </g>
          <text x="1000" y="485" textAnchor="middle" className="service-label-large">AWS WAF</text>
        </g>

        {/* CloudFront - Right Center */}
        <g className="service-node cloudfront-main">
          <circle cx="1350" cy="370" r="70" fill="url(#cloudfrontGradient)" stroke="#7B47A3" strokeWidth="4"/>
          <g transform="translate(310, 330)">
            {/* Enhanced CloudFront icon */}
            <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="4"/>
            <circle cx="25" cy="25" r="6" fill="white"/>
            <circle cx="55" cy="25" r="6" fill="white"/>
            <circle cx="25" cy="55" r="6" fill="white"/>
            <circle cx="55" cy="55" r="6" fill="white"/>
            <circle cx="40" cy="40" r="8" fill="white"/>
            {/* Connection lines between nodes */}
            <path d="M 31 31 L 49 49 M 49 31 L 31 49" stroke="white" strokeWidth="2"/>
          </g>
          <text x="1350" y="465" textAnchor="middle" className="service-label-large">CLOUDFRONT</text>
        </g>

        {/* CloudFront Edge Servers - Right */}
        <g className="service-node edge-server">
          <rect x="1560" y="220" width="80" height="60" rx="8" fill="url(#cloudfrontGradient)" stroke="#7B47A3" strokeWidth="3"/>
          <g transform="translate(1580, 235)">
            <rect x="10" y="8" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="18" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="28" width="40" height="6" rx="2" fill="white"/>
            <circle cx="5" cy="11" r="2" fill="#38FF62"/>
            <circle cx="5" cy="21" r="2" fill="#38FF62"/>
            <circle cx="5" cy="31" r="2" fill="#38FF62"/>
          </g>
          <text x="1600" y="300" textAnchor="middle" className="service-label">EDGE 1</text>
        </g>

        <g className="service-node edge-server">
          <rect x="1560" y="340" width="80" height="60" rx="8" fill="url(#cloudfrontGradient)" stroke="#7B47A3" strokeWidth="3"/>
          <g transform="translate(1580, 355)">
            <rect x="10" y="8" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="18" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="28" width="40" height="6" rx="2" fill="white"/>
            <circle cx="5" cy="11" r="2" fill="#38FF62"/>
            <circle cx="5" cy="21" r="2" fill="#38FF62"/>
            <circle cx="5" cy="31" r="2" fill="#38FF62"/>
          </g>
          <text x="1600" y="420" textAnchor="middle" className="service-label">EDGE 2</text>
        </g>

        <g className="service-node edge-server">
          <rect x="1560" y="460" width="80" height="60" rx="8" fill="url(#cloudfrontGradient)" stroke="#7B47A3" strokeWidth="3"/>
          <g transform="translate(1580, 475)">
            <rect x="10" y="8" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="18" width="40" height="6" rx="2" fill="white"/>
            <rect x="10" y="28" width="40" height="6" rx="2" fill="white"/>
            <circle cx="5" cy="11" r="2" fill="#38FF62"/>
            <circle cx="5" cy="21" r="2" fill="#38FF62"/>
            <circle cx="5" cy="31" r="2" fill="#38FF62"/>
          </g>
          <text x="1600" y="540" textAnchor="middle" className="service-label">EDGE 3</text>
        </g>

        {/* S3 Bucket - Bottom Right */}
        <g className="service-node s3-main">
          <ellipse cx="1600" cy="700" rx="70" ry="50" fill="url(#s3Gradient)" stroke="#2E3B9B" strokeWidth="4"/>
          <g transform="translate(1550, 665)">
            {/* Enhanced S3 Bucket icon */}
            <ellipse cx="50" cy="20" rx="35" ry="15" fill="none" stroke="white" strokeWidth="4"/>
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="white" strokeWidth="4"/>
            <path d="M 15 20 L 15 50 M 85 20 L 85 50" stroke="white" strokeWidth="4"/>
            {/* Files inside bucket */}
            <rect x="30" y="30" width="15" height="8" rx="1" fill="white" opacity="0.8"/>
            <rect x="50" y="25" width="15" height="8" rx="1" fill="white" opacity="0.8"/>
            <rect x="35" y="40" width="15" height="8" rx="1" fill="white" opacity="0.8"/>
          </g>
          <text x="1600" y="770" textAnchor="middle" className="service-label-large">S3 BUCKET</text>
        </g>

        {/* Simple Animated Data Packet - S3 to User */}
        <g className="data-packets">
          <circle r="8" fill="#38FF62" className="main-packet" filter="url(#glow)">
            <animateMotion dur="6s" repeatCount="indefinite">
              <path d="M 1600 700 Q 1400 650 1200 600 Q 800 550 500 530 Q 350 535 200 540"/>
            </animateMotion>
          </circle>
          
          {/* Additional smaller packets for visual interest */}
          <circle r="4" fill="#9D5AAE" className="secondary-packet" opacity="0.7">
            <animateMotion dur="6s" repeatCount="indefinite" begin="2s">
              <path d="M 1600 700 Q 1400 650 1200 600 Q 800 550 500 530 Q 350 535 200 540"/>
            </animateMotion>
          </circle>
          
          <circle r="4" fill="#FF9900" className="secondary-packet" opacity="0.7">
            <animateMotion dur="6s" repeatCount="indefinite" begin="4s">
              <path d="M 1600 700 Q 1400 650 1200 600 Q 800 550 500 530 Q 350 535 200 540"/>
            </animateMotion>
          </circle>
        </g>

        {/* Glow effect for packets */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Subtle Performance Indicator */}
        <g className="performance-indicator" opacity="0.6">
          <rect x="50" y="50" width="300" height="100" rx="8" fill="rgba(255,255,255,0.95)" stroke="rgba(35,35,35,0.1)" strokeWidth="2"/>
          <text x="70" y="85" className="stats-title-large">LIVE PERFORMANCE</text>
          <text x="70" y="110" className="stats-text-large">⚡ Load Time: &lt; 1.2s</text>
          <text x="70" y="130" className="stats-text-large">🌍 Global CDN: 200+ edges</text>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedArchitecture;