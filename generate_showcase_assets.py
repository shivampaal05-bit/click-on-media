import os

out_dir = r"C:\Users\Lenovo\OneDrive\Desktop\click on media\public\assets\showcase"
os.makedirs(out_dir, exist_ok=True)

# 1. Doctor Website SVG (Teal & Sky Blue Healthcare Theme)
doctor_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="docBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdfa"/>
      <stop offset="100%" stop-color="#e0f2fe"/>
    </linearGradient>
    <linearGradient id="docNav" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <filter id="docShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0369a1" flood-opacity="0.1"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#docBg)"/>

  <!-- Top Clinic Bar -->
  <rect x="0" y="0" width="800" height="52" fill="#ffffff"/>
  <line x1="0" y1="52" x2="800" y2="52" stroke="#bae6fd" stroke-width="1.5"/>
  <circle cx="36" cy="26" r="14" fill="#0284c7"/>
  <path d="M36 18 v16 M28 26 h16" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <text x="60" y="32" font-family="Segoe UI, sans-serif" font-size="15" font-weight="800" fill="#002d62">NOVA HEALTH CLINIC</text>
  <text x="450" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#475569">Treatments</text>
  <text x="545" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#475569">Doctor Profile</text>
  <text x="645" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#475569">OPD Hours</text>
  <rect x="715" y="14" width="70" height="24" rx="12" fill="#0284c7"/>
  <text x="750" y="30" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Book Visit</text>

  <!-- Left Hero Banner -->
  <rect x="30" y="74" width="440" height="376" rx="14" fill="#ffffff" filter="url(#docShadow)" stroke="#bae6fd" stroke-width="1.5"/>
  <rect x="50" y="96" width="130" height="22" rx="11" fill="#e0f2fe"/>
  <text x="115" y="111" font-family="Segoe UI, sans-serif" font-size="10" font-weight="800" fill="#0284c7" text-anchor="middle">CLINICAL SPECIALIST</text>
  <text x="50" y="148" font-family="Segoe UI, sans-serif" font-size="23" font-weight="800" fill="#002d62">Dr. Aditi Singh</text>
  <text x="50" y="170" font-family="Segoe UI, sans-serif" font-size="12" font-weight="700" fill="#0ea5e9">MBBS, MS (OBG) — Senior IVF &amp; Fertility Specialist</text>
  <text x="50" y="196" font-family="Segoe UI, sans-serif" font-size="12" fill="#475569">8+ Years of Reproductive Medicine &amp; Women Care.</text>
  <text x="50" y="214" font-family="Segoe UI, sans-serif" font-size="12" fill="#475569">Trusted clinical expertise with over 12,000+ happy families.</text>

  <!-- Checkpoints -->
  <circle cx="60" cy="250" r="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <path d="M57 250 l2 2 l4 -4" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="76" y="254" font-family="Segoe UI, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Parenthood Guidance &amp; Advanced IVF Lab</text>

  <circle cx="60" cy="280" r="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <path d="M57 280 l2 2 l4 -4" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="76" y="284" font-family="Segoe UI, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Laparoscopy, Ultrasound &amp; Fetal Monitoring</text>

  <circle cx="60" cy="310" r="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <path d="M57 310 l2 2 l4 -4" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="76" y="314" font-family="Segoe UI, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Direct WhatsApp OPD &amp; Digital Lab Reports</text>

  <rect x="50" y="350" width="180" height="42" rx="10" fill="url(#docNav)"/>
  <text x="140" y="376" font-family="Segoe UI, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Book Consultation →</text>

  <!-- Right Visual Card -->
  <rect x="490" y="74" width="280" height="376" rx="14" fill="#ffffff" filter="url(#docShadow)" stroke="#bae6fd" stroke-width="1.5"/>
  <rect x="490" y="74" width="280" height="190" rx="14" fill="#e0f2fe"/>
  <circle cx="630" cy="155" r="46" fill="#bae6fd"/>
  <circle cx="630" cy="140" r="22" fill="#0284c7"/>
  <path d="M592 195 a38 38 0 0 1 76 0" fill="#0284c7"/>
  <rect x="618" y="150" width="24" height="48" fill="#ffffff" rx="4"/>
  <path d="M630 158 v20 M622 168 h16" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>

  <!-- Stats -->
  <rect x="508" y="280" width="116" height="60" rx="8" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1"/>
  <text x="566" y="304" font-family="Segoe UI, sans-serif" font-size="18" font-weight="800" fill="#0d9488" text-anchor="middle">98.4%</text>
  <text x="566" y="322" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Success Rate</text>

  <rect x="636" y="280" width="116" height="60" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="694" y="304" font-family="Segoe UI, sans-serif" font-size="18" font-weight="800" fill="#2563eb" text-anchor="middle">12,500+</text>
  <text x="694" y="322" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Patients Cared</text>

  <rect x="508" y="355" width="244" height="68" rx="8" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
  <text x="526" y="380" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#991b1b">Clinic Timings (Gorakhpur)</text>
  <text x="526" y="400" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#475569">Mon - Sat: 10:00 AM - 6:00 PM</text>
