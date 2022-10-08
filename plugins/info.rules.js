import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let esce = `text nya `
let flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
let rules = `➯ *Kabul Store || Ready*
1. NO PROMOSI❌
2. NO CULIK MEMBER❌
3. KIRIM BUKTI TF PALSU❌
4. SHERE LINK DALAM BENTUK APAPUN❌ 
5. KIRIM +18❌
6. CULIK MEMBER LAPOR ADMIN❌
7. DILARANG MAEN BOT❌
8. *SEKIAN TERIMAKASIH*
❏┳━━◩
┍┛
┆⟥⟤ ➠ (${global.bottime})
└─┈⟅`
let nth = `☰⟥⟝⟞⟝❨ *PERATURAN GROUP* ❩⟞⟝⟞⟤☰`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, 'LIST', '.list', 'STORE', '.store', 'LISTSTORE', '.liststore', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'wa.me/6287878823108',
    mediaType: 2, 
    description: sgc,
    title: "Sᴇᴡᴀ Cᴇᴋ Dɪsɪɴɪ Cᴜʏ!!!",
    body: wm,
    thumbnail: fs.readFileSync('./Poto/thumbnail.jpg'),
    sourceUrl: 'wa.me/6281386943282',
     }}
  })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(peraturan group|peraturan|aturan|pe)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
