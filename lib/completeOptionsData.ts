export const betaStats = [
  { label: "Live jobs", value: "18", detail: "+4 booked by AI today" },
  { label: "Open quotes", value: "£24,680", detail: "7 awaiting customer approval" },
  { label: "Missed calls saved", value: "31", detail: "AI captured 92% this week" },
  { label: "Revenue pipeline", value: "£61,420", detail: "Next 30 days forecast" },
];

export const jobs = [
  {
    id: "CO-1048",
    customer: "Helen Morgan",
    title: "Kitchen extension quote",
    status: "Booked",
    value: "£18,500",
    priority: "High",
    address: "Saltash Road, Plymouth",
    date: "Today, 14:30",
    source: "AI Call Helper",
    notes: "Customer asked for initial site visit and rough timescale."
  },
  {
    id: "CO-1049",
    customer: "Mark Davies",
    title: "Bathroom refit follow-up",
    status: "Quote sent",
    value: "£7,850",
    priority: "Medium",
    address: "St Budeaux, Plymouth",
    date: "Tomorrow, 09:00",
    source: "Website form",
    notes: "Customer wants finance options and earliest start date."
  },
  {
    id: "CO-1050",
    customer: "Priya Shah",
    title: "Garage conversion survey",
    status: "Awaiting photos",
    value: "£13,200",
    priority: "Medium",
    address: "Ivybridge",
    date: "Friday, 11:15",
    source: "AI Webchat",
    notes: "AI requested photos of existing garage and access."
  },
  {
    id: "CO-1051",
    customer: "Gareth Williams",
    title: "Roofline repair",
    status: "Assigned",
    value: "£1,250",
    priority: "Urgent",
    address: "Crownhill, Plymouth",
    date: "Today, 16:00",
    source: "Missed call",
    notes: "Water ingress near upstairs bedroom. Needs fast response."
  }
];

export const customers = [
  {
    name: "Helen Morgan",
    phone: "07700 900181",
    email: "helen.morgan@example.com",
    tag: "Hot lead",
    lastContact: "AI call today",
    value: "£18,500"
  },
  {
    name: "Mark Davies",
    phone: "07700 900244",
    email: "mark.davies@example.com",
    tag: "Quote sent",
    lastContact: "SMS follow-up sent",
    value: "£7,850"
  },
  {
    name: "Priya Shah",
    phone: "07700 900387",
    email: "priya.shah@example.com",
    tag: "Needs photos",
    lastContact: "Webchat yesterday",
    value: "£13,200"
  },
  {
    name: "Gareth Williams",
    phone: "07700 900455",
    email: "gareth.williams@example.com",
    tag: "Urgent",
    lastContact: "Missed call saved",
    value: "£1,250"
  }
];

export const quotes = [
  {
    ref: "Q-2201",
    customer: "Helen Morgan",
    title: "Kitchen extension initial estimate",
    amount: "£18,500",
    status: "Draft ready",
    updated: "12 mins ago"
  },
  {
    ref: "Q-2198",
    customer: "Mark Davies",
    title: "Bathroom refit",
    amount: "£7,850",
    status: "Sent",
    updated: "2 hours ago"
  },
  {
    ref: "Q-2195",
    customer: "Priya Shah",
    title: "Garage conversion",
    amount: "£13,200",
    status: "Waiting on photos",
    updated: "Yesterday"
  }
];

export const aiCalls = [
  {
    caller: "Helen Morgan",
    time: "Today, 10:42",
    outcome: "Booked site visit",
    transcript: [
      "Customer called after seeing Complete Options on Google.",
      "AI captured job type, address, budget range and preferred visit time.",
      "AI explained that a real person will confirm the survey before arrival."
    ]
  },
  {
    caller: "Gareth Williams",
    time: "Today, 08:18",
    outcome: "Urgent job flagged",
    transcript: [
      "Customer reported water coming through upstairs ceiling.",
      "AI marked the job as urgent and requested photos by SMS.",
      "Job added to dashboard and assigned for same-day callback."
    ]
  },
  {
    caller: "Priya Shah",
    time: "Yesterday, 17:06",
    outcome: "Photos requested",
    transcript: [
      "Customer asked about converting a garage into a small office.",
      "AI gathered measurements, access details and parking notes.",
      "Customer sent a portal link to upload photos."
    ]
  }
];

export const marketingTasks = [
  {
    title: "Send quote follow-up",
    channel: "SMS",
    target: "7 open quotes",
    status: "Ready"
  },
  {
    title: "Request review",
    channel: "Email",
    target: "5 completed jobs",
    status: "Scheduled"
  },
  {
    title: "Local Facebook post",
    channel: "Social",
    target: "Plymouth homeowners",
    status: "Draft"
  },
  {
    title: "Dormant lead nudge",
    channel: "SMS",
    target: "12 cold leads",
    status: "Ready"
  }
];

export const jobFinderLeads = [
  {
    source: "Planning portal",
    title: "Single-storey extension enquiry",
    area: "Plympton",
    estimate: "£22k - £35k",
    confidence: "High"
  },
  {
    source: "Local search",
    title: "Bathroom installer needed",
    area: "Devonport",
    estimate: "£5k - £9k",
    confidence: "Medium"
  },
  {
    source: "Facebook group",
    title: "Garage conversion advice",
    area: "Ivybridge",
    estimate: "£12k - £18k",
    confidence: "Medium"
  }
];

export const calendarItems = [
  {
    time: "09:00",
    title: "Bathroom refit survey",
    customer: "Mark Davies",
    location: "St Budeaux"
  },
  {
    time: "11:15",
    title: "Garage conversion call",
    customer: "Priya Shah",
    location: "Phone"
  },
  {
    time: "14:30",
    title: "Kitchen extension site visit",
    customer: "Helen Morgan",
    location: "Saltash Road"
  },
  {
    time: "16:00",
    title: "Roofline emergency check",
    customer: "Gareth Williams",
    location: "Crownhill"
  }
];