</svg>"""

# 2. Mental Health Website SVG (Lavender & Soft Violet Therapy Theme)
mental_health_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="psyBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#faf5ff"/>
      <stop offset="100%" stop-color="#f3e8ff"/>
    </linearGradient>
    <linearGradient id="psyBtn" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="psyShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#7c3aed" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#psyBg)"/>

  <!-- Top Navigation Bar -->
  <rect x="0" y="0" width="800" height="52" fill="#ffffff"/>
  <line x1="0" y1="52" x2="800" y2="52" stroke="#e9d5ff" stroke-width="1.5"/>
  <circle cx="36" cy="26" r="14" fill="#7c3aed"/>
  <!-- Zen Lotus / Mind Icon -->
  <path d="M36 17 c-5 6 -6 12 0 17 c6 -5 5 -11 0 -17 Z" fill="#ffffff"/>
  <text x="60" y="32" font-family="Segoe UI, sans-serif" font-size="15" font-weight="800" fill="#4c1d95">THESAMANWAY THERAPIES</text>
  <text x="440" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#6b7280">Therapy Sessions</text>
  <text x="560" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#6b7280">Counselors</text>
  <text x="650" y="32" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#6b7280">Assessments</text>
  <rect x="715" y="14" width="70" height="24" rx="12" fill="#7c3aed"/>
  <text x="750" y="30" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Book Call</text>

  <!-- Left Main Content -->
  <rect x="30" y="74" width="460" height="376" rx="14" fill="#ffffff" filter="url(#psyShadow)" stroke="#e9d5ff" stroke-width="1.5"/>
  <rect x="50" y="96" width="150" height="22" rx="11" fill="#ede9fe"/>
  <text x="125" y="111" font-family="Segoe UI, sans-serif" font-size="10" font-weight="800" fill="#7c3aed" text-anchor="middle">PSYCHOLOGICAL CARE</text>
  <text x="50" y="146" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#3b0764">Compassionate Mental Wellness</text>
  <text x="50" y="170" font-family="Segoe UI, sans-serif" font-size="12" font-weight="600" fill="#6d28d9">At TheSamanway, you are treated with dignity, respect &amp; care.</text>
  <text x="50" y="196" font-family="Segoe UI, sans-serif" font-size="12" fill="#4b5563">Evidence-based psychological therapy tailored for individuals, couples,</text>
  <text x="50" y="214" font-family="Segoe UI, sans-serif" font-size="12" fill="#4b5563">and adolescents in a completely confidential, non-judgmental environment.</text>

  <!-- Therapy Category Pills -->
  <rect x="50" y="240" width="135" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="60" y="260" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Anxiety &amp; Stress</text>

  <rect x="195" y="240" width="145" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="205" y="260" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Depression Therapy</text>

  <rect x="350" y="240" width="120" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="360" y="260" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Family Therapy</text>

  <rect x="50" y="282" width="145" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="60" y="302" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Executive Coaching</text>

  <rect x="205" y="282" width="145" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="215" y="302" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Relationship Care</text>

  <rect x="360" y="282" width="110" height="32" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
  <text x="370" y="302" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">✓ Youth Support</text>

  <rect x="50" y="350" width="190" height="42" rx="10" fill="url(#psyBtn)"/>
  <text x="145" y="376" font-family="Segoe UI, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Book Safe Appointment →</text>

  <!-- Right Therapy Session Cards -->
  <rect x="510" y="74" width="260" height="115" rx="12" fill="#ffffff" filter="url(#psyShadow)" stroke="#e9d5ff" stroke-width="1.5"/>
  <circle cx="545" cy="115" r="20" fill="#f3e8ff"/>
  <text x="545" y="121" font-family="Segoe UI, sans-serif" font-size="14" font-weight="800" fill="#7c3aed" text-anchor="middle">1:1</text>
  <text x="580" y="110" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#3b0764">Individual Therapy</text>
  <text x="580" y="128" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#6b7280">Personal 50-min healing sessions</text>
  <text x="580" y="146" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#059669">✓ 100% Confidential</text>

  <rect x="510" y="205" width="260" height="115" rx="12" fill="#ffffff" filter="url(#psyShadow)" stroke="#e9d5ff" stroke-width="1.5"/>
  <circle cx="545" cy="246" r="20" fill="#fce7f3"/>
  <text x="545" y="252" font-family="Segoe UI, sans-serif" font-size="14" font-weight="800" fill="#db2777" text-anchor="middle">👥</text>
  <text x="580" y="241" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#3b0764">Couple &amp; Marriage</text>
  <text x="580" y="259" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#6b7280">Empathetic relationship guidance</text>
  <text x="580" y="277" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#059669">✓ Guided Dialogue</text>

  <rect x="510" y="335" width="260" height="115" rx="12" fill="#ffffff" filter="url(#psyShadow)" stroke="#e9d5ff" stroke-width="1.5"/>
  <circle cx="545" cy="376" r="20" fill="#e0e7ff"/>
  <text x="545" y="382" font-family="Segoe UI, sans-serif" font-size="14" font-weight="800" fill="#4f46e5" text-anchor="middle">🧠</text>
  <text x="580" y="371" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#3b0764">Online Consultation</text>
  <text x="580" y="389" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#6b7280">Video counseling from your home</text>
  <text x="580" y="407" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#059669">✓ Flexible Schedules</text>
</svg>"""

