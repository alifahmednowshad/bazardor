# 🛒 বাজার দর (BazarDor)

> প্রয়োজনীয় পণ্যের দাম এক নজরে — Daily market price tracker and essential commodity analytics platform for Bangladesh.

---

## 📌 Links
- **🌐 Live Demo:** https://bazarr-dor.vercel.app
- **💻 GitHub Repository:** https://github.com/alifahmednowshad/bazardor

---

## 📖 About the Project

**BazarDor (বাজার দর)** হল বাংলাদেশের দৈনন্দিন নিত্যপ্রয়োজনীয় পণ্যের (চাল, ডাল, তেল, সবজি, মাছ, মাংস ইত্যাদি) বাজার দর ট্র্যাক করার একটি আধুনিক ওয়েব অ্যাপ্লিকেশন। এর মাধ্যমে ব্যবহারকারীরা সহজে বাজারদর, দামের ওঠানামা (বৃদ্ধি বা হ্রাস) এবং বিভিন্ন বাজারভিত্তিক তথ্য দেখতে পারেন। 

প্রজেক্টটি **Next.js (App Router)**, **Tailwind CSS**, **DaisyUI**, **BetterAuth** এবং **TypeScript** ব্যবহার করে সম্পূর্ণ রেসপনসিভ ও ইউজার-ফ্রেন্ডলিভাবে তৈরি করা হয়েছে।

---

## ✨ Key Features (প্রধান ফিচারসমূহ)

1. **📊 লাইভ প্রাইস টিকার (Price Ticker Bar):** 
   - নেভবারের নিচে অবিরাম চলমান স্ট্রিপে পণ্যের নাম, দাম ও ▲/▼ শতকরা পরিবর্তন। মাউস হোভার করলে টিকারটি থেমে থাকে।
2. **📈 দাম বাড়া-কমার সেকশন (Top Risers & Fallers):** 
   - "আজ দাম বেড়েছে ▲" এবং "আজ দাম কমেছে ▼" সেকশনে শীর্ষ ৬টি করে পণ্য আলাদাভাবে প্রদর্শিত হয়।
3. **🏷️ ক্যাটাগরি ও কাস্টম শর্টিং (Category & Smart Sorting):** 
   - ক্যাটাগরি অনুযায়ী পণ্য ফিল্টারিং এবং "ডিফল্ট / দাম কম থেকে বেশি / দাম বেশি থেকে কম" অপশনে সাজানোর সুবিধা। বাংলা সংখ্যা সঠিকভাবে প্রসেস করে মান অনুযায়ী শর্টিং করা হয়।
4. **🔒 বিস্তারিত পণ্য বিশ্লেষণ (Protected Product Analytics):** 
   - সুরক্ষিত রুটে নির্দিষ্ট পণ্যের সর্বনিম্ন, সর্বাধিক ও গড় দাম এবং বিভিন্ন বাজারভিত্তিক মূল্যের সুন্দর টেবিল (শুধু লগইন করা ব্যবহারকারীদের জন্য)।
5. **🔑 নিরাপদ অথেনটিকেশন (Secure Authentication):** 
   - BetterAuth ব্যবহার করে ইমেইল-পাসওয়ার্ড এবং Social Auth (Google, GitHub) এর মাধ্যমে সাইন-ইন/সাইন-আপ ব্যবস্থা, সাথে টোস্ট নোটিফিকেশন।
6. **👤 প্রোফাইল ও তথ্য আপডেট (Profile Management):** 
   - প্রোফাইল দেখা এবং নির্দিষ্ট রুটে গিয়ে নাম ও ইউজার তথ্য আপডেট করার সুবিধা।
7. **📱 সম্পূর্ণ রেসপনসিভ ও আধুনিক UI (Responsive Design):** 
   - মোবাইল, ট্যাবলেট ও ডেস্কটপে মসৃণ লেআউট, স্কেলিটন লোডার (Skeleton Loaders) এবং কাস্টম ৪০৪ পেজ।

---

## 🛠️ Tech Stack (ব্যবহৃত প্রযুক্তি)

| বিষয় | প্রযুক্তি |
|---|---|
| **Framework** | Next.js (App Router), React |
| **Language** | TypeScript / JavaScript |
| **Styling** | Tailwind CSS, DaisyUI |
| **Authentication** | BetterAuth (Email/Password, Google, GitHub) |
| **Database** | MongoDB Atlas |
| **Icons & Toasts** | React Icons, Lucide React, react-hot-toast |
| **Typography** | Hind Siliguri, Inter |
| **Deployment** | Vercel |

---

## 📡 API Endpoints

পণ্যের ডেটা ও ক্যাটাগরি সংগ্রহের জন্য মূল API হিসেবে `https://openapi.programming-hero.com/api/bazardor` ব্যবহার করা হয়েছে:
- **All Products:** `/products`
- **Category Filter:** `/products?category={category_slug}`
- **Single Product Details:** `/products/{id}`
- **All Categories:** `/categories`

---

## 📁 Project Structure (ফোল্ডার কাঠামো)

```text
src/
├── app/          # App Router Pages & Routes
├── components/   # Reusable UI Components
└── lib/          # API Handlers & BetterAuth Setup
```

---

## 🚀 Getting Started Locally (লোকালে চালানোর নিয়ম)

১. **রেপোজিটরি ক্লোন করুন:**
```bash
git clone https://github.com/alifahmednowshad/bazardor.git
cd bazardor
```

২. **ডিপেনডেন্সি ইন্সটল করুন:**
```bash
npm install
```

৩. **এনভায়রনমেন্ট ভ্যারেয়েবল সেটআপ:**
প্রজেক্টের রুট ডিরেক্টরিতে `.env.local` ফাইল তৈরি করে নিচের ভ্যালুগুলো যোগ করুন:
```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

৪. **ডেভেলপমেন্ট সার্ভার চালু করুন:**
```bash
npm run dev
```

৫. আপনার ব্রাউজারে `http://localhost:3000` লিঙ্কে প্রবেশ করুন।

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
