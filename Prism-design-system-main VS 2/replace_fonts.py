import glob
import os

font_face_css = """
<style>
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_thin.woff2') format('woff2'); font-weight: 100; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_extralight.woff2') format('woff2'); font-weight: 200; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_light.woff2') format('woff2'); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_regular.woff2') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_medium.woff2') format('woff2'); font-weight: 500; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_semibold.woff2') format('woff2'); font-weight: 600; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_bold.woff2') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_extrabold.woff2') format('woff2'); font-weight: 800; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_black.woff2') format('woff2'); font-weight: 900; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_extrablack.woff2') format('woff2'); font-weight: 950; font-style: normal; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_regular_italic.woff2') format('woff2'); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_bold_italic.woff2') format('woff2'); font-weight: 700; font-style: italic; font-display: swap; }
@font-face { font-family: 'Zoho Puvi'; src: url('https://fonts.zohowebstatic.com/zohopuvi/3.5/zoho_puvi_semibold_italic.woff2') format('woff2'); font-weight: 600; font-style: italic; font-display: swap; }
</style>
""".strip()

html_files = glob.glob('*.html')

old_link1 = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">'
new_link1 = font_face_css

old_link2 = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'
new_link2 = '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\n' + font_face_css

old_link3 = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">'
new_link3 = '<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">\n' + font_face_css

replaced_count = 0

for fpath in html_files:
    with open(fpath, 'r') as f:
        content = f.read()

    original_content = content

    content = content.replace(old_link1, new_link1)
    content = content.replace(old_link2, new_link2)
    content = content.replace(old_link3, new_link3)
    
    # In case there are quotes around Outfit
    content = content.replace("'Outfit'", "'Zoho Puvi'")
    content = content.replace('"Outfit"', "'Zoho Puvi'")

    if content != original_content:
        with open(fpath, 'w') as f:
            f.write(content)
        replaced_count += 1

print(f"Replaced fonts in {replaced_count} files.")