# 3. School Management Software SVG (Academic Navy & Gold Cloud ERP Dashboard)
school_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="schoolSidebar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="schoolShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="#f1f5f9"/>

  <!-- Left Sidebar -->
  <rect x="0" y="0" width="190" height="480" fill="url(#schoolSidebar)"/>
  <circle cx="36" cy="36" r="16" fill="#f59e0b"/>
  <!-- Graduation Cap Icon -->
  <path d="M36 26 l14 7 l-14 7 l-14 -7 Z M26 36 v8 c0 3 4 5 10 5 s10 -2 10 -5 v-8" stroke="#ffffff" stroke-width="1.8" fill="none"/>
  <text x="60" y="34" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#ffffff">SPRINGFIELD</text>
  <text x="60" y="47" font-family="Segoe UI, sans-serif" font-size="9" font-weight="700" fill="#f59e0b">ACADEMY ERP</text>

  <!-- Nav Items -->
  <rect x="12" y="75" width="166" height="30" rx="6" fill="#0284c7"/>
  <text x="42" y="94" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff">📊 Dashboard</text>

  <text x="42" y="130" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">👨‍🎓 Student Records</text>
  <text x="42" y="165" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">👩‍🏫 Teacher Portal</text>
  <text x="42" y="200" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">💳 Fee &amp; Dues Mgmt</text>
  <text x="42" y="235" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">📝 Admit Cards</text>
  <text x="42" y="270" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">📈 Attendance Sync</text>
  <text x="42" y="305" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">📄 Report Cards</text>

  <rect x="12" y="430" width="166" height="28" rx="6" fill="#334155"/>
  <text x="95" y="448" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#cbd5e1" text-anchor="middle">Cloud ERP v4.2 Secured</text>

  <!-- Top Main Content Header -->
  <rect x="190" y="0" width="610" height="52" fill="#ffffff"/>
  <line x1="190" y1="52" x2="800" y2="52" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="215" y="32" font-family="Segoe UI, sans-serif" font-size="15" font-weight="800" fill="#0f172a">Academic Overview &amp; Live Reports</text>
  <rect x="680" y="14" width="100" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
  <text x="730" y="30" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">● Cloud Synced</text>

  <!-- 3 Quick Stats Cards -->
  <rect x="215" y="70" width="175" height="74" rx="10" fill="#ffffff" filter="url(#schoolShadow)"/>
  <text x="230" y="94" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#64748b">TOTAL STUDENTS</text>
  <text x="230" y="125" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#0284c7">1,480</text>
  <circle cx="360" cy="107" r="14" fill="#e0f2fe"/>
  <text x="360" y="112" font-family="Segoe UI, sans-serif" font-size="12" text-anchor="middle">🎓</text>

  <rect x="405" y="70" width="175" height="74" rx="10" fill="#ffffff" filter="url(#schoolShadow)"/>
  <text x="420" y="94" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#64748b">TEACHING FACULTY</text>
  <text x="420" y="125" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#059669">86</text>
  <circle cx="550" cy="107" r="14" fill="#dcfce7"/>
  <text x="550" y="112" font-family="Segoe UI, sans-serif" font-size="12" text-anchor="middle">👩‍🏫</text>

  <rect x="595" y="70" width="185" height="74" rx="10" fill="#ffffff" filter="url(#schoolShadow)"/>
  <text x="610" y="94" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#64748b">FEE COLLECTION</text>
  <text x="610" y="125" font-family="Segoe UI, sans-serif" font-size="20" font-weight="800" fill="#d97706">₹ 42.8 Lakh</text>
  <circle cx="750" cy="107" r="14" fill="#fef3c7"/>
  <text x="750" y="112" font-family="Segoe UI, sans-serif" font-size="12" text-anchor="middle">💳</text>

  <!-- Big Admissions Year-Wise Bar Chart -->
  <rect x="215" y="160" width="365" height="200" rx="12" fill="#ffffff" filter="url(#schoolShadow)"/>
  <text x="235" y="186" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Admissions Year-Wise Trend</text>
  <line x1="235" y1="320" x2="560" y2="320" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Bars -->
  <rect x="260" y="270" width="30" height="50" rx="4" fill="#93c5fd"/>
  <text x="275" y="336" font-family="Segoe UI, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">2021</text>

  <rect x="320" y="240" width="30" height="80" rx="4" fill="#60a5fa"/>
  <text x="335" y="336" font-family="Segoe UI, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">2022</text>

  <rect x="380" y="210" width="30" height="110" rx="4" fill="#3b82f6"/>
  <text x="395" y="336" font-family="Segoe UI, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">2023</text>

  <rect x="440" y="195" width="30" height="125" rx="4" fill="#0284c7"/>
  <text x="455" y="336" font-family="Segoe UI, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">2024</text>

  <rect x="500" y="180" width="30" height="140" rx="4" fill="#f59e0b"/>
  <text x="515" y="336" font-family="Segoe UI, sans-serif" font-size="9" font-weight="700" fill="#d97706" text-anchor="middle">2025</text>

  <!-- Right Class Breakdown -->
  <rect x="595" y="160" width="185" height="200" rx="12" fill="#ffffff" filter="url(#schoolShadow)"/>
  <text x="610" y="186" font-family="Segoe UI, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Class Attendance</text>
  <rect x="610" y="205" width="155" height="16" rx="4" fill="#f1f5f9"/>
  <rect x="610" y="205" width="145" height="16" rx="4" fill="#10b981"/>
  <text x="615" y="217" font-family="Segoe UI, sans-serif" font-size="9" font-weight="700" fill="#ffffff">Class 10 — 96.2%</text>

  <rect x="610" y="232" width="155" height="16" rx="4" fill="#f1f5f9"/>
  <rect x="610" y="232" width="138" height="16" rx="4" fill="#0284c7"/>
  <text x="615" y="244" font-family="Segoe UI, sans-serif" font-size="9" font-weight="700" fill="#ffffff">Class 12 — 94.5%</text>

  <rect x="610" y="259" width="155" height="16" rx="4" fill="#f1f5f9"/>
  <rect x="610" y="259" width="148" height="16" rx="4" fill="#f59e0b"/>
  <text x="615" y="271" font-family="Segoe UI, sans-serif" font-size="9" font-weight="700" fill="#ffffff">Primary — 97.8%</text>

  <!-- Bottom Notification Bar -->
  <rect x="215" y="375" width="565" height="75" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="235" y="402" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">Automated SMS &amp; WhatsApp Notifications Active</text>
  <text x="235" y="422" font-family="Segoe UI, sans-serif" font-size="11" fill="#475569">Instant fee receipts, exam timetables, and admit card download links sent to parents.</text>
