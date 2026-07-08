"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./enquiry-hero.css";
import { CourseDataType } from "@/data/inner-data/InnerCourseData";
import { EnquiryFormContainer } from "@/components/homes/home-one/EnquiryForm";
import BrochurePopup from "@/components/common/BrochurePopup";

interface EnquiryHeroProps {
  course: CourseDataType;
}

// Logo arrays for the scrollers. We duplicate the content to ensure seamless loop.
const TOOLS_ROW_1 = [
  { name: "WordPress", icon: "fab fa-wordpress" },
  { name: "Shopify", icon: "fab fa-shopify" },
  { name: "Google Ads", icon: "fab fa-google" },
  { name: "Facebook Ads", icon: "fab fa-facebook-square" },
  { name: "Instagram", icon: "fab fa-instagram" },
  { name: "Canva", icon: "fas fa-palette" },
  { name: "Mailchimp", icon: "fab fa-mailchimp" },
  { name: "SEMrush", icon: "fas fa-search" },
];

const TOOLS_ROW_2 = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "React", icon: "fab fa-react" },
  { name: "ChatGPT AI", icon: "fas fa-robot" },
  { name: "Elementor", icon: "fas fa-crop" },
  { name: "WhatsApp", icon: "fab fa-whatsapp" },
];

const TOOLS_ROW_3 = [
  { name: "SEO", icon: "fas fa-search-plus" },
  { name: "Google Analytics", icon: "fas fa-chart-line" },
  { name: "LinkedIn Ads", icon: "fab fa-linkedin" },
  { name: "Photoshop", icon: "fas fa-image" },
  { name: "Illustrator", icon: "fas fa-pen-nib" },
  { name: "WooCommerce", icon: "fas fa-shopping-cart" },
  { name: "HubSpot", icon: "fas fa-bullseye" },
  { name: "Hootsuite", icon: "fas fa-paper-plane" },
];

export default function EnquiryHero({ course }: EnquiryHeroProps) {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const displayCategory = course.category || "Certification";
  const displayPhone = course.phone || "+91 86521 99991";

  // Duplicate arrays to make standard infinite scroller work nicely
  const row1Items = [...TOOLS_ROW_1, ...TOOLS_ROW_1, ...TOOLS_ROW_1];
  const row2Items = [...TOOLS_ROW_2, ...TOOLS_ROW_2, ...TOOLS_ROW_2];
  const row3Items = [...TOOLS_ROW_3, ...TOOLS_ROW_3, ...TOOLS_ROW_3];

  return (
    <>
      <div className="enquiry-page__wrapper">
        
        {/* Simple inline breadcrumb on white background */}
        <div className="enquiry-breadcrumb">
          <Link href="/">Home</Link> &gt; <Link href="/courses">Courses</Link> &gt; <span>{course.title}</span>
        </div>

        {/* Hero Section Container */}
        <section className="enquiry-hero__card">
          <div className="enquiry-hero__grid">
            
            {/* Left side: Course Information */}
            <div className="enquiry-hero__content">
              <div className="enquiry-hero__tag-group">
                <span className="enquiry-hero__tag-popular">Popular</span>
                <span className="enquiry-hero__tag-category">{displayCategory}</span>
              </div>
              
              <h1 className="enquiry-hero__title">
                {course.title}
              </h1>
              
              <p className="enquiry-hero__desc">
                {course.desc || "Learn professional skills with expert mentorship and recognized certification."}
              </p>
              
              {/* 3 info stats */}
              <div className="enquiry-hero__stats">
                <div className="enquiry-hero__stat-item">
                  <div className="enquiry-hero__stat-label">Duration</div>
                  <div className="enquiry-hero__stat-value">{course.duration || "3 Months"}</div>
                </div>
                
                <div className="enquiry-hero__stat-item">
                  <div className="enquiry-hero__stat-label">Mode</div>
                  <div className="enquiry-hero__stat-value">{course.mode || "Offline"}</div>
                </div>
                
                <div className="enquiry-hero__stat-item">
                  <div className="enquiry-hero__stat-label">Pricing</div>
                  <div className="enquiry-hero__stat-value">
                    ₹{Number(course.price || 0).toLocaleString("en-IN")}
                    <span className="emi-tag">EMI Options Available</span>
                  </div>
                </div>
              </div>
              
              {/* Brochure CTA & Contact info */}
              <div className="enquiry-hero__actions">
                <button 
                  onClick={() => setBrochureOpen(true)}
                  className="enquiry-hero__btn-brochure"
                >
                  <i className="fas fa-download"></i> Download Brochure
                </button>
              </div>
              
              <div className="enquiry-hero__call-info">
                <span>For enquiries call: </span>
                <a href={`tel:${displayPhone.replace(/\s+/g, "")}`}>
                  <i className="fas fa-phone-alt"></i> {displayPhone}
                </a>
              </div>
            </div>
            
            {/* Right side: Enquiry Form (Original colors and styling) */}
            <div className="enquiry-hero__form-wrapper">
              <EnquiryFormContainer defaultProgram={course.title} />
            </div>

          </div>
        </section>

        {/* Tools Logo Slider Section */}
        <section className="tools-slider__section">
          <h3 className="tools-slider__title">Tools &amp; Technologies You Will Learn</h3>
          
          <div className="tools-slider__container">
            {/* Row 1: Left to right animation */}
            <div className="tools-slider__row tools-row-1">
              <div className="tools-slider__track-left">
                {row1Items.map((item, idx) => (
                  <div className="tools-slider__item" key={`row1-${idx}`}>
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right to left animation */}
            <div className="tools-slider__row tools-row-2">
              <div className="tools-slider__track-right">
                {row2Items.map((item, idx) => (
                  <div className="tools-slider__item" key={`row2-${idx}`}>
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Left to right animation (Mobile Only) */}
            <div className="tools-slider__row tools-row-3">
              <div className="tools-slider__track-left">
                {row3Items.map((item, idx) => (
                  <div className="tools-slider__item" key={`row3-${idx}`}>
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Brochure Popup Modal */}
      <BrochurePopup isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </>
  );
}
