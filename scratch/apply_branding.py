from PIL import Image, ImageDraw, ImageFont

# 1. Van Image
van = Image.open('C:/Users/User/.gemini/antigravity-ide/brain/a7f0fd2f-4acd-4c2c-b765-fc654cac6b22/in_home_fabric_van_1790049524065.jpg').convert('RGB')
logo_white = Image.open('public/EasyBlindscurtain_logo-palm-white.png').convert('RGBA')

draw = ImageDraw.Draw(van)

# Van Window Panel is x: 175 to 495, y: 290 to 510
# The window panel background is dark charcoal / black
panel_bg = (44, 46, 49)
draw.rectangle([170, 285, 495, 515], fill=panel_bg)

# Roof logo: x: 305 to 370, y: 195 to 250
roof_bg = (102, 110, 117)
draw.rectangle([305, 195, 370, 250], fill=roof_bg)

# Phone number on lower door: x: 195 to 455, y: 575 to 630
door_bg = (98, 106, 113)
draw.rectangle([190, 575, 455, 630], fill=door_bg)

# Scale and paste official Easy Blinds & Curtains logo into the window panel
lw, lh = logo_white.size
new_w = 280
new_h = int(lh * (new_w / lw))
logo_res = logo_white.resize((new_w, new_h), Image.Resampling.LANCZOS)
# Center in window: window x is 170 to 495 (width 325, mid 332)
van.paste(logo_res, (192, 360), logo_res)

try:
    font_sub = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 12)
    font_phone = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 23)
except Exception:
    font_sub = font_phone = ImageFont.load_default()

# Add subtitle
draw.text((195, 430), "DUBAI'S PREMIER MOBILE SHOWROOM", fill=(205, 168, 125), font=font_sub)

# Add real phone number on door
draw.text((215, 588), "+971 444 319 50", fill=(255, 255, 255), font=font_phone)

# Add gold EB icon on roof
icon = Image.open('scratch/logo_icon.png').convert('RGBA')
iw, ih = icon.size
icon_res = icon.resize((int(iw * 38 / ih), 38), Image.Resampling.LANCZOS)
van.paste(icon_res, (325, 202), icon_res)

# Clean "LUXE" text on the open book held by the lady (x: 620 to 670, y: 585 to 625)
draw.rectangle([620, 585, 675, 620], fill=(235, 230, 225))
icon_tiny = icon.resize((int(iw * 18 / ih), 18), Image.Resampling.LANCZOS)
van.paste(icon_tiny, (635, 592), icon_tiny)

van.save('public/card-measuring-mobile-van.jpg', quality=95)
print('Van updated successfully')

# 2. Technician T-Shirt Image
tech = Image.open('C:/Users/User/.gemini/antigravity-ide/brain/a7f0fd2f-4acd-4c2c-b765-fc654cac6b22/laser_measurement_1790049577088.jpg').convert('RGB')
draw_t = ImageDraw.Draw(tech)

# Chest embroidery area: x: 520 to 575, y: 335 to 400
# Sample smooth navy shirt color
navy = tech.getpixel((500, 360))
draw_t.rectangle([515, 335, 578, 400], fill=navy)

# Put gold EB | EASY BLINDS & CURTAINS logo on chest
tech_logo_w = 60
tech_logo_h = int(lh * (tech_logo_w / lw))
t_logo_res = logo_white.resize((tech_logo_w, tech_logo_h), Image.Resampling.LANCZOS)
tech.paste(t_logo_res, (518, 355), t_logo_res)

tech.save('public/card-measuring-laser-precision.jpg', quality=95)
print('Technician updated successfully')