</svg>"""

# 4. Billing Software SVG (Retail POS, Bilingual GST Invoicing & Store Revenue)
billing_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="posGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="billRev" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="posShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="#f8fafc"/>

  <!-- Top Retail Header Bar -->
  <rect x="0" y="0" width="800" height="56" fill="#ffffff"/>
  <line x1="0" y1="56" x2="800" y2="56" stroke="#e2e8f0" stroke-width="1.5"/>
  <rect x="24" y="14" width="28" height="28" rx="6" fill="#059669"/>
  <text x="38" y="32" font-family="Segoe UI, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">₹</text>
  <text x="62" y="34" font-family="Segoe UI, sans-serif" font-size="16" font-weight="800" fill="#0f172a">CLICKON POS &amp; GST BILLING</text>

  <!-- Language Badge Switch -->
  <rect x="420" y="14" width="160" height="28" rx="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="422" y="16" width="76" height="24" rx="12" fill="#059669"/>
  <text x="460" y="32" font-family="Segoe UI, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">हिंदी बिल</text>
  <text x="535" y="32" font-family="Segoe UI, sans-serif" font-size="10" font-weight="800" fill="#475569" text-anchor="middle">English</text>

  <rect x="685" y="14" width="95" height="28" rx="6" fill="#f97316"/>
  <text x="732" y="32" font-family="Segoe UI, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">+ New Bill (F2)</text>

  <!-- 4 Colored KPI Cards matching video -->
  <rect x="25" y="75" width="175" height="85" rx="10" fill="url(#billRev)" filter="url(#posShadow)"/>
  <text x="40" y="100" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#e9d5ff">TOTAL REVENUE (TODAY)</text>
  <text x="40" y="132" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#ffffff">₹ 95,460</text>
  <circle cx="175" cy="117" r="14" fill="rgba(255,255,255,0.2)"/>
  <text x="175" y="122" font-family="Segoe UI, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">💰</text>

  <rect x="215" y="75" width="175" height="85" rx="10" fill="linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)" filter="url(#posShadow)"/>
  <text x="230" y="100" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#e0f2fe">TOTAL PRODUCTS</text>
  <text x="230" y="132" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#ffffff">132 SKU</text>
  <circle cx="365" cy="117" r="14" fill="rgba(255,255,255,0.2)"/>
  <text x="365" y="122" font-family="Segoe UI, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">📦</text>

  <rect x="405" y="75" width="175" height="85" rx="10" fill="linear-gradient(135deg, #059669 0%, #10b981 100%)" filter="url(#posShadow)"/>
  <text x="420" y="100" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#dcfce7">INVOICES GENERATED</text>
  <text x="420" y="132" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#ffffff">148 Bills</text>
  <circle cx="555" cy="117" r="14" fill="rgba(255,255,255,0.2)"/>
  <text x="555" y="122" font-family="Segoe UI, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">🧾</text>

  <rect x="595" y="75" width="180" height="85" rx="10" fill="linear-gradient(135deg, #ea580c 0%, #f97316 100%)" filter="url(#posShadow)"/>
  <text x="610" y="100" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#fed7aa">RETURN &amp; EXCHANGE</text>
  <text x="610" y="132" font-family="Segoe UI, sans-serif" font-size="22" font-weight="800" fill="#ffffff">02 Bills</text>
  <circle cx="750" cy="117" r="14" fill="rgba(255,255,255,0.2)"/>
  <text x="750" y="122" font-family="Segoe UI, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">🔄</text>

  <!-- Live Invoice Generator Table & Preview -->
  <rect x="25" y="178" width="485" height="280" rx="12" fill="#ffffff" filter="url(#posShadow)"/>
  <text x="45" y="206" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Quick Invoice Generation (GST Ready)</text>

  <!-- Table Header -->
  <rect x="40" y="222" width="455" height="28" rx="4" fill="#f8fafc"/>
  <text x="50" y="240" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#64748b">Item Name</text>
  <text x="210" y="240" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#64748b">Qty</text>
  <text x="270" y="240" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#64748b">Rate (₹)</text>
  <text x="350" y="240" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#64748b">GST %</text>
  <text x="430" y="240" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#64748b">Total</text>

  <!-- Rows -->
  <text x="50" y="274" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#1e293b">1. Premium Cotton Shirting</text>
  <text x="215" y="274" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">12 Mtr</text>
  <text x="275" y="274" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">₹ 350</text>
  <text x="360" y="274" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">5%</text>
  <text x="430" y="274" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#059669">₹ 4,410</text>

  <text x="50" y="310" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#1e293b">2. Designer Silk Saree</text>
  <text x="215" y="310" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">2 Pcs</text>
  <text x="275" y="310" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">₹ 4,200</text>
  <text x="360" y="310" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">12%</text>
  <text x="430" y="310" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#059669">₹ 9,408</text>

  <text x="50" y="346" font-family="Segoe UI, sans-serif" font-size="11" font-weight="600" fill="#1e293b">3. Formal Trousers (Ready)</text>
  <text x="215" y="346" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">4 Pcs</text>
  <text x="275" y="346" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">₹ 850</text>
  <text x="360" y="346" font-family="Segoe UI, sans-serif" font-size="11" fill="#1e293b">5%</text>
  <text x="430" y="346" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#059669">₹ 3,570</text>

  <line x1="40" y1="365" x2="495" y2="365" stroke="#e2e8f0" stroke-width="1"/>
  <text x="50" y="392" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#475569">Total Items: 3 (18 Units)</text>
  <text x="350" y="392" font-family="Segoe UI, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Net: ₹ 17,388</text>

  <rect x="50" y="410" width="140" height="34" rx="6" fill="#059669"/>
  <text x="120" y="431" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">🖨️ Print Bill (Thermal)</text>

  <rect x="205" y="410" width="140" height="34" rx="6" fill="#0284c7"/>
  <text x="275" y="431" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">📱 Send WhatsApp Bill</text>

  <!-- Right Thermal Bill Preview -->
  <rect x="525" y="178" width="250" height="280" rx="12" fill="#ffffff" filter="url(#posShadow)" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="525" y="178" width="250" height="36" rx="12" fill="#f1f5f9"/>
  <text x="650" y="201" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">RECEIPT PREVIEW (80mm)</text>
  <text x="650" y="235" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">*** J. P. STORES GORAKHPUR ***</text>
  <text x="650" y="250" font-family="monospace" font-size="9" fill="#475569" text-anchor="middle">GSTIN: 09AAAFJ1234F1Z8</text>
  <text x="650" y="265" font-family="monospace" font-size="9" fill="#475569" text-anchor="middle">Date: 19-Nov-2026  12:04 PM</text>
  <text x="545" y="285" font-family="monospace" font-size="9" fill="#334155">Shirting Cotton (12)    ₹ 4,410</text>
  <text x="545" y="302" font-family="monospace" font-size="9" fill="#334155">Silk Saree (2)          ₹ 9,408</text>
  <text x="545" y="319" font-family="monospace" font-size="9" fill="#334155">Formal Trousers (4)     ₹ 3,570</text>
  <line x1="545" y1="332" x2="755" y2="332" stroke="#cbd5e1" stroke-dasharray="3,3"/>
  <text x="545" y="352" font-family="monospace" font-size="11" font-weight="700" fill="#059669">TOTAL AMOUNT:          ₹ 17,388</text>
  <text x="650" y="380" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">हिंदी व अंग्रेजी बिल समर्थित</text>
  <text x="650" y="400" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Thank You! Visit Again!</text>
  <rect x="595" y="415" width="110" height="28" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="650" y="433" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#059669" text-anchor="middle">✓ GST Verified</text>
</svg>"""

