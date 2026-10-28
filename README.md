# 🛒 বাজার দর (BazarDor)

প্রয়োজনীয় পণ্যের দাম এক নজরে। চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের দাম, দামের পরিবর্তন এবং বাজারভিত্তিক তুলনা এক জায়গায় দেখার একটি ওয়েব অ্যাপ।

🔗 **Live:** https://bazarr-dor.vercel.app
💻 **GitHub:** https://github.com/alifahmednowshad/bazardor

---

## ✨ প্রধান ফিচার

1. **লাইভ প্রাইস টিকার:** নেভবারের নিচে অবিরাম চলমান স্ট্রিপে পণ্যের নাম, দাম ও ▲/▼ পরিবর্তন। মাউস রাখলে থামে।
2. **দাম বাড়া-কমার সেকশন:** আজ সবচেয়ে বেশি দাম বাড়া ও কমা ৬টি করে পণ্য আলাদাভাবে দেখায়।
3. **ক্যাটাগরি পেজ ও সাজানো:** ক্যাটাগরি অনুযায়ী পণ্য, সাথে "ডিফল্ট / দাম কম থেকে বেশি / বেশি থেকে কম" সাজান। বাংলা অঙ্ক নয়, সংখ্যার মান ধরে সাজানো হয়।
4. **পণ্যের বিস্তারিত পেজ (সুরক্ষিত):** সর্বনিম্ন, সর্বাধিক ও গড় দাম এবং বিভিন্ন বাজারের দামের টেবিল। শুধু লগইন করা ব্যবহারকারী দেখতে পারেন।
5. **অথেনটিকেশন:** ইমেইল-পাসওয়ার্ড, Google ও GitHub দিয়ে সাইন ইন/সাইন আপ, টোস্ট বার্তাসহ।
6. **প্রোফাইল ও তথ্য আপডেট:** নিজের তথ্য দেখা ও আলাদা পেজে নাম বদলানো।
7. **সম্পূর্ণ রেসপনসিভ:** মোবাইল, ট্যাবলেট ও ডেস্কটপে সমান ব্যবহারযোগ্য।
8. **স্কেলিটন লোডিং ও ৪০৪ পেজ:** ডেটা আসার সময় স্কেলিটন, ভুল ঠিকানায় বন্ধুত্বপূর্ণ বার্তা।

## 🛠️ ব্যবহৃত প্রযুক্তি

| বিষয় | প্রযুক্তি |
|---|---|
| ফ্রেমওয়ার্ক | Next.js (App Router), React, TypeScript |
| স্টাইলিং | Tailwind CSS, DaisyUI |
| অথেনটিকেশন | BetterAuth (Email/Password, Google, GitHub) |
| ডাটাবেস | MongoDB Atlas |
| টোস্ট ও আইকন | react-hot-toast, react-icons |
| ফন্ট | Hind Siliguri, Inter |
| ডিপ্লয় | Vercel |

## 🚀 লোকালে চালানোর নিয়ম

```bash
git clone https://github.com/alifahmednowshad/bazardor.git
cd bazardor
npm install
```

প্রজেক্টের রুটে `.env.local` ফাইল বানিয়ে এগুলো দিন:

```
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

তারপর:

```bash
npm run dev
```

ব্রাউজারে `http://localhost:3000` খুলুন।

## 📡 API

দামের ডেটা আসে `https://openapi.programming-hero.com/api/bazardor` থেকে (`/products`, `/categories`)।

## 📁 ফোল্ডার কাঠামো

```
src/
├── app/          # পেজ ও রুট (home, category, product, signin, signup, my-profile)
├── components/   # UI কম্পোনেন্ট (Header, Hero, products, auth, profile)
└── lib/          # API, অথেনটিকেশন ও সহায়ক ফাংশন
```