Build Instructions for Website Recreation in Cursor Agent Mode (Cloud 3.7)

This document provides all the instructions required to recreate the website design as detailed in the “Website Design & Assets.pdf”. Every section, button, and frame is defined with precision and without any improvised elements. The components are built to be reusable and follow the exact layout and style specified.

⸻

	1.	General Guidelines

	•	Exact Replication: Recreate only the design elements shown in the PDF.
	•	Reusable Components: Define and reuse objects for headers, buttons, cards, frames, and text blocks.
	•	Consistency: Maintain consistent typography, color schemes, spacing, and layout across all sections.
	•	Responsive & Accessible: Ensure the final build is responsive and meets accessibility standards.
	•	Semantic Markup: Use semantic HTML/CSS components as per the framework requirements.

⸻

	2.	Project Initialization

// Initialize the project for Cursor Agent Mode on Cloud 3.7
init_project –name “Bloom_Website” –mode “cursor_agent” –version “3.7”

// Set global theme settings (adjust fonts, colors, etc., according to the design)
set_theme –font “Roboto, sans-serif” –primary_color “#007BFF” –secondary_color “#FFFFFF”

⸻

	3.	Section-by-Section Breakdown

3.1. Global Layout & Navigation

Header & Navigation Bar
	•	Logo: Display the company logo on the left.
	•	Navigation Items: Include:
	•	Homepage
	•	EAP
	•	Data
	•	Pricing
	•	Generic page
	•	HR Compliance
	•	Resources
	•	404
	•	Layout: Use a fixed header with precise spacing, fonts, and colors as per the design.

create_section “Header” {
add_logo “assets/logo.png” position:“left”
add_nav_links [“Homepage”, “EAP”, “Data”, “Pricing”, “Generic page”, “HR Compliance”, “Resources”, “404”]
set_layout “flex” justify:“space-between” align:“center”
}

Footer
	•	Content: Include company info, Impressum, Datenschutz – Webseite, Datenschutz – SaaS, Jobs, Resources, Customer Case Studies, Blog, and Product links.
	•	Layout: Follow the PDF exactly in terms of text order and alignment.

create_section “Footer” {
add_text_block “Company | Impressum | Datenschutz – Webseite | Datenschutz – SaaS | Jobs | Resources | Customer Case Studies | Blog | Product”
set_layout “grid” columns:1 align:“center”
}

⸻

3.2. Homepage

Hero Section
	•	Content:
	•	Title: “Employee Assistance”
	•	Description: “Konfiguriere ein individuelles EAP mit ganzheitlichen Angeboten für mentale und körperliche Gesundheit.”
	•	Button: “Mehr erfahren”
	•	Background: Use the background image/color from the PDF.
	•	Layout: Center-aligned text and frame usage as shown.

create_section “Hero” {
set_background “assets/hero-bg.jpg”
add_text “Employee Assistance” style:“h1” align:“center”
add_text “Konfiguriere ein individuelles EAP mit ganzheitlichen Angeboten für mentale und körperliche Gesundheit.” style:“paragraph” align:“center”
add_button “Mehr erfahren” style:“primary” action:“navigate_to_EAP”
}

Key Features Section
	•	Cards: Create three cards representing:
	•	Employee Assistance
	•	HR Compliance
	•	Data & Insights
	•	Each Card: Must include an icon/image, title, description, and a “Mehr erfahren” button.
	•	Layout: Arrange the cards in a grid layout as per the design.

create_section “KeyFeatures” {
for_each feature in [“Employee Assistance”, “HR Compliance”, “Data & Insights”] {
create_card feature {
add_icon “assets/icons/{feature_slug}.png”
add_text feature style:“h2”
add_text “Description text from PDF for “ + feature style:“paragraph”
add_button “Mehr erfahren” style:“secondary” action:“navigate_to_” + feature_slug
}
}
set_layout “grid” columns:3 gap:“20px”
}

Additional Content Sections
	•	Statistics & Testimonials: Include sections for performance stats (e.g., “-15 %”, “81 %”, “ROI 4:1”, “2.140 €”) and client testimonials.
	•	Layout: Use frames and text alignment exactly as shown in the PDF.

create_section “Statistics” {
add_stat “Krankheitsquote” value:”-15 %”
add_stat “Nutzerberichte” value:“81 %”
add_stat “ROI” value:“4:1”
add_stat “Kostenersparnis” value:“2.140 €”
set_layout “flex” justify:“space-around” align:“center”
}

⸻

3.3. EAP Page
	•	Content: Detailed Employee Assistance Program information.
	•	Components: Hero section (similar to Homepage but with EAP-specific text), detailed description, and “Mehr erfahren” buttons.
	•	Layout: Follow text and frame placements as per the PDF.

create_page “EAP” {
include_section “Hero_EAP” // Use EAP-specific hero text
include_section “Details” {
add_text “Konfiguriere ein individuelles EAP mit ganzheitlichen Angeboten…” style:“paragraph”
add_button “Mehr erfahren” style:“primary” action:“open_EAP_details”
}
// Additional frames for testimonials, team profiles, etc.
}

⸻

3.4. Data Page
	•	Content: Dashboard layout with charts, filters (date pickers, calendars), and data cards.
	•	Components: Filtering tools and chart frames must be created exactly as shown.
	•	Layout: Follow the grid and flex layout for dashboard components.