# 5. Expertise Row 1: Website Development & Design (Multi-Device Responsive Mockup)
expertise_webdev_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 380" width="100%" height="100%">
  <defs>
    <linearGradient id="wdBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <filter id="wdShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Ambient Backdrop -->
  <rect width="650" height="380" rx="16" fill="url(#wdBg)"/>
  <circle cx="100" cy="80" r="140" fill="#38bdf8" opacity="0.25"/>
  <circle cx="560" cy="300" r="180" fill="#002d62" opacity="0.4"/>

  <!-- Desktop Laptop Mockup -->
  <g transform="translate(60, 45)" filter="url(#wdShadow)">
    <!-- Screen Bezel -->
    <rect x="0" y="0" width="400" height="240" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
    <circle cx="200" cy="7" r="2.5" fill="#64748b"/>
    <!-- Webpage Viewport -->
    <rect x="8" y="14" width="384" height="216" rx="4" fill="#ffffff"/>
    <!-- Webpage Header -->
    <rect x="8" y="14" width="384" height="24" fill="#0284c7"/>
    <circle cx="22" cy="26" r="4" fill="#ffffff"/>
    <rect x="34" y="22" width="60" height="8" rx="4" fill="#ffffff" opacity="0.8"/>
    <rect x="260" y="22" width="35" height="8" rx="4" fill="#ffffff" opacity="0.8"/>
    <rect x="305" y="22" width="35" height="8" rx="4" fill="#ffffff" opacity="0.8"/>
    <rect x="350" y="19" width="32" height="14" rx="7" fill="#ff6b00"/>
    <!-- Webpage Hero -->
    <rect x="20" y="50" width="160" height="16" rx="4" fill="#002d62"/>
    <rect x="20" y="72" width="190" height="8" rx="4" fill="#64748b"/>
    <rect x="20" y="86" width="140" height="8" rx="4" fill="#64748b"/>
    <rect x="20" y="104" width="70" height="18" rx="9" fill="#0284c7"/>
    <!-- Webpage Cards -->
    <rect x="20" y="136" width="105" height="80" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="26" y="142" width="93" height="40" rx="4" fill="#e0f2fe"/>
    <rect x="26" y="188" width="60" height="6" rx="3" fill="#0284c7"/>
    <rect x="26" y="198" width="80" height="6" rx="3" fill="#94a3b8"/>

    <rect x="135" y="136" width="105" height="80" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="141" y="142" width="93" height="40" rx="4" fill="#ffedd5"/>
    <rect x="141" y="188" width="60" height="6" rx="3" fill="#ea580c"/>
    <rect x="141" y="198" width="80" height="6" rx="3" fill="#94a3b8"/>

    <!-- Hero Image Banner on Laptop -->
    <rect x="250" y="46" width="132" height="170" rx="6" fill="#0f172a"/>
    <circle cx="316" cy="100" r="30" fill="#0284c7" opacity="0.6"/>
    <rect x="270" y="150" width="92" height="10" rx="5" fill="#38bdf8"/>
    <rect x="285" y="166" width="62" height="8" rx="4" fill="#ffffff"/>

    <!-- Laptop Base -->
    <path d="M-25 240 L425 240 L410 252 L-10 252 Z" fill="#94a3b8"/>
    <rect x="175" y="240" width="50" height="4" rx="2" fill="#64748b"/>
  </g>

  <!-- Smartphone Mobile Mockup (Foreground Floating) -->
  <g transform="translate(450, 95)" filter="url(#wdShadow)">
    <rect x="0" y="0" width="130" height="240" rx="18" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="6" y="6" width="118" height="228" rx="14" fill="#ffffff"/>
    <!-- Mobile Notch -->
    <rect x="42" y="10" width="46" height="6" rx="3" fill="#0f172a"/>
    <!-- Mobile Screen UI -->
    <rect x="14" y="24" width="102" height="14" rx="4" fill="#0284c7"/>
    <rect x="14" y="46" width="80" height="10" rx="3" fill="#002d62"/>
    <rect x="14" y="62" width="102" height="50" rx="6" fill="#e0f2fe"/>
    <rect x="14" y="120" width="102" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="14" y="164" width="102" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="14" y="208" width="102" height="16" rx="8" fill="#ff6b00"/>
  </g>
