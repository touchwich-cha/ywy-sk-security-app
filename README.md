# 🛡️ ระบบรักษาความปลอดภัย YWY

ระบบรายงานตัว ตรวจรถ แจ้งเหตุ ตรวจคน  
บริษัท หยั่น หว่อ หยุ่น จำกัด

---

## 📁 โครงสร้างไฟล์

```
security_YWY/
├── index.html      ← UI หลัก (PWA)
├── manifest.json   ← PWA manifest + icon
├── sw.js           ← Service Worker (ติดตั้งบนมือถือได้)
├── icon-192.png    ← App icon ขนาดเล็ก
├── icon-512.png    ← App icon ขนาดใหญ่
├── vercel.json     ← Vercel config
└── README.md       ← คู่มือนี้
```

---

## 🚀 วิธี Deploy บน Vercel (ผ่าน GitHub)

### ขั้นตอนที่ 1: อัปโหลดขึ้น GitHub

1. ไปที่ [github.com](https://github.com) → สร้าง repository ใหม่ ชื่อ `security_YWY`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repository
   - ลาก & วาง (drag & drop) ทุกไฟล์ได้เลย
   - กด **Commit changes**

### ขั้นตอนที่ 2: เชื่อมต่อ Vercel

1. ไปที่ [vercel.com](https://vercel.com) → Login ด้วย GitHub
2. กด **"Add New Project"**
3. เลือก repository `security_YWY`
4. ตั้งค่า:
   - **Framework Preset**: `Other`
   - **Root Directory**: `/` (ปล่อยว่าง)
   - **Build Command**: (ว่าง)
   - **Output Directory**: (ว่าง)
5. กด **Deploy** 🎉

### ขั้นตอนที่ 3: ได้ URL สำหรับแชร์

หลัง Deploy สำเร็จ Vercel จะให้ URL เช่น:  
`https://security-ywy.vercel.app`

---

## 📱 วิธีติดตั้งเป็น App บนมือถือ

### iPhone / iPad (iOS)
1. เปิด URL ใน **Safari**
2. กดปุ่ม **Share** (กล่องมีลูกศรขึ้น)
3. เลือก **"Add to Home Screen"**
4. กด **"Add"**

### Android
1. เปิด URL ใน **Chrome**
2. Chrome จะแสดง popup **"Add to Home Screen"** อัตโนมัติ
3. หรือกด Menu (3 จุด) → **"Install App"**

---

## ⚙️ การตั้งค่าระบบ

### GAS Web App URL
```
https://script.google.com/macros/s/AKfycbzFWEHv0eTeZkhl4Du7YU-QQ1JcRKJcwOp-n-8ph5HgDN40kGCgOBs1-N4HjNW9oH_biA/exec
```

### Google Spreadsheet ID
```
13gw2766WBU2Q7-Xu9g-FoGmBqF_L_-v_BJLXrvfyGoc
```

### รหัสผ่านหน้ารายงาน
```
8888
```

---

## 🔧 แก้ไขข้อมูลบริษัท

หากต้องการเปลี่ยนพิกัดบริษัท แก้ไขใน `index.html`:
```js
const CORP_LAT = 13.543618879345196;  // ละติจูด
const CORP_LNG = 100.24213617791229;  // ลองจิจูด
const RADIUS_M = 300;                  // รัศมี (เมตร)
```

---

## ✅ Checklist ก่อน Deploy

- [ ] ไฟล์ครบทุกไฟล์ใน repository
- [ ] `vercel.json` อยู่ใน root ของ repository
- [ ] ทดสอบเปิดบนมือถือ Chrome/Safari
- [ ] ทดสอบติดตั้งเป็น App (Add to Home Screen)
- [ ] ทดสอบรายงานตัว / บันทึกรถ

---

*ระบบพัฒนาสำหรับ บริษัท หยั่น หว่อ หยุ่น จำกัด*
