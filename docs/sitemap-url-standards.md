# Sitemap & URL Standards

This document defines URL conventions, slug standards, and the complete sitemap structure for the Zigron website.

---

## 1. Global URL & Slug Rules

### Canonical Rules

| Rule                         | Example                                                   |
|------------------------------|-----------------------------------------------------------|
| Lowercase only               | `/services/iot` not `/Services/IoT`                       |
| No trailing slash            | `/about-us` not `/about-us/`                              |
| kebab-case only              | `/strategy-consulting` not `/strategyConsulting`          |
| One primary concept per slug | Avoid mixing acronyms unless industry-standard            |
| 301 redirect variants        | Redirect uppercase, trailing slash, old paths → canonical |

### Naming Conventions

| Page Type  | Convention                            | Example                               |
|------------|---------------------------------------|---------------------------------------|
| Services   | Action/service oriented (what you do) | `/services/iot/platform-cloud`        |
| Solutions  | Outcome oriented (what they get)      | `/solutions/predictive-maintenance`   |
| Industries | Industry labels (what they are)       | `/industries/manufacturing`           |

### Slug Preferences

- **Prefer natural language over abbreviations**
  - `natural-language-processing` over `nlp`
  - `machine-learning` over `ml`
  - *Exception:* `iot`, `genai`, `mlops` are standard enough.

---

## 2. Complete Sitemap

### Tier-0: Core Pages

| Path          | Page               |
|---------------|--------------------|
| `/`           | Home               |
| `/services`   | All Services Hub   |
| `/solutions`  | All Solutions Hub  |
| `/industries` | All Industries Hub |
| `/work`       | Case Studies Hub   |
| `/about-us`   | About Us           |
| `/careers`    | Careers            |
| `/contact`    | Contact            |

### Tier-0: Trust/Legal Pages

| Path                | Page             |
|---------------------|------------------|
| `/privacy-policy`   | Privacy Policy   |
| `/terms-of-service` | Terms of Service |
| `/cookie-policy`    | Cookie Policy    |

---

## 3. Services Structure

### Services Hub

`/services`

### Vertical Hubs

| Path                    | Vertical             |
|-------------------------|----------------------|
| `/services/iot`         | IoT Services         |
| `/services/ai`          | AI Services          |
| `/services/engineering` | Engineering Services |

> **Rule:** Child service pages stay under their vertical so users instantly understand scope.

---

### 3A. IoT Services

**Base:** `/services/iot`

| Path                                      | Service                 |
|-------------------------------------------|-------------------------|
| `/services/iot/strategy-consulting`       | Strategy & Advisory     |
| `/services/iot/device-firmware`           | Device & Firmware       |
| `/services/iot/oem-product-development`   | OEM Product Development |
| `/services/iot/connectivity`              | Connectivity Solutions  |
| `/services/iot/platform-cloud`            | Platform & Cloud        |
| `/services/iot/data-analytics`            | Data & Analytics        |
| `/services/iot/security-qa`               | Security & QA           |

---

### 3B. AI Services

**Base:** `/services/ai`

| Path                              | Service                  |
|-----------------------------------|--------------------------|
| `/services/ai/ml-development`     | ML & Computer Vision     |
| `/services/ai/data-engineering`   | Data Engineering         |
| `/services/ai/genai`              | Generative AI            |
| `/services/ai/mlops`              | MLOps & Model Management |
| `/services/ai/analytics`          | Analytics & BI           |
| `/services/ai/edge-ai`            | Edge AI                  |

---

### 3C. Engineering Services

**Base:** `/services/engineering`

| Path                                         | Service                  |
|----------------------------------------------|--------------------------|
| `/services/engineering/cad-design`           | CAD Design               |
| `/services/engineering/structural`           | Structural Engineering   |
| `/services/engineering/civil`                | Civil Engineering        |
| `/services/engineering/geotechnical`         | Geotechnical Engineering |
| `/services/engineering/permitting`           | Permitting & Compliance  |
| `/services/engineering/project-management`   | Project Management       |

---

## 4. Solutions

### Solutions Hub

`/solutions`

### Solution Pages

| Path                                  | Solution                |
|---------------------------------------|-------------------------|
| `/solutions/smart-energy-solar`       | Smart Energy & Solar    |
| `/solutions/predictive-maintenance`   | Predictive Maintenance  |
| `/solutions/fleet-management`         | Fleet Management        |
| `/solutions/smart-home-automation`    | Smart Home Automation   |

---

## 5. Industries

### Industries Hub

`/industries`

### Industry Pages

| Path                        | Industry                 |
|-----------------------------|--------------------------|
| `/industries/energy`        | Energy & Utilities       |
| `/industries/manufacturing` | Manufacturing            |
| `/industries/healthcare`    | Healthcare               |
| `/industries/consumer`      | Consumer Electronics     |
| `/industries/logistics`     | Logistics & Supply Chain |
| `/industries/oil-gas`       | Oil & Gas                |
| `/industries/automotive`    | Automotive               |

---

## 6. Work / Case Studies

### Work Hub

`/work`

### Case Study Pages

| Path                          | Case Study            |
|-------------------------------|-----------------------|
| `/work/terrasmart-solar`      | TerraSmart Solar      |
| `/work/terratrak-ai`          | TerraTrak AI          |
| `/work/abode-smart-home`      | Abode Smart Home      |
| `/work/medical-iot`           | Medical IoT           |
| `/work/industrial-predictive` | Industrial Predictive |
| `/work/fleet-logistics`       | Fleet Logistics       |
| `/work/smart-traffic`         | Smart Traffic         |

> **Rule:** Keep case study slugs brand-safe + descriptive; avoid versioning.

---

## 7. Redirect Map

If older planned slugs exist, redirect to the revised ones:

### IoT Redirects

| Old Path                                 | New Path                            |
|------------------------------------------|-------------------------------------|
| `/services/iot/iot-consulting-strategy`  | `/services/iot/strategy-consulting` |
| `/services/iot/security-services`        | `/services/iot/security-qa`         |
| `/services/iot/testing-qa`               | `/services/iot/security-qa`         |
| `/services/iot/platform-applications`    | `/services/iot/platform-cloud`      |

### Engineering Redirects

| Old Path                                     | New Path                             |
|----------------------------------------------|--------------------------------------|
| `/services/engineering/cad-technical-design` | `/services/engineering/cad-design`   |
| `/services/engineering/structural-analysis`  | `/services/engineering/structural`   |

---

## 8. XML Sitemap Structure

Generate the following sitemap files:

| File                       | Contents             |
|----------------------------|----------------------|
| `/sitemap.xml`             | Index file           |
| `/sitemaps/services.xml`   | All service pages    |
| `/sitemaps/solutions.xml`  | All solution pages   |
| `/sitemaps/industries.xml` | All industry pages   |
| `/sitemaps/work.xml`       | All case study pages |

---

## Summary

This structure provides:

- **Cleaner for users** - Predictable paths
- **Stronger for SEO** - Clear intent per directory, reduced duplication
- **Easier to maintain** - Consistent naming, fewer edge cases