</svg>"""

# 6. Expertise Row 2: Custom Software Architecture (Enterprise SaaS / Cloud ERP Diagram)
expertise_software_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 380" width="100%" height="100%">
  <defs>
    <linearGradient id="softBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="650" height="380" rx="16" fill="url(#softBg)"/>
  
  <!-- Grid Matrix Dots -->
  <g fill="#334155" opacity="0.3">
    <circle cx="50" cy="50" r="1.5"/><circle cx="100" cy="50" r="1.5"/><circle cx="150" cy="50" r="1.5"/><circle cx="200" cy="50" r="1.5"/><circle cx="250" cy="50" r="1.5"/><circle cx="300" cy="50" r="1.5"/><circle cx="350" cy="50" r="1.5"/><circle cx="400" cy="50" r="1.5"/><circle cx="450" cy="50" r="1.5"/><circle cx="500" cy="50" r="1.5"/><circle cx="550" cy="50" r="1.5"/><circle cx="600" cy="50" r="1.5"/>
    <circle cx="50" cy="120" r="1.5"/><circle cx="100" cy="120" r="1.5"/><circle cx="150" cy="120" r="1.5"/><circle cx="200" cy="120" r="1.5"/><circle cx="250" cy="120" r="1.5"/><circle cx="300" cy="120" r="1.5"/><circle cx="350" cy="120" r="1.5"/><circle cx="400" cy="120" r="1.5"/><circle cx="450" cy="120" r="1.5"/><circle cx="500" cy="120" r="1.5"/><circle cx="550" cy="120" r="1.5"/><circle cx="600" cy="120" r="1.5"/>
    <circle cx="50" cy="190" r="1.5"/><circle cx="100" cy="190" r="1.5"/><circle cx="150" cy="190" r="1.5"/><circle cx="200" cy="190" r="1.5"/><circle cx="250" cy="190" r="1.5"/><circle cx="300" cy="190" r="1.5"/><circle cx="350" cy="190" r="1.5"/><circle cx="400" cy="190" r="1.5"/><circle cx="450" cy="190" r="1.5"/><circle cx="500" cy="190" r="1.5"/><circle cx="550" cy="190" r="1.5"/><circle cx="600" cy="190" r="1.5"/>
    <circle cx="50" cy="260" r="1.5"/><circle cx="100" cy="260" r="1.5"/><circle cx="150" cy="260" r="1.5"/><circle cx="200" cy="260" r="1.5"/><circle cx="250" cy="260" r="1.5"/><circle cx="300" cy="260" r="1.5"/><circle cx="350" cy="260" r="1.5"/><circle cx="400" cy="260" r="1.5"/><circle cx="450" cy="260" r="1.5"/><circle cx="500" cy="260" r="1.5"/><circle cx="550" cy="260" r="1.5"/><circle cx="600" cy="260" r="1.5"/>
    <circle cx="50" cy="330" r="1.5"/><circle cx="100" cy="330" r="1.5"/><circle cx="150" cy="330" r="1.5"/><circle cx="200" cy="330" r="1.5"/><circle cx="250" cy="330" r="1.5"/><circle cx="300" cy="330" r="1.5"/><circle cx="350" cy="330" r="1.5"/><circle cx="400" cy="330" r="1.5"/><circle cx="450" cy="330" r="1.5"/><circle cx="500" cy="330" r="1.5"/><circle cx="550" cy="330" r="1.5"/><circle cx="600" cy="330" r="1.5"/>
  </g>

  <!-- Flow Connecting Glow Lines -->
  <path d="M160 190 H300 V120 H450" stroke="#38bdf8" stroke-width="2.5" fill="none" opacity="0.8" filter="url(#glow)"/>
  <path d="M300 190 V270 H450" stroke="#a855f7" stroke-width="2.5" fill="none" opacity="0.8" filter="url(#glow)"/>

  <!-- Center Core Microservice Engine Node -->
  <rect x="220" y="150" width="160" height="80" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2" filter="url(#glow)"/>
  <circle cx="245" cy="190" r="12" fill="#0284c7"/>
  <text x="245" y="195" font-family="Segoe UI, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">⚙️</text>
  <text x="268" y="182" font-family="Segoe UI, sans-serif" font-size="12" font-weight="800" fill="#ffffff">ERP Core Engine</text>
  <text x="268" y="200" font-family="Segoe UI, sans-serif" font-size="10" font-weight="600" fill="#38bdf8">REST APIs &amp; Cloud</text>

  <!-- Left Input / Client Node -->
  <rect x="40" y="150" width="140" height="80" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="65" cy="190" r="12" fill="#3b82f6"/>
  <text x="65" y="195" font-family="Segoe UI, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">💻</text>
  <text x="86" y="182" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Client Web App</text>
  <text x="86" y="200" font-family="Segoe UI, sans-serif" font-size="9" fill="#94a3b8">Bespoke UI / UX</text>

  <!-- Right Top Database Node -->
  <rect x="430" y="80" width="170" height="80" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="455" cy="120" r="12" fill="#059669"/>
  <text x="455" y="125" font-family="Segoe UI, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">🗄️</text>
  <text x="478" y="112" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Secure SQL Database</text>
  <text x="478" y="130" font-family="Segoe UI, sans-serif" font-size="9" fill="#10b981">Encrypted &amp; Cloud Stored</text>

  <!-- Right Bottom Analytics Node -->
  <rect x="430" y="230" width="170" height="80" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <circle cx="455" cy="270" r="12" fill="#7c3aed"/>
  <text x="455" y="275" font-family="Segoe UI, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">📊</text>
  <text x="478" y="262" font-family="Segoe UI, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Real-Time Dashboards</text>
  <text x="478" y="280" font-family="Segoe UI, sans-serif" font-size="9" fill="#c084fc">GST, Invoices &amp; Reports</text>

  <!-- Top Status Badge -->
  <rect x="235" y="24" width="180" height="26" rx="13" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1"/>
  <circle cx="250" cy="37" r="4" fill="#10b981"/>
  <text x="325" y="41" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#6ee7b7" text-anchor="middle">99.98% Cloud Uptime Active</text>
</svg>"""

