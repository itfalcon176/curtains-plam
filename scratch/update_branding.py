from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. Update Van Image
van_orig = Image.open('C:/Users/User/.gemini/antigravity-ide/brain/a7f0fd2f-4acd-4c2c-b765-fc654cac6b22/in_home_fabric_van_1790049524065.jpg').convert('RGB')
logo_white = Image.open('public/EasyBlindscurtain_logo-palm-white.png').convert('RGBA')

draw_van = ImageDraw.Draw(van_orig)

# Sample surrounding colors for smooth blend
panel_bg = (42, 45, 48)
draw_van.rectangle([265, 305, 515, 525], fill=panel_bg)

# Roof emblem area
roof_bg = (105, 112, 118)
draw_van.rectangle([385, 215, 455, 275], fill=roof_bg)

# Door phone number area
door_bg = (98, 105, 112)
draw_van.rectangle([300, 620, 520, 670], fill=door_bg)

# Scale and paste Easy Blinds & Curtains official logo
lw, lh = logo_white.size
new_lw = 220
new_lh = int(lh * (new_lw / lw))
logo_resized = logo_white.resize((new_lw, new_lh), Image.Resampling.LANCZOS)
van_orig.paste(logo_resized, (280, 375), logo_resized)

try:
    font_sub = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 11)
    font_phone = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 20)
except Exception:
    font_sub = font_phone = ImageFont.load_default()

draw_van.text((288, 440), "DUBAI'S PREMIER MOBILE SHOWROOM", fill=(205, 168, 125), font=font_sub)
draw_van.text((320, 630), "+971 444 319 50", fill=(255, 255, 255), font=font_phone)

# Roof EB icon
icon = Image.open('scratch/logo_icon.png').convert('RGBA')
iw, ih = icon.size
icon_res = icon.resize((int(iw * 35 / ih), 35), Image.Resampling.LANCZOS)
van_orig.paste(icon_res, (405, 225), icon_res)

# Folder area: clean "LUXE" text on folder
folder_bg = (235, 230, 225)
draw_van.rectangle([620, 560, 680, 600], fill=folder_bg)
icon_small = icon.resize((int(iw * 20 / ih), 20), Image.Resampling.LANCZOS)
van_orig.paste(icon_small, (635, 568), icon_small)

van_orig.save('public/card-measuring-mobile-van.jpg', quality=95)
print('Van updated')

# 2. Update Technician T-shirt Image
tech_orig = Image.open('C:/Users/User/.gemini/antigravity-ide/brain/a7f0fd2f-4acd-4c2c-b765-fc654cac6b22/laser_measurement_1790049577088.jpg').convert('RGB')
draw_tech = ImageDraw.Draw(tech_orig)

# Blend polo shirt chest area over the old embroidery
shirt_navy = (20, 30, 52)
draw_tech.rectangle([495, 335, 580, 420], fill=shirt_navy)

# Add genuine EB | EASY BLINDS & CURTAINS logo on chest
tech_logo_w = 80
tech_logo_h = int(lh * (tech_logo_w / lw))
tech_logo_res = logo_white.resize((tech_logo_w, tech_logo_h), Image.Resampling.LANCZOS)
tech_orig.paste(tech_logo_res, (498, 360), tech_logo_res)

tech_orig.save('public/card-measuring-laser-precision.jpg', quality=95)
print('Technician updated')