create_page “Data” {
include_section “FilterBar” {
add_dropdown “Zeitraum” options:[“Heute”, “Letzte 7 Tage”, “Dieser Monat”, “Letzte N Tage”]
add_calendar “DatePicker” range:“01.01.2023 - 31.12.2023”
}
include_section “Dashboard” {
add_chart “Krankheitsrate” type:“line” data_source:“data_chart.json”
add_card “Krankheitsdauer” value:“15,4 Tage”
// Additional cards and charts as per design.
}
}

⸻

3.5. Pricing Page
	•	Content: Display pricing plans (e.g., “STARTER” plan) with details on features and limits.
	•	Components: Each pricing card must include features, details, and buttons like “Demo buchen” or “Book Demo”.
	•	Layout: Arrange pricing cards in a grid format.

create_page “Pricing” {
create_pricing_card “STARTER” {
add_feature “Apps & digital Courses”
add_feature “1on1 Sessions”
add_detail “Ø Bookings per user: 3”
add_button “Demo buchen” style:“primary” action:“book_demo”
}
// Add additional pricing cards as per the design.
set_layout “grid” columns:2 gap:“30px”
}

⸻

3.6. Generic Page
	•	Purpose: A template for content pages.
	•	Components: Headline, sub-headlines, paragraphs, and optional fact blocks.
	•	Layout: Use the exact text styling and spacing from the PDF.

create_page “Generic” {
add_text “Headline 1” style:“h1”
add_text “Body content text as specified in PDF.” style:“paragraph”
add_optional_block {
add_text “Optional: Headline” style:“h2”
add_text “Optional: Fact content lorem ipsum…” style:“paragraph”
}
}

⸻

3.7. HR Compliance Page
	•	Content: Detailed instructions and frameworks for HR Compliance.
	•	Components: Step-by-step sections, compliance texts, and call-to-action buttons (“Demo buchen”).
	•	Layout: Use frames for each compliance step.

create_page “HR_Compliance” {
add_text “Die komfortable Lösung zur Erfüllung von Compliance-Anforderungen im HR-Bereich” style:“h1”
add_text “Reduziere die Komplexität von Compliance im HR-Bereich…” style:“paragraph”
add_button “Demo buchen” style:“primary” action:“book_demo”
// Additional sections for each compliance step.
}

⸻

3.8. Resources Page
	•	Content: Display blog posts, customer case studies, and resource articles.
	•	Components: Article cards with title, date, excerpt, and “Artikel lesen” buttons.
	•	Layout: Use grid layouts and include filters for date and categories.

create_page “Resources” {
create_filter_bar {
add_dropdown “Nach Zeit” options:[“Heute”, “Letzte 7 Tage”, “Dieser Monat”, “Letzte N Tage”]
}
for_each article in resource_articles {
create_article_card {
add_title article.title
add_date article.date
add_excerpt article.excerpt
add_button “Artikel lesen” style:“secondary” action:“open_article”
}
}
set_layout “grid” columns:3 gap:“20px”
}

⸻

3.9. 404 Page
	•	Content: Custom error message and navigation to return home.
	•	Text: “Diese Seite existiert leider nicht. Falls du das für einen Fehler hältst, melde dich bei uns!”
	•	Button: “Zurück zu Home”

create_page “404” {
add_text “Diese Seite existiert leider nicht. Falls du das für einen Fehler hältst, melde dich bei uns!” style:“h1” align:“center”
add_button “Zurück zu Home” style:“primary” action:“navigate_home”
set_layout “centered”
}

⸻

	4.	Reusable Component Definitions

4.1. Buttons
	•	Styles: Define reusable styles for primary, secondary, and tertiary buttons.
	•	Properties: Set colors, border-radius, padding, and hover effects as per the design.

define_component “Button” {
properties: {
primary: { background: “#007BFF”, font: “Roboto”, border_radius: “5px”, padding: “10px 20px” },
secondary: { background: “#FFFFFF”, font: “Roboto”, border: “1px solid #007BFF”, border_radius: “5px”, padding: “10px 20px” }
}
}

4.2. Cards & Frames
	•	Cards: Used for features, testimonials, and pricing. Must have consistent margins, padding, and border styling.
	•	Frames/Sections: Wrap each section with fixed layout, spacing, and alignment.

define_component “Card” {
properties: {
padding: “20px”,
margin: “10px”,
border: “1px solid #ddd”,
border_radius: “5px”,
shadow: “none”
}
}

4.3. Text Blocks
	•	Headings & Paragraphs: Use the exact font sizes, weights, and colors as specified.
	•	Components: Define components for headlines (h1, h2, etc.) and body text.

define_component “TextBlock” {
properties: {
h1: { font_size: “36px”, font_weight: “bold” },
p: { font_size: “16px”, line_height: “1.5” }
}
}

⸻

	5.	Final Assembly and Testing
	6.	Assemble All Pages: Combine the Homepage, EAP, Data, Pricing, Generic, HR Compliance, Resources, and 404 pages into the full website structure.
	7.	Ensure Reusability: Verify that all components (buttons, cards, text blocks) are defined once and reused consistently.
	8.	Test Responsiveness & Accessibility: Ensure the layout adapts correctly to different screen sizes and meets accessibility standards.
	9.	Export & Save Configuration: Save the project configuration to allow future updates and reuse.

⸻

	6.	Conclusion

Use the above instructions in Cursor Agent Mode on Cloud 3.7 to perfectly recreate the website design as provided in the PDF. Every component and section has been defined explicitly to ensure exact replication and reusability. Adjust asset paths, texts, and any style details as necessary to match the final design.