# 7. Expertise Row 3: Results-Driven SEO & Marketing (Google Page 1 Ranking & Growth Graph)
expertise_seo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 380" width="100%" height="100%">
  <defs>
    <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <filter id="seoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="650" height="380" rx="16" fill="url(#seoGrad)"/>

  <!-- Google Ranking #1 Snippet Card -->
  <rect x="40" y="40" width="360" height="110" rx="10" fill="#ffffff" filter="url(#seoGlow)"/>
  <circle cx="65" cy="65" r="10" fill="#ea4335"/>
  <text x="65" y="69" font-family="Segoe UI, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">G</text>
  <text x="85" y="62" font-family="Segoe UI, sans-serif" font-size="10" fill="#64748b">https://client-brand.in › gorakhpur</text>
  <text x="85" y="76" font-family="Segoe UI, sans-serif" font-size="11" font-weight="800" fill="#16a34a">#1 RANKING ON GOOGLE SEARCH</text>
  <text x="50" y="104" font-family="Segoe UI, sans-serif" font-size="14" font-weight="800" fill="#1a0dab">Best Doctor &amp; Healthcare Center in Gorakhpur</text>
  <text x="50" y="122" font-family="Segoe UI, sans-serif" font-size="10" fill="#4d5156">Top rated clinical care with 4.9★ stars and 800+ verified customer reviews...</text>

  <!-- Soaring Traffic Growth Area & Line -->
  <g transform="translate(40, 190)">
    <!-- Axis Grid Lines -->
    <line x1="0" y1="0" x2="560" y2="0" stroke="#065f46" stroke-dasharray="4,4"/>
    <line x1="0" y1="45" x2="560" y2="45" stroke="#065f46" stroke-dasharray="4,4"/>
    <line x1="0" y1="90" x2="560" y2="90" stroke="#065f46" stroke-dasharray="4,4"/>
    <line x1="0" y1="135" x2="560" y2="135" stroke="#047857" stroke-width="1.5"/>

    <!-- Shaded Growth Fill -->
    <path d="M0 120 Q120 110 200 85 T380 40 T540 10 L540 135 L0 135 Z" fill="rgba(16, 185, 129, 0.15)"/>
    <!-- Neon Glowing Line -->
    <path d="M0 120 Q120 110 200 85 T380 40 T540 10" stroke="url(#arrowGrad)" stroke-width="4.5" fill="none" filter="url(#seoGlow)"/>

    <!-- Rocket Point -->
    <circle cx="540" cy="10" r="6" fill="#34d399" filter="url(#seoGlow)"/>
    <!-- Growth Arrow -->
    <path d="M525 10 L545 10 L540 -10 Z" fill="#34d399"/>
  </g>

  <!-- Metric Badges Floating -->
  <rect x="430" y="40" width="170" height="65" rx="10" fill="rgba(0, 0, 0, 0.4)" stroke="#34d399" stroke-width="1.5"/>
  <text x="445" y="65" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#a7f3d0">ORGANIC TRAFFIC</text>
  <text x="445" y="92" font-family="Segoe UI, sans-serif" font-size="22" font-weight="900" fill="#34d399">+380%</text>

  <rect x="430" y="115" width="170" height="65" rx="10" fill="rgba(0, 0, 0, 0.4)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="445" y="140" font-family="Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#bae6fd">LOCAL MAP CALLS</text>
  <text x="445" y="167" font-family="Segoe UI, sans-serif" font-size="22" font-weight="900" fill="#38bdf8">1,420/Mo</text>
</svg>"""

files = {
    'doctor-preview.svg': doctor_svg,
    'mental-health-preview.svg': mental_health_svg,
    'school-preview.svg': school_svg,
    'billing-preview.svg': billing_svg,
    'expertise-webdev.svg': expertise_webdev_svg,
    'expertise-software.svg': expertise_software_svg,
    'expertise-seo.svg': expertise_seo_svg
}

for name, content in files.items():
    with open(os.path.join(out_dir, name), 'w', encoding='utf-8') as f:
        f.write(content.strip())
    print(f'Generated: {name}')

print('All 7 distinct SVG assets generated successfully!')
