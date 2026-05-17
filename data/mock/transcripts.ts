export const callTranscripts = [
  {
    id: "TRANSCRIPT-001",
    type: "Booked Job",
    intentScore: 94,
    outcome: "Emergency boiler repair booked",
    estimatedValue: "£240",
    transcript: [
      {
        speaker: "AI",
        text: "Hi, you’re through to TradeConnect AI for Evans Heating. I can help book a job or arrange a callback. What do you need help with today?"
      },
      {
        speaker: "Customer",
        text: "My boiler has stopped working and there’s no heating at all."
      },
      {
        speaker: "AI",
        text: "I’m sorry to hear that. Is there any smell of gas or visible leak?"
      },
      {
        speaker: "Customer",
        text: "No gas smell, just no heating or hot water."
      },
      {
        speaker: "AI",
        text: "Understood. What postcode is the property?"
      },
      {
        speaker: "Customer",
        text: "CF14 2AA."
      },
      {
        speaker: "AI",
        text: "Thank you. An engineer is available today between 2PM and 4PM. The standard emergency diagnostic visit is £95. Would you like me to secure that slot?"
      },
      {
        speaker: "Customer",
        text: "Yes please."
      },
      {
        speaker: "AI",
        text: "Perfect. Your booking has been confirmed and the engineer has been notified."
      }
    ]
  },

  {
    id: "TRANSCRIPT-002",
    type: "Tyre Kicker Filtered",
    intentScore: 18,
    outcome: "Rejected low-intent caller",
    estimatedValue: "£0",
    transcript: [
      {
        speaker: "AI",
        text: "Hi, you’re through to TradeConnect AI. What can I help you with today?"
      },
      {
        speaker: "Customer",
        text: "Yeah mate how much to fit a bathroom?"
      },
      {
        speaker: "AI",
        text: "I can help with that. What size bathroom and what work is required?"
      },
      {
        speaker: "Customer",
        text: "Just rough price."
      },
      {
        speaker: "AI",
        text: "Prices vary depending on layout, plumbing, materials, and access. Would you like a free survey booked?"
      },
      {
        speaker: "Customer",
        text: "Nah just wanted cheapest quote."
      },
      {
        speaker: "AI",
        text: "Understood. For accurate pricing, a survey is required. Thank you for calling."
      }
    ]
  },

  {
    id: "TRANSCRIPT-003",
    type: "High Value Commercial",
    intentScore: 97,
    outcome: "Commercial survey booked",
    estimatedValue: "£8,000 - £15,000",
    transcript: [
      {
        speaker: "AI",
        text: "Welcome to TradeConnect AI commercial services. How can I help today?"
      },
      {
        speaker: "Customer",
        text: "We manage a retail unit in Cardiff and need a full electrical inspection."
      },
      {
        speaker: "AI",
        text: "Certainly. Approximately how large is the premises?"
      },
      {
        speaker: "Customer",
        text: "About 14,000 square feet."
      },
      {
        speaker: "AI",
        text: "Thank you. This would require a commercial survey. What is your preferred timeframe?"
      },
      {
        speaker: "Customer",
        text: "Within the next week ideally."
      },
      {
        speaker: "AI",
        text: "Understood. I’ve reserved a commercial assessment slot for Thursday at 10AM pending confirmation from the contracts manager."
      }
    ]
  },

  {
    id: "TRANSCRIPT-004",
    type: "Elderly Assistance",
    intentScore: 89,
    outcome: "Priority plumbing visit booked",
    estimatedValue: "£160",
    transcript: [
      {
        speaker: "AI",
        text: "Hello, you’re through to the booking assistant. What can I help you with today?"
      },
      {
        speaker: "Customer",
        text: "I’m elderly dear and my kitchen tap won’t stop leaking."
      },
      {
        speaker: "AI",
        text: "I’m sorry you’re dealing with that. Is the leak causing flooding at the moment?"
      },
      {
        speaker: "Customer",
        text: "No flooding but it’s getting worse."
      },
      {
        speaker: "AI",
        text: "I understand. I’ll mark this as a priority visit and arrange the next available engineer for you."
      },
      {
        speaker: "Customer",
        text: "Thank you love."
      },
      {
        speaker: "AI",
        text: "You’re very welcome. Your booking has now been confirmed."
      }
    ]
  },

  {
    id: "TRANSCRIPT-005",
    type: "Out Of Area",
    intentScore: 32,
    outcome: "Outside service region",
    estimatedValue: "£0",
    transcript: [
      {
        speaker: "AI",
        text: "Hi, what service do you require today?"
      },
      {
        speaker: "Customer",
        text: "Need roof repairs."
      },
      {
        speaker: "AI",
        text: "Certainly. What postcode is the property?"
      },
      {
        speaker: "Customer",
        text: "LS12."
      },
      {
        speaker: "AI",
        text: "Thank you. Unfortunately that location is currently outside the engineer coverage area."
      },
      {
        speaker: "Customer",
        text: "Alright no worries."
      },
      {
        speaker: "AI",
        text: "Thank you for calling TradeConnect AI."
      }
    ]
  }
];
