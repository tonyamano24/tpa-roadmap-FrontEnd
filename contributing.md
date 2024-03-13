# Contribution

ก่อนอื่นเลย ขอขอบคุณสำหรับคนที่สนใจและอยากเป็นส่วนหนึ่งที่ช่วยกันพัฒนาให้สังคมดีขึ้น โดยทางเรามีรายละเอียดในแต่ละขั้นตอนในสำหรับผู้ที่สนใจเข้ามาช่วยกันพัฒนาดังนี้:

- [Contribution](#contribution)
  - [Environment](#environment)
  - [New Roadmaps](#new-roadmaps)
  - [Existing Roadmaps](#existing-roadmaps)
  - [Adding Content](#adding-content)
  - [Guidelines](#guidelines)

## Environment
- Development: https://tpa-roadmap-dev.pages.dev
- Production: https://roadmap.thaiprogrammer.org
- Local:
```
npm install
npm run build
wrangler pages dev ./dist
```

## New Roadmaps
สำหรับผู้ที่ต้องการสร้าง roadmaps ใหม่, ให้ทำการเปิด issue โดยมีรูปแบบโครงสร้างดังนี้ [รูปแบบโครงสร้างสำหรับสร้าง roadmap ใหม่](https://gist.github.com/kamranahmedse/98758d2c73799b3a6ce17385e4c548a5).

## Existing Roadmaps
สำหรับผู้ที่ต้องการเพิ่มเติมหรือแก้ไข roadmaps ที่มีอยู่แล้วโปรดทำตามขั้นตอนต่อไปนี้:

- **สำหรับแก้ไขคำผิด** — การแก้ไขใน [roadmap JSON file](https://github.com/ThaiProgrammer/tpa-roadmap/tree/main/src/data/roadmaps)
- **เพิ่มเติม หรือลบ Nodes** — กรุณาเปิด issue ด้วยรายละเอียดชี้แจงสิ่งที่ต้องการเพิ่มเติมหรือลบออก.

**Note:** Goal ของพวกเราไม่ต้องการ list item ที่ยิ่งใหญ่ที่สุด แต่ Goal ของพวกเราคือ list item หรือ skill ที่มีการความเกี่ยวข้องกับการทำงานอาชีพในปัจจุบันมากที่สุด

## Adding Content

Find [the content directory inside the relevant roadmap](https://github.com/ThaiProgrammer/tpa-roadmap/tree/main/src/data/roadmaps). Please keep the following guidelines in mind when submitting content:

- Content ต้องเป็นภาษาไทยเสมอ
- ใส่คำอธิบายสั้นๆ เกี่ยวกับหัวข้อที่ภายในส่วนบนของ file และlist ของ link ด้านล่าง โดยแต่ล link มีชื่อของ URL

## Guidelines

- <p><strong>การเพิ่มทุกสิ่งที่มีอยู่ ไม่ใช่ Goal! ของเรา</strong><br />
  Roadmaps เปรียบเสมือน skillset ที่มีคุณค่ามากที่สุดในปัจจะบัน, ยกตัวอย่างเช่น, หากคุณต้องการเรียนสาขาวิชาใดๆ ที่กล่าวถึงในวันนี้ คุณจะเรียนรู้อะไรบ้าง? อาจจะมีเทคโนโลยีที่ยังคงใช้กันอยู่ในปัจจุบัน แต่ควรให้ความสำคัญกับสิ่งที่ต้องการมากที่สุดในปัจจุบัน เช่น หลายคนจำนวนมากที่ใช้งาน angular.js ในปัจจุบัน แต่คุณอาจไม่ต้องการเรียนรู้มันมากกว่า React, Angular หรือ Vue ใช้ในการคิดวิเคราะห์เพื่อกรองสิ่งที่ไม่จำเป็นออกไป ให้เหตุผลว่าทำไม resource นั้นถึงควรถูกนำมาใช้งาน</p>
- <p><strong>อย่าเพิ่มสิ่งที่คุณยังไม่ได้ประเมินด้วยตัวเอง!</strong><br />
  ใช้การคิดวิเคราะห์ของคุณเพื่อกรองออกสิ่งที่ไม่จำเป็น ให้เหตุผลอย่างตรงไปตรงมาว่าทำไม resource นั้นถึงควรถูกนำมาใช้งาน คุณได้อ่านหนังสือเกี่ยวกับเรื่องนี้หรือไม่? คุณสามารถเขียนบทความสั้น ๆ ได้ไหม?</p>
- <p><strong>Create a Single Pull Request for Content Additions</strong></p>

  หากคุณกำลังวางแผนที่จะช่วย contribute เนื้อหาใน Roadmap นี้ เราขอแนะนำให้คุณทำการ clone repository, และเพิ่มเนื้อหาลงไป [folder content ของ roadmap](./src/data/roadmaps/) จากนั้นทำการสร้าง PR เพื่อที่จะทำให้ reviewer สามารถตรวจสอบและพิจารณาการ merge PR ได้ง่าย
- เขียนข้อความ commit ที่มีความหมาย
- ให้ดูที่ issues หรือ pull requests(PR) ก่อนที่จะเปิด PR ใหม่
Look at the existing issues/pull requests before opening new ones
