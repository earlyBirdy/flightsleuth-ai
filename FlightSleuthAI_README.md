# ✈️ FlightSleuth AI

An intelligent travel assistant that helps users discover the cheapest and smartest ways to fly using AI-powered flight logic, visa advice, and itinerary hacking.

---

## 🧠 Features by Plan Tier

| Feature                             | Free | Pro Traveler | Flight Hacker |
|-------------------------------------|------|---------------|----------------|
| Natural language flight search      | ✅   | ✅            | ✅              |
| Smart filters (airlines, layovers)  | ✅   | ✅            | ✅              |
| Price drop alerts                   | 🔒   | ✅            | ✅              |
| One-way + return combo builder      | 🔒   | ✅            | ✅              |
| Visa-free country recommendations   | ✅   | ✅ (personalized) | ✅ (AI-based) |
| Fare history & calendar view        | 🔒   | ✅            | ✅              |
| Hidden-city ticketing (skiplagging) | 🔒   | 🔒            | ✅              |
| Multi-city route planner            | 🔒   | 🔒            | ✅              |
| Nearby airport scanning             | 🔒   | 🔒            | ✅              |
| Lounge access tips                  | ✅   | ✅            | ✅              |

---

## 🧱 Project Structure

```
FlightSleuthAI/
├── public/
├── src/
│   ├── agents/               # AI tool management & tier logic
│   ├── components/           # React UI components
│   ├── tools/                # API logic (visa, flights, etc.)
│   ├── utils/                # Auth/tier logic
│   └── App.jsx               # Root app UI
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

---

## 🛠 Tech Stack

- React 18
- OpenAI GPT-4o (planned integration)
- Kiwi API / VisaList.io (for flight/visa data)
- Firebase/Auth (planned for user tiers)

---

## 🌍 License

MIT © 2025 FlightSleuth.ai
