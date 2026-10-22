/* ==========================================================
   VIVA DRIVING SCHOOL — central configuration
   Edit this file to change content. Keep commas and quotes.
   ========================================================== */
window.VIVA_CONFIG = {
  business: {
    name: "VIVA Driving School",
    phoneDisplay: "07908 969 686",
    phoneUrl: "tel:+447908969686",
    whatsappNumber: "447908969686",
    whatsappUrl: "https://wa.me/447908969686",
    instagramUrl: "https://www.instagram.com/vivadrivingschoolgb/",
    car: { model: "Red Vauxhall Corsa", registration: "GN14 VVA",
           photo: "assets/images/vauxhall-corsa.jpg",
           alt: "VIVA Driving School red Vauxhall Corsa with roof sign" },
    logo: "assets/images/viva-logo.jpg"
  },

  colors: { lime: "#b6ff00", limeSoft: "#eaffb8", green: "#2d6a3e", greenDark: "#0f3d22", sky: "#2f9bff" },

  // status: "confirmed" or "to-confirm". "to-confirm" shows an "Ask if available" tag on the site.
  services: [
    { title: "Beginner driving lessons", status: "confirmed", icon: "wheel",
      text: "Start from the very beginning with a patient, one-to-one instructor." },
    { title: "Manual driving lessons", status: "to-confirm", icon: "gear",
      text: "Learn to drive a manual car." },
    { title: "Refresher lessons", status: "confirmed", icon: "refresh",
      text: "Already hold a licence? Rebuild your confidence behind the wheel." },
    { title: "Intensive courses", status: "to-confirm", icon: "bolt",
      text: "Concentrated lessons over a short period." },
    { title: "Mock driving tests", status: "confirmed", icon: "clipboard",
      text: "Practise under test-style conditions before the real thing." },
    { title: "Practical test preparation", status: "confirmed", icon: "flag",
      text: "Focused practice for the skills the practical test looks at." }
  ],

  // price: null shows "Contact us for prices". Otherwise write e.g. "£40" and optionally detail: "per hour".
  prices: [
    { name: "Single lesson", price: null, detail: "", featured: false },
    { name: "Lesson block", price: null, detail: "", featured: true },
    { name: "Intensive course", price: null, detail: "", featured: false }
  ],
  pricesNote: "Prices are being confirmed. Call or message us for a quote.",

  areas: ["Barnet","Hendon","Mill Hill","Colindale","Edgware","Stanmore","Hampstead","Wembley","Neasden",
    "Harlesden","Willesden","Kilburn","Bushey","Pinner","Golders Green","Finchley","Muswell Hill",
    "Cricklewood","Potters Bar","Borehamwood","Wood Green","Tottenham","Watford","Chingford","Southall"],

  // Leave empty to hide the whole section and its menu link.
  // Add verified centres like: { name: "Centre name", url: "https://official-link" }
  testCentres: [],

  // name/role/bio: leave "" if not confirmed. Add more objects to add more instructors.
  instructors: [
    { name: "", role: "Your VIVA instructor", photo: "assets/images/instructor.jpg",
      alt: "VIVA Driving School instructor", bio: "" }
  ],

  // Add a photo: copy it into assets/students/ and add a line here.
  students: [
    { src: "assets/students/student-1.jpg", alt: "Student holding a practical driving test pass certificate in front of a red VIVA car" },
    { src: "assets/students/student-2.jpg", alt: "Smiling student holding a pass certificate with a red VIVA car behind" },
    { src: "assets/students/student-3.jpg", alt: "Student holding a pass certificate next to a red VIVA car" }
  ],

  faqs: [
    { q: "How do I book a lesson?", a: "Call 07908 969 686, message us on WhatsApp, or use the enquiry form on this page." },
    { q: "Does the enquiry form book my lesson?", a: "No. The form prepares a WhatsApp message for you. You must press Send in WhatsApp, and a booking is only confirmed once we reply." },
    { q: "Which areas do you cover?", a: "See the Areas We Cover section for the full list of North and North-West London areas." },
    { q: "What car will I learn in?", a: "A red Vauxhall Corsa, registration GN14 VVA." },
    { q: "How much do lessons cost?", a: "Contact us for prices. Call or message us and we will give you a quote." }
  ]
};
