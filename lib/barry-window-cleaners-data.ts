export const barryBeta = {
  businessName: "Barry Window Cleaners",
  phone: "029 0000 0000",
  stats: [
    { label: "Missed calls saved", value: "12" },
    { label: "Quotes sent", value: "9" },
    { label: "Jobs booked", value: "6" },
    { label: "Deposits taken", value: "£215" },
  ],
  services: [
    {
      name: "Window Cleaning",
      description: "Regular domestic and small commercial window rounds.",
      price: "From £35",
    },
    {
      name: "Gutter Clearing",
      description: "Full-property gutter clear with photo proof where possible.",
      price: "From £85",
    },
    {
      name: "Fascia & Soffit Cleaning",
      description: "Exterior trim clean, often sold after gutter work.",
      price: "From £120",
    },
    {
      name: "Full Exterior Bundle",
      description: "Windows, gutters and fascia packaged as one visit.",
      price: "From £220",
    },
  ],
  transcript: [
    {
      speaker: "AI Assistant",
      line: "Thanks for calling Barry Window Cleaners. How can I help today?",
    },
    {
      speaker: "Customer",
      line: "Hi, I need my gutters clearing. They're overflowing after the rain.",
    },
    {
      speaker: "AI Assistant",
      line: "Got it. What's the postcode and property type?",
    },
    {
      speaker: "Customer",
      line: "CF62, it's a three-bed semi in Barry.",
    },
    {
      speaker: "AI Assistant",
      line: "Is there rear access, and do you have a conservatory?",
    },
    {
      speaker: "Customer",
      line: "Rear access is fine, no conservatory. Ideally this week.",
    },
    {
      speaker: "AI Assistant",
      line: "Perfect. I'll create a gutter clearing quote request and get Barry to send times and a price estimate.",
    },
  ],
  jobs: [
    {
      time: "08:30",
      customer: "Claire Morgan",
      service: "Window Cleaning",
      area: "Barry",
      status: "Confirmed",
      value: "£45",
      notes: "Regular monthly round.",
    },
    {
      time: "10:15",
      customer: "John Price",
      service: "Gutter Clearing",
      area: "Sully / CF62",
      status: "Needs confirmation",
      value: "£85",
      notes: "AI lead. Full property, rear access, no conservatory.",
    },
    {
      time: "13:00",
      customer: "Gareth Lewis",
      service: "Fascia & Soffit Cleaning",
      area: "Dinas Powys",
      status: "Deposit pending",
      value: "£160",
      notes: "Payment link sent.",
    },
    {
      time: "15:30",
      customer: "Helen Rees",
      service: "Quote visit",
      area: "Wenvoe",
      status: "Quote visit",
      value: "TBC",
      notes: "Access check needed before full exterior bundle.",
    },
  ],
  leads: [
    {
      name: "John Price",
      phone: "07700 900111",
      status: "New AI lead",
      service: "Gutter Clearing",
      postcode: "CF62",
      property: "3-bed semi",
      urgency: "This week",
    },
    {
      name: "Sam Iqbal",
      phone: "07700 900222",
      status: "Quote ready",
      service: "Window Cleaning",
      postcode: "CF63",
      property: "2-bed terrace",
      urgency: "Flexible",
    },
  ],
};
