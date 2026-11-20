import os
import subprocess

ffmpeg = r"C:\Users\Lenovo\AppData\Roaming\Python\Python314\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v9.0.2.exe"
brain_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\7328b6c6-4b24-42db-b852-be25508d1fc8"
src13 = os.path.join(brain_dir, "shine_frames", "sec_13.jpg")
src22 = os.path.join(brain_dir, "shine_frames", "sec_22.jpg")
src28 = os.path.join(brain_dir, "shine_frames", "sec_28.jpg")

out_dir = r"C:\Users\Lenovo\OneDrive\Desktop\click on media\public\assets\showcase"
os.makedirs(out_dir, exist_ok=True)

# 1. Doctor website: box x: 180, y: 340, w: 730, h: 540
cmd1 = [ffmpeg, "-i", src13, "-vf", "crop=730:540:180:340", os.path.join(out_dir, "doctor-preview.jpg"), "-y"]
subprocess.run(cmd1, capture_output=True)

# 2. Mental health website: box x: 975, y: 340, w: 730, h: 540
cmd2 = [ffmpeg, "-i", src13, "-vf", "crop=730:540:975:340", os.path.join(out_dir, "mental-health-preview.jpg"), "-y"]
subprocess.run(cmd2, capture_output=True)

# 3. School software: box x: 170, y: 535, w: 740, h: 360
cmd3 = [ffmpeg, "-i", src22, "-vf", "crop=740:360:170:535", os.path.join(out_dir, "school-preview.jpg"), "-y"]
subprocess.run(cmd3, capture_output=True)

# 4. Billing software: box x: 970, y: 375, w: 740, h: 320
cmd4 = [ffmpeg, "-i", src28, "-vf", "crop=740:320:970:375", os.path.join(out_dir, "billing-preview.jpg"), "-y"]
subprocess.run(cmd4, capture_output=True)

print("Saved cleanly!")